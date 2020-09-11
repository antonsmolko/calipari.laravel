<?php

namespace App\Services\Uploader;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;

class InterventionImageUploader
{
    private string $uploadPath;

    /**
     * InterventionImageUploader constructor.
     */
    public function __construct() {
        $this->uploadPath = ltrim(config('uploads.image_upload_path', ''));
    }

    /**
     * @param array $files
     * @return array|array[]|void[]
     */
    public function multipleUpload(array $files)
    {
        $imagesData = array_map(fn (UploadedFile $file) => $this->localStore($file), $files);
        $this->syncStorageFromLocalToS3();

        return $imagesData;
    }

    /**
     * @param UploadedFile $image
     * @return string
     */
    public function upload(UploadedFile $image)
    {
        $fileName = $this->localStore($image);
        $this->syncStorageFromLocalToS3();

        return $fileName;
    }

    /**
     * @param UploadedFile $image
     * @return string|void
     */
    private function localStore(UploadedFile $image)
    {
        $fileName = $this->generateSha1Name($image);
        $baseDirPath = $this->getUploadedBaseDirPath($fileName);
        $path = $this->uploadPath . '/' . $baseDirPath; // public/uploads/images/3/3e8

//        Storage::put($path . '/' . $fileName, $image);
        $filePath = $image->storeAs($path, $fileName);

        return Storage::exists($filePath)
            ? $fileName
            : abort(400, __('image_validation.error_image_upload'));
    }

    /**
     * @param UploadedFile $image
     * @return string
     */
    protected function generateSha1Name(UploadedFile $image): string
    {
        $name = $this->getOriginalName($image);
        $ext = $this->getExtension($image);

        return sha1($name . microtime(true)) . '.' . $ext; // 3e89bc7b416ccce075e0fca2f2cc1172feb6dc24.jpg
    }

    /**
     * @param UploadedFile $image
     * @return string
     */
    protected function getOriginalName(UploadedFile $image) : string
    {
        $ext = $image->getClientOriginalExtension();
        $name = $image->getClientOriginalName();

        return preg_replace('/\.' . $ext . '$/', '', $name);
    }

    /**
     * @param UploadedFile $image
     * @return string
     */
    protected function getExtension(UploadedFile $image): string
    {
        return mb_strtolower($image->getClientOriginalExtension());
    }

    /**
     * @param string $name
     * @return string
     */
    public function getUploadedBaseDirPath(string $name): string
    {
        return getBaseImagePath($name); // 3/3e8
    }

    public function syncStorageFromLocalToS3()
    {
        return Artisan::call('storage:sync');
    }
}
