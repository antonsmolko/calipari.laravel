<?php


namespace App\Services\Image\Handlers;


use App\Models\Image;

class UploadHandler
{
    private Image $uploadModel;

    /**
     * UploadImageHandler constructor.
     * @param Image $uploadModel
     */
    public function __construct(Image $uploadModel)
    {
        $this->uploadModel = $uploadModel;
    }

    /**
     * @param array $files
     * @return array
     */
    public function handle(array $files): array
    {
        return array_map(function ($file) {
            $image = uploader()->store($file, $this->uploadModel);

            return $image->id;
        }, $files);
    }
}
