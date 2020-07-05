<?php


namespace App\Services\Image;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\ColorCollection\Repositories\CmsColorCollectionRepository;
use App\Services\Image\Handlers\DeleteImageHandler;
use App\Services\Image\Handlers\GetSyncDataHandler;
use App\Services\Image\Handlers\SyncUpdateWithColorCollectionHandler;
use App\Services\Image\Handlers\UpdateHandler;
use App\Services\Image\Handlers\UpdateImagePathHandler;
use App\Services\Image\Handlers\UploadHandler;
use App\Services\Image\Repositories\CmsImageRepository;
use App\Services\Image\Resources\FromClientCollection;
use App\Services\Image\Resources\FromListCmsCollection as FromListCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;

class CmsImageService extends CmsBaseResourceService
{
    private CmsColorCollectionRepository $colorCollectionRepository;
    private UploadHandler $uploadHandler;
    private UpdateImagePathHandler $updateItemPathHandler;
    private DeleteImageHandler $destroyHandler;
    private GetSyncDataHandler $getSyncDataHandler;
    private UpdateHandler $updateHandler;
    private SyncUpdateWithColorCollectionHandler $syncUpdateWithColorCollectionHandler;
    private CacheKeyManager $cacheKeyManager;

    /**
     * CmsImageService constructor.
     * @param CmsImageRepository $repository
     * @param CmsColorCollectionRepository $colorCollectionRepository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param UploadHandler $uploadHandler
     * @param UpdateImagePathHandler $updateImagePathHandler
     * @param DeleteImageHandler $deleteImageHandler
     * @param GetSyncDataHandler $getSyncDataHandler
     * @param UpdateHandler $updateHandler
     * @param SyncUpdateWithColorCollectionHandler $syncUpdateWithColorCollectionHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsImageRepository $repository,
        CmsColorCollectionRepository $colorCollectionRepository,
        ClearCacheHandler $clearCacheByTagHandler,
        UploadHandler $uploadHandler,
        UpdateImagePathHandler $updateImagePathHandler,
        DeleteImageHandler $deleteImageHandler,
        GetSyncDataHandler $getSyncDataHandler,
        UpdateHandler $updateHandler,
        SyncUpdateWithColorCollectionHandler $syncUpdateWithColorCollectionHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
        $this->colorCollectionRepository = $colorCollectionRepository;
        $this->uploadHandler = $uploadHandler;
        $this->updateItemPathHandler = $updateImagePathHandler;
        $this->destroyHandler = $deleteImageHandler;
        $this->getSyncDataHandler = $getSyncDataHandler;
        $this->updateHandler = $updateHandler;
        $this->syncUpdateWithColorCollectionHandler = $syncUpdateWithColorCollectionHandler;
        $this->cacheTag = Tag::IMAGES_TAG;
        $this->cacheKeyManager = $cacheKeyManager;
    }

    /**
     * @param array $requestData
     * @return array|mixed
     */
    public function getItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['client'], ['pagination' => $requestData]);
//        return new FromListCollection($this->repository->getItems($requestData));
        return Cache::tags(Tag::IMAGES_TAG)
            ->remember($key, TTL::IMAGES_TTL, function () use ($requestData) {
                return new FromListCollection($this->repository->getItems($requestData));
            });
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function getTrashedItems(array $requestData)
    {
        return $this->repository->getTrashedItems($requestData);
    }

    /**
     * @param int $id
     * @return JsonResource
     */
    public function getItemToEdit(int $id): JsonResource
    {
        return $this->repository->getItemToEdit($id);
    }

    /**
     * @param array $files
     * @return array|mixed
     */
    public function store(array $files)
    {
        return $this->uploadHandler->handle($files);
    }

    /**
     * @param int $id
     * @param array $requestData
     * @return mixed|void
     */
    public function update(int $id, array $requestData)
    {
        $image = $this->repository->getItem($id);

        $rawSyncData = Arr::only($requestData, ['topics', 'colors', 'interiors', 'tags']);
        $updateData = Arr::only($requestData, ['publish', 'owner_id', 'max_print_width', 'description']);
        $syncData = $this->getSyncDataHandler->handle($rawSyncData);

        $this->updateHandler->handle($image, $syncData, $updateData);

        $colorCollection = $image->colorCollection;

        if ($colorCollection) {
            $this->syncUpdateWithColorCollectionHandler->handle($id, $colorCollection, $updateData);
        }

        if (Arr::has($requestData, 'image')) {
            $this->updateItemPathHandler->handle($image, $requestData['image']);
        }
    }

    /**
     * @param int $id
     * @return int
     * @throws \Exception
     */
    public function destroy(int $id): int
    {
        $image = $this->repository->getItem($id);

        return $this->destroyHandler->handle($image);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function forceDelete(int $id)
    {
        return $this->repository->forceDelete($id);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function restore(int $id)
    {
        return $this->repository->restore($id);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function publish(int $id)
    {
        $item = $this->repository->getItem($id);
        $colorCollection = $item->colorCollection;

        return !$colorCollection || $colorCollection->main_image_id !== $item->id
            ? $this->repository->publish($item)
            : abort(400, __('image_validation.unable_to_unpublish_main_image_of_color_collection'));
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function dissociateOwner(int $id)
    {
        $item = $this->repository->getItem($id);

        return $this->repository->dissociateOwner($item);
    }
}
