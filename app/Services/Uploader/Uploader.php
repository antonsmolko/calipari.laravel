<?php

namespace App\Services\Uploader;

use App\Models\Image;
use App\Services\Format\FormatService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class Uploader
{
    private UploadedFile $uploadedFile;
    private array $fileProps = [];
    private string $storagePath;
    private string $uploadPath;
    private array $uploadRules;
    private int $defaultMaxPrintWidth;
    private ImageValidationBuilder $imageValidationBuilder;
    private Collection $formats;

    public function __construct(
        ImageValidationBuilder $imageValidationBuilder,
        FormatService $formatService
    ) {
        $this->imageValidationBuilder = $imageValidationBuilder;
        $this->formats = $formatService->index();
        $this->storagePath = ltrim(config('uploads.image_storage_path', ''));
        $this->uploadPath = ltrim(config('uploads.image_upload_path', ''));
        $this->uploadRules = config('uploads.image_upload_rules', '');
        $this->defaultMaxPrintWidth = config('uploads.default_max_print_width');
    }

    protected function setProps($name, $value)
    {
        $this->fileProps[$name] = $value;
    }

    /**
     * @param int $width
     * @param int $height
     * @return int|void
     */
    protected function getFormatId(int $width, int $height)
    {
        return $height > 0
            ? $this->defineImageFormat($width, $height)
            : abort(
                422,
                trans('image_validation.wrong_proportions', ['file_name' => $this->fileProps['original_name']])
            );
    }

    /**
     * @param int $width
     * @param int $height
     * @return int
     */
    protected function defineImageFormat(int $width, int $height): int
    {
        $ratio = $width / $height;
        $format = $this->formats->first(fn ($f) => (($f->min <= $ratio) && ($f->max > $ratio)));

        return $format->id;
    }

    /**
     * @param UploadedFile|null $file
     * @return bool
     */
    public function validate(UploadedFile $file = null): bool
    {
        $uploadedFile = $file ?? $this->uploadedFile;

        if (!$uploadedFile->isValid()) {
            abort(422, trans('image_validation.loading_failed', [
                'file_name' => $uploadedFile->getClientOriginalName()
            ]));
        }

        $this->setValidatedProps($uploadedFile);

        return $this->imageValidationBuilder
            ->init($this->fileProps, $this->uploadRules)
            ->isAllowExtension()
            ->isAllowMime()
            ->isAllowMinSize()
            ->isAllowMaxSize()
            ->isAllow();
    }

    /**
     * @param UploadedFile $file
     * @param string $removePath
     * @return Uploader|void
     */
    public function change(UploadedFile $file, string $removePath)
    {
        $uploadAttributes = $this->upload($file);
        $this->remove($removePath);

        return $uploadAttributes;
    }

    /**
     * @param array $files
     * @return array|array[]|void[]
     */
    public function multipleUpload(array $files)
    {
        $imagesData = array_map(fn (UploadedFile $file) => $this->store($file), $files);
        $this->syncStorageFromLocalToS3();

        return $imagesData;
    }

    /**
     * @param UploadedFile $uploadedFile
     * @param string|null $name
     * @return array|void
     */
    public function upload(UploadedFile $uploadedFile, string $name = null)
    {
        $imageData = $this->store($uploadedFile, $name);
        $this->syncStorageFromLocalToS3();

        return $imageData;
    }

    /**
     * @param UploadedFile $uploadedFile
     * @param string $name
     * @return array|void
     */
    public function store(UploadedFile $uploadedFile, string $name = null)
    {
        $this->clearState();
        $this->uploadedFile = $uploadedFile;
        $this->validate();
        $this->setQuantitativeProps($uploadedFile, $this->storagePath, $name);

        if ($name) {
            $this->remove($name);
        }

        $this->localStore();

        return $this->getStorageUploadedFileData();
    }

    private function localStore()
    {
        $baseDirPath = $this->getUploadedBaseDirPath($this->fileProps['name']);
        $path = $this->uploadPath . '/' . $baseDirPath; // public/uploads/images

        $filePath = $this->uploadedFile->storeAs($path, $this->fileProps['name']);

        Storage::exists($filePath)
        ||
        abort(400, __('image_validation.error_image_upload'));
    }

    protected function clearState()
    {
        unset(
            $this->request,
            $this->fileProps,
            $this->uploadedFile);
    }

    /**
     * @param string $path
     * @return bool
     */
    public function remove(string $path): bool
    {
        $dir = $this->getUploadedBaseDirPath($path);
        $filePath = $dir . '/' . $path;
        $storageFilePath = $this->storagePath . '/' . $filePath;

        Storage::disk('s3')->delete($filePath);

        return File::delete($storageFilePath);
    }

    /**
     * @param UploadedFile $file
     * @param Image $image
     * @return bool|void
     */
    public function isEqualSizes(UploadedFile $file, Image $image)
    {
        list($width, $height) = getImageSize($file);

        return $width === $image->width && $height === $image->height;
    }

    /**
     * Sets the properties of the uploaded image file that will be validated
     *
     * @param UploadedFile $uploadedFile
     */
    protected function setValidatedProps(UploadedFile $uploadedFile)
    {
        $this->setProps('original_name', $this->getOriginalName($uploadedFile));
        $this->setProps('size', $uploadedFile->getSize());
        $this->setProps('extension', $this->getExtension($uploadedFile));
        $this->setProps('mime', $uploadedFile->getMimeType());
    }

    /**
     * Set the quantitative properties of the uploaded image file
     *
     * @param UploadedFile $uploadedFile
     * @param string $pathStorage
     * @param string $refreshName
     */
    protected function setQuantitativeProps(UploadedFile $uploadedFile, string $pathStorage, string $refreshName = null)
    {
        list($width, $height) = getImageSize($uploadedFile);
        $formatId = $this->getFormatId($width, $height);
        $name = $refreshName ?? $this->generateSha1Name($uploadedFile);
        $dir = $this->getUploadedBaseDirPath($name);

        $this->setProps('width', $width);
        $this->setProps('height', $height);
        $this->setProps('format_id', $formatId);
        $this->setProps('name', $name); // 3e89bc7b416ccce075e0fca2f2cc1172feb6dc24.jpg
        $this->setProps('directory', $dir); // 3/3e8
        $this->setProps('path', $pathStorage . '/' . $dir);
    }

    /**
     * @param UploadedFile $uploadedFile
     * @return string
     */
    protected function generateSha1Name(UploadedFile $uploadedFile): string
    {
        $name = $this->getOriginalName($uploadedFile);
        $ext = $this->getExtension($uploadedFile);

        return sha1($name . microtime(true)) . '.' . $ext; // 3e89bc7b416ccce075e0fca2f2cc1172feb6dc24.jpg
    }

    /**
     * Returns the original name of uploaded file
     *
     * @param UploadedFile $uploadedFile
     * @return string|string[]|null
     */
    protected function getOriginalName(UploadedFile $uploadedFile) : string
    {
        $ext = $uploadedFile->getClientOriginalExtension();
        $name = $uploadedFile->getClientOriginalName();

        return preg_replace('/\.' . $ext . '$/', '', $name);
    }

    /**
     * @param UploadedFile $uploadedFile
     * @return string
     */
    protected function getExtension(UploadedFile $uploadedFile): string
    {
        return mb_strtolower($uploadedFile->getClientOriginalExtension());
    }

    /**
     * @param string $name
     * @return string
     */
    public function getUploadedBaseDirPath(string $name): string
    {
        return getBaseImagePath($name); // 3/3e8
    }

    /**
     * @return array
     */
    public function getStorageUploadedFileData(): array
    {
        $maxPrintWidth = round(
            $this->defaultMaxPrintWidth *
            $this->fileProps['width'] /
            $this->fileProps['height'] /
            10) * 10;

        return [
            'path' => $this->fileProps['name'],
            'extension' => $this->fileProps['extension'],
            'width' => $this->fileProps['width'],
            'height' => $this->fileProps['height'],
            'format_id' => $this->fileProps['format_id'],
            'max_print_width' => $maxPrintWidth
        ];
    }

    public function syncStorageFromLocalToS3(bool $delete = false)
    {
        return Artisan::call('storage:sync', ['--delete' => $delete]);
    }
}
