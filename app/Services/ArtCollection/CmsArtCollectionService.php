<?php


namespace App\Services\ArtCollection;


use App\Services\ArtCollection\Handlers\AddImagesHandler;
use App\Services\ArtCollection\Handlers\RemoveImageHandler;
use App\Services\ArtCollection\Repositories\CmsArtCollectionRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use Illuminate\Support\Facades\Cache;

class CmsArtCollectionService extends CmsBaseResourceService
{
    private AddImagesHandler $addImagesHandler;
    private RemoveImageHandler $removeImageHandler;

    /**
     * CmsArtCollectionService constructor.
     * @param CmsArtCollectionRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param AddImagesHandler $addImagesHandler
     * @param RemoveImageHandler $removeImageHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsArtCollectionRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        AddImagesHandler $addImagesHandler,
        RemoveImageHandler $removeImageHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $cacheKeyManager);
        $this->addImagesHandler = $addImagesHandler;
        $this->removeImageHandler = $removeImageHandler;
        $this->cacheTag = Tag::ART_COLLECTIONS_TAG;
    }

    public function index()
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ART_COLLECTIONS_PREFIX, ['cms', 'list']);

        return Cache::tags(Tag::ART_COLLECTIONS_TAG)
            ->remember(
                $key,
                TTL::ART_COLLECTIONS_TTL,
                fn() => $this->repository->index());
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        return $this->repository->getItemDetail($id);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getImages(int $id)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ART_COLLECTIONS_PREFIX, ['cms', 'images', 'id_' . $id]);

        return Cache::tags(Tag::ART_COLLECTIONS_TAG)
            ->remember(
                $key,
                TTL::ART_COLLECTIONS_TTL,
                function() use ($id) {
                    $colorCollection = $this->repository->getItem($id);

                    return $this->repository->getImages($colorCollection);
                });
    }

    /**
     * @param int $collectionId
     * @param array $imageKeys
     * @return array
     */
    public function addImages(int $collectionId, array $imageKeys)
    {
        return $this->addImagesHandler->handle($collectionId, $imageKeys);
    }

    /**
     * @param int $collectionId
     * @param int $imageId
     * @return int
     */
    public function removeImage(int $collectionId, int $imageId): int
    {
        $collection = $this->repository->getItem($collectionId);

        return $this->removeImageHandler->handle($collection, $imageId);
    }

    /**
     * @param array $pagination
     * @return mixed
     */
    public function getExcludedImages(array $pagination)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ART_COLLECTIONS_PREFIX, ['cms', 'excluded_images']);

        return Cache::tags(Tag::ART_COLLECTIONS_TAG)
            ->remember(
                $key,
                TTL::ART_COLLECTIONS_TTL,
                fn() => $this->repository->getExcludedImages($pagination));
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
