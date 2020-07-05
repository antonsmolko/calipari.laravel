<?php


namespace App\Services\Base\Category;


use App\Services\Base\Category\Repositories\CmsBaseCategoryRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Image\Handlers\UploadHandler;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Tag;
use App\Services\Image\CmsImageService;

class CmsBaseCategoryService extends CmsBaseResourceService
{
    protected CmsImageService $imageService;
    protected UploadHandler $uploadHandler;

    /**
     * CmsBaseCategoryService constructor.
     * @param CmsBaseCategoryRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param UploadHandler $uploadHandler
     * @param CmsImageService $imageService
     */
    public function __construct(
        CmsBaseCategoryRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        UploadHandler $uploadHandler,
        CmsImageService $imageService
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
        $this->cacheTag = Tag::CATEGORIES_TAG;
        $this->imageService = $imageService;
        $this->uploadHandler = $uploadHandler;
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
        $uploadedKeys = $this->uploadHandler->handle($requestData['images']);

        return $this->repository->addImages($category, $uploadedKeys);

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
        $image = $this->imageService->getItem($imageId);
        $colorCollection = $image->colorCollection;

        if (!$colorCollection || !$colorCollection->main_image_id === $image->id) {
            return $this->repository->removeImage($category, $imageId);
        }

        return abort(400, __('image_validation.unable_to_remove_image_of_color_collection'));
    }

    /**
     * Unpublish Items if images_count === 0
     */
    public function processUnpublishItems()
    {
        $items = $this->repository->getWithoutPublishedImagesItems();

        $items->each(fn ($item) => $this->repository->unpublish($item));
    }
}
