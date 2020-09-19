<?php


namespace App\Services\Image;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\ColorCollection\Repositories\CmsColorCollectionRepository;
use App\Services\Image\Handlers\DeleteImageHandler;
use App\Services\Image\Handlers\FindDuplicatesHandler;
use App\Services\Image\Handlers\ForceDeleteHandler;
use App\Services\Image\Handlers\GetSyncDataHandler;
use App\Services\Image\Handlers\SyncUpdateWithColorCollectionHandler;
use App\Services\Image\Handlers\UpdateHandler;
use App\Services\Image\Handlers\UpdateImagePathHandler;
use App\Services\Image\Handlers\UploadHandler;
use App\Services\Image\Repositories\CmsImageRepository;
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
    private FindDuplicatesHandler $findDuplicatesHandler;
    private ForceDeleteHandler $forceDeleteHandler;

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
     * @param FindDuplicatesHandler $findDuplicatesHandler
     * @param ForceDeleteHandler $forceDeleteHandler
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
        CacheKeyManager $cacheKeyManager,
        FindDuplicatesHandler $findDuplicatesHandler,
        ForceDeleteHandler $forceDeleteHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->colorCollectionRepository = $colorCollectionRepository;
        $this->uploadHandler = $uploadHandler;
        $this->updateItemPathHandler = $updateImagePathHandler;
        $this->destroyHandler = $deleteImageHandler;
        $this->getSyncDataHandler = $getSyncDataHandler;
        $this->updateHandler = $updateHandler;
        $this->syncUpdateWithColorCollectionHandler = $syncUpdateWithColorCollectionHandler;
        $this->findDuplicatesHandler = $findDuplicatesHandler;
        $this->forceDeleteHandler = $forceDeleteHandler;
        $this->cacheTag = Tag::IMAGES_TAG;
    }

    /**
     * @param array $requestData
     * @return array|mixed
     */
    public function getItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['cms', 'list'], ['pagination' => $requestData]);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember(
                $key,
                TTL::IMAGES_TTL,
                fn() => new FromListCollection($this->repository->getItems($requestData)));
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function getTrashedItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['cms', 'trashed'], ['pagination' => $requestData]);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember(
                $key,
                TTL::IMAGES_TTL,
                fn() => new FromListCollection($this->repository->getTrashedItems($requestData)));
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
     * @return bool|null
     */
    public function forceDelete(int $id)
    {
        $item = $this->repository->getTrashedItem($id);

        return $this->forceDeleteHandler->handle($item);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function restore(int $id)
    {
        $item = $this->repository->getTrashedItem($id);

        return $this->repository->restore($item);
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

    /**
     * @param array $requestData
     * @return array
     * @throws \ImagickException
     */
    public function findDuplicates(array $requestData)
    {
        return $this->findDuplicatesHandler->handle($requestData);
    }

    /**
     * @param int $id
     * @param array $images
     * @return array
     */
    public function uploadExamples(int $id, array $images): array
    {
        $item = $this->repository->getItem($id);
        $itemExamples = $item->getExamples();

        $uploadsData = uploader()->multipleUpload($images);
        $uploadedExamples = Arr::pluck($uploadsData, 'path');
        $examples = Arr::collapse([$itemExamples, $uploadedExamples]);
        $this->repository->update($item, ['examples' => json_encode($examples)]);

        return $examples;
    }

    /**
     * @param int $imageId
     * @param string $exampleName
     * @return array
     */
    public function deleteExample(int $imageId, string $exampleName)
    {
        $item = $this->repository->getItem($imageId);
        uploader()->remove($exampleName);
        $examples = array_values(array_filter($item->getExamples(), fn($example) => $example !== $exampleName ));
        $this->repository->update($item, ['examples' => json_encode($examples)]);

        return $examples;
    }
}
