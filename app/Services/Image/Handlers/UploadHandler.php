<?php


namespace App\Services\Image\Handlers;


use App\Services\Image\Repositories\CmsImageRepository;
use Illuminate\Http\UploadedFile;

class UploadHandler
{
    private CmsImageRepository $repository;

    /**
     * UploadHandler constructor.
     * @param CmsImageRepository $repository
     */
    public function __construct(
        CmsImageRepository $repository
    )
    {
        $this->repository = $repository;
    }

    /**
     * @param array $files
     * @return array
     */
    public function handle(array $files): array
    {
        $imagesData = uploader()->multipleUpload($files);

        return array_map(function (array $imageData) {
            $image = $this->repository->store($imageData);

            return $image->id;
        }, $imagesData);
    }
}

