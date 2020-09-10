<?php

namespace App\Services\Uploader;

use Intervention\Image\Image;
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
     * @param Image $image
     * @return string
     */
    public function upload(Image $image)
    {
        $fileName = $this->generateSha1Name($image);
        $this->localStore($image, $fileName);
        $this->syncStorageFromLocalToS3();

        return $fileName;
    }

    private function localStore(Image $image, string $fileName)
    {
        $baseDirPath = $this->getUploadedBaseDirPath($fileName);
        $path = $this->uploadPath . '/' . $baseDirPath; // public/uploads/images/3/3e8

        Storage::put($path . '/' . $fileName, $image);

        Storage::exists($path)
        ||
        abort(400, __('image_validation.error_image_upload'));
    }

    /**
     * @param Image $image
     * @return string
     */
    protected function generateSha1Name(Image $image): string
    {
        $name = $this->getOriginalName($image);
        $ext = $this->getExtension($image);

        return sha1($name . microtime(true)) . '.' . $ext; // 3e89bc7b416ccce075e0fca2f2cc1172feb6dc24.jpg
    }

    /**
     * @param Image $image
     * @return string
     */
    protected function getOriginalName(Image $image) : string
    {
        $ext = $image->extension;
        $name = $image->basename;

        return preg_replace('/\.' . $ext . '$/', '', $name);
    }

    /**
     * @param Image $image
     * @return string
     */
    protected function getExtension(Image $image): string
    {
        return mb_strtolower($image->extension);
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
        return Artisan::queue('storage:sync');
    }
}
