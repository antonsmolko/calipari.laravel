<?php


namespace App\Services\Owner;


use App\Services\Image\Handlers\UploadHandler;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Image\CmsImageService;
use App\Services\Owner\Repositories\OwnerRepository;
use App\Services\SubCategory\SubCategoryService;

class OwnerService extends SubCategoryService
{
    /**
     * OwnerService constructor.
     * @param OwnerRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param UploadHandler $uploadHandler
     * @param CmsImageService $imageService
     */
    public function __construct(
        OwnerRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        UploadHandler $uploadHandler,
        CmsImageService $imageService
    )
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $uploadHandler,
            $imageService
        );
    }

    /**
     * @param array $requestData
     * @param int $id
     * @return mixed
     */
    public function upload(array $requestData, int $id)
    {
        $uploadedKeys = $this->uploadHandler->handle($requestData['images']);

        return $this->repository->addImages($id, $uploadedKeys);
    }

    /**
     * @param int $id
     * @param array $imageKeys
     */
    public function addImages(int $id, array $imageKeys)
    {
        $this->repository->addImages($id, $imageKeys);
    }
}
