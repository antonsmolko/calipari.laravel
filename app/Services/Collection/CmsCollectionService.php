<?php


namespace App\Services\Collection;


use App\Services\Base\Resource\Handlers\ClearCacheByTagHandler;
use App\Services\Collection\Handlers\DestroyHandler;
use App\Services\Collection\Handlers\GetSyncDataHandler;
use App\Services\Collection\Handlers\SnapImageHandler;
use App\Services\Collection\Handlers\StoreHandler;
use App\Services\Collection\Handlers\UpdateHandler;
use App\Services\Collection\Handlers\UpdateImagesHandler;
use App\Services\Collection\Handlers\UploadHandler;
use App\Services\Collection\Repositories\CmsCollectionRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Image\Repositories\CmsImageRepository;
use Illuminate\Support\Arr;

class CmsCollectionService extends CmsBaseResourceService
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
     * CmsCollectionService constructor.
     * @param CmsCollectionRepository $repository
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
        CmsCollectionRepository $repository,
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

        $collection = $this->repository->store($storeData);

        if (!empty($requestData['image_id'])) {
            $image = $this->imageRepository->getItem($requestData['image_id']);
            $this->snapImageHandler->handle($collection, $image);
        }

        return $this->repository->syncCategories($collection, $syncData);
    }

    /**
     * @param int $id
     * @param array $requestData
     * @return mixed
     */
    public function update(int $id, array $requestData)
    {
        $collection = $this->repository->getItem($id);

        $rawSyncData = Arr::only($requestData, ['topics', 'interiors', 'tags']);
        $updateData = Arr::except($requestData, ['topics', 'interiors', 'tags', 'image_id']);
        $syncData = $this->getSyncDataHandler->handle($rawSyncData);

        $collection = $this->updateHandler->handle($collection, $updateData);

        if (!$collection->images()->count() && !empty($requestData['image_id'])) {
            $image = $this->imageRepository->getItem($requestData['image_id']);
            $this->snapImageHandler->handle($collection, $image);
        }

        $this->repository->syncCategories($collection, $syncData);

        if ($collection->images) {
            $this->updateImagesHandler->handle($collection, $updateData, $syncData);
        }

        return $collection;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getImages(int $id)
    {
        $collection = $this->repository->getItem($id);

        return $this->repository->getImages($collection);
    }

    /**
     * @param int $id
     * @param array $uploadImages
     * @return mixed
     */
    public function upload(int $id, array $uploadImages)
    {
        $collection = $this->repository->getItem($id);
        $this->uploadHandler->handle($collection, $uploadImages);

        return $collection->main_image_id;
    }

    /**
     * @param int $id
     * @param int $imageId
     * @return mixed
     */
    public function setMainImage(int $id, int $imageId)
    {
        $collection = $this->repository->getItem($id);

        return $this->repository->setMainImage($collection, $imageId);
    }

    /**
     * @param int $id
     * @return int
     */
    public function destroy(int $id): int
    {
        $collection = $this->repository->getItem($id);

        return $this->destroyHandler->handle($collection);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function publish(int $id)
    {
        $item = $this->repository->getItem($id);

        if (!$item->publishedImages->count()) {
            abort(422, __('common.unable_publish_collection_without_published_images'));
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
