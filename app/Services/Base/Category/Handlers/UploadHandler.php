<?php


namespace App\Services\Base\Category\Handlers;


use App\Models\Image;
use App\Services\Base\Category\Repositories\CmsBaseCategoryRepository;

class UploadHandler
{
    private CmsBaseCategoryRepository $repository;
    private Image $uploadModel;

    /**
     * UploadHandler constructor.
     * @param CmsBaseCategoryRepository $repository
     * @param Image $uploadModel
     */
    public function __construct(
        CmsBaseCategoryRepository $repository,
        Image $uploadModel)
    {
        $this->repository = $repository;
        $this->uploadModel = $uploadModel;
    }

    /**
     * @param $category
     * @param array $uploadImages
     * @return mixed
     */
    public function handle($category, array $uploadImages)
    {
        $images = array_map(function ($image) {
            $image = uploader()->store($image, $this->uploadModel);

            return $image->id;
        }, $uploadImages);

        return $this->repository->addImages($category, $images);
    }
}
