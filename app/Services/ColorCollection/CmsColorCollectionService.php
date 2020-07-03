<?php


namespace App\Services\ColorCollection;


use App\Services\Base\Resource\Handlers\ClearCacheByTagHandler;
use App\Services\ColorCollection\Handlers\DestroyHandler;
use App\Services\ColorCollection\Handlers\GetSyncDataHandler;
use App\Services\ColorCollection\Handlers\SnapImageHandler;
use App\Services\ColorCollection\Handlers\StoreHandler;
use App\Services\ColorCollection\Handlers\UpdateHandler;
use App\Services\ColorCollection\Handlers\UpdateImagesHandler;
use App\Services\ColorCollection\Handlers\UploadHandler;
use App\Services\ColorCollection\Repositories\CmsColorCollectionRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Image\Repositories\CmsImageRepository;
use Illuminate\Support\Arr;

class CmsColorCollectionService extends CmsBaseResourceService
{
    private CmsImageRepository $imageRepository;
    private GetSyncDataHandler $getSyncDataHandler;
    private StoreHandler $storeHandler;
    private UploadHandler $uploadHandler;
    private UpdateHandler $updateHandler;
    private UpdateImagesHandler $updateImagesHandler;
    private DestroyHandler $destroyHandler;
    private SnapImageHandler $snapImageHandler;

    /**
     * CmsColorCollectionService constructor.
     * @param CmsColorCollectionRepository $repository
     * @param CmsImageRepository $imageRepository
     * @param ClearCacheByTagHandler $clearCacheByTagHandler
     * @param GetSyncDataHandler $getSyncDataHandler
     * @param StoreHandler $storeHandler
     * @param UpdateHandler $updateHandler
     * @param UpdateImagesHandler $updateImagesHandler
     * @param UploadHandler $uploadHandler
     * @param DestroyHandler $destroyHandler
     * @param SnapImageHandler $snapImageHandler
     */
    public function __construct(
        CmsColorCollectionRepository $repository,
        CmsImageRepository $imageRepository,
        ClearCacheByTagHandler $clearCacheByTagHandler,
        GetSyncDataHandler $getSyncDataHandler,
        StoreHandler $storeHandler,
        UpdateHandler $updateHandler,
        UpdateImagesHandler $updateImagesHandler,
        UploadHandler $uploadHandler,
        DestroyHandler $destroyHandler,
        SnapImageHandler $snapImageHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
        $this->imageRepository = $imageRepository;
        $this->getSyncDataHandler = $getSyncDataHandler;
        $this->storeHandler = $storeHandler;
        $this->uploadHandler = $uploadHandler;
        $this->updateHandler = $updateHandler;
        $this->updateImagesHandler = $updateImagesHandler;
        $this->destroyHandler = $destroyHandler;
        $this->snapImageHandler = $snapImageHandler;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        return $this->repository->getItemFromEdit($id);
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function store(array $requestData)
    {
        $rawSyncData = Arr::only($requestData, ['topics', 'interiors', 'tags']);
        $storeData = Arr::except($requestData, ['topics', 'interiors', 'tags', 'image_id']);
        $syncData = $this->getSyncDataHandler->handle($rawSyncData);

        $colorCollection = $this->repository->store($storeData);

        if (!empty($requestData['image_id'])) {
            $image = $this->imageRepository->getItem($requestData['image_id']);
            $this->snapImageHandler->handle($colorCollection, $image);
        }

        return $this->repository->syncCategories($colorCollection, $syncData);
    }

    /**
     * @param int $id
     * @param array $requestData
     * @return mixed
     */
    public function update(int $id, array $requestData)
    {
        $colorCollection = $this->repository->getItem($id);

        $rawSyncData = Arr::only($requestData, ['topics', 'interiors', 'tags']);
        $updateData = Arr::except($requestData, ['topics', 'interiors', 'tags', 'image_id']);
        $syncData = $this->getSyncDataHandler->handle($rawSyncData);

        $colorCollection = $this->updateHandler->handle($colorCollection, $updateData);

        if (!$colorCollection->images()->count() && !empty($requestData['image_id'])) {
            $image = $this->imageRepository->getItem($requestData['image_id']);
            $this->snapImageHandler->handle($colorCollection, $image);
        }

        $this->repository->syncCategories($colorCollection, $syncData);

        if ($colorCollection->images) {
            $this->updateImagesHandler->handle($colorCollection, $updateData, $syncData);
        }

        return $colorCollection;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getImages(int $id)
    {
        $colorCollection = $this->repository->getItem($id);

        return $this->repository->getImages($colorCollection);
    }

    /**
     * @param int $id
     * @param array $uploadImages
     * @return mixed
     */
    public function upload(int $id, array $uploadImages)
    {
        $colorCollection = $this->repository->getItem($id);
        $this->uploadHandler->handle($colorCollection, $uploadImages);

        return $colorCollection->main_image_id;
    }

    /**
     * @param int $id
     * @param int $imageId
     * @return mixed
     */
    public function setMainImage(int $id, int $imageId)
    {
        $colorCollection = $this->repository->getItem($id);

        return $this->repository->setMainImage($colorCollection, $imageId);
    }

    /**
     * @param int $id
     * @return int
     */
    public function destroy(int $id): int
    {
        $colorCollection = $this->repository->getItem($id);

        return $this->destroyHandler->handle($colorCollection);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function publish(int $id)
    {
        $item = $this->repository->getItem($id);

        if (!$item->publishedImages->count()) {
            abort(422, __('common.unable_publish_color_collection_without_published_images'));
        }

        return $this->repository->publish($item);
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
