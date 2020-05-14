<?php


namespace App\Services\Base\Category;


use App\Services\Base\Category\Repositories\CmsBaseCategoryRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Category\Handlers\UploadHandler;
use App\Services\Base\Resource\Handlers\ClearCacheByTagHandler;
use App\Services\Cache\Tag;

class CmsBaseCategoryService extends CmsBaseResourceService
{
    protected UploadHandler $uploadHandler;

    /**
     * CmsBaseCategoryService constructor.
     * @param CmsBaseCategoryRepository $repository
     * @param ClearCacheByTagHandler $clearCacheByTagHandler
     * @param UploadHandler $uploadHandler
     */
    public function __construct(
        CmsBaseCategoryRepository $repository,
        ClearCacheByTagHandler $clearCacheByTagHandler,
        UploadHandler $uploadHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
        $this->uploadHandler = $uploadHandler;
        $this->cacheTag = Tag::CATEGORIES_TAG;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItemFromEdit(int $id)
    {
        return $this->repository->getItemFromEdit($id);
    }

    /**
     * @param array $requestData
     * @param int $id
     * @return mixed
     */
    public function upload(array $requestData, int $id)
    {
        $category = $this->repository->getItem($id);

        return $this->uploadHandler->handle($category, $requestData['images']);
    }

    /**
     * @param int $categoryId
     * @param array $pagination
     * @return mixed
     */
    public function getImages(int $categoryId, array $pagination)
    {
        $category = $this->repository->getItem($categoryId);

        return $this->repository->getImages($category, $pagination);
    }

//    /**
//     * @param int $categoryId
//     * @param array $pagination
//     * @return array
//     */
//    public function getItemWithImages(int $categoryId, array $pagination): array
//    {
//        $category = $this->repository->getItem($categoryId);
//        $paginateData = $this->repository->getImages($category, $pagination);
//
//        return ['item' => $category, 'paginateData' => $paginateData];
//    }

    /**
     * @param int $categoryId
     * @param array $pagination
     * @return mixed
     */
    public function getExcludedImages(int $categoryId, array $pagination)
    {
        $category = $this->repository->getItem($categoryId);

        return $this->repository->getExcludedImages($category, $pagination);
    }

//    /**
//     * @param int $categoryId
//     * @param array $pagination
//     * @return array
//     */
//    public function getItemWithExcludedImages(int $categoryId, array $pagination): array
//    {
//        $category = $this->repository->getItem($categoryId);
//        $paginateData = $this->repository->getExcludedImages($category, $pagination);
//
//        return ['item' => $category, 'paginateData' => $paginateData];
//    }

    /**
     * @param array $images
     * @param int $id
     */
    public function addImages(int $id, array $images)
    {
        $category = $this->repository->getItem($id);

        $this->repository->addImages($category, $images);
    }

    /**
     * @param int $categoryId
     * @param int $imageId
     * @return mixed|void
     */
    public function removeImage(int $categoryId, int $imageId)
    {
        $category = $this->repository->getItem($categoryId);

        return $this->repository->removeImage($category, $imageId);
    }
}
