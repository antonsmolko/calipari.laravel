<?php


namespace App\Services\Base\Category;


use App\Events\Models\Category\CategoryUpdated;
use App\Services\Base\Category\Repositories\CmsBaseCategoryRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\TTL;
use App\Services\Image\Handlers\UploadHandler;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Tag;
use App\Services\Image\CmsImageService;
use App\Services\Image\Resources\FromListCmsCollection as FromListCollection;
use Illuminate\Support\Facades\Cache;

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
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsBaseCategoryRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        UploadHandler $uploadHandler,
        CmsImageService $imageService,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $cacheKeyManager
        );
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
        $key = $this->cacheKeyManager
            ->getImagesKey(['cms', 'category_id_' . $categoryId], $pagination);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember(
                $key,
                TTL::IMAGES_TTL,
                function() use ($categoryId, $pagination) {
                    $category = $this->repository->getItem($categoryId);

                    return new FromListCollection($this->repository->getImages($category, $pagination));
                });
    }

    /**
     * @param int $categoryId
     * @param array $pagination
     * @return mixed
     */
    public function getExcludedImages(int $categoryId, array $pagination)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['cms', 'excluded', 'category_id_' . $categoryId], $pagination);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember(
                $key,
                TTL::IMAGES_TTL,
                function() use ($categoryId, $pagination) {
                    $category = $this->repository->getItem($categoryId);

                    return new FromListCollection($this->repository->getExcludedImages($category, $pagination));
                });
    }

    /**
     * @param array $images
     * @param int $id
     */
    public function addImages(int $id, array $images)
    {
        $category = $this->repository->getItem($id);
        $this->repository->addImages($category, $images);

        event(new CategoryUpdated());
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
            $resolve = $this->repository->removeImage($category, $imageId);
            event(new CategoryUpdated());

            return $resolve;
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
