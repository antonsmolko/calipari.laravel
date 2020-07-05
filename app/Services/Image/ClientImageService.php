<?php


namespace App\Services\Image;


use App\Services\ArtCollection\Repositories\ClientArtCollectionRepository;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Category\Repositories\ClientCategoryRepository;
use App\Services\ColorCollection\Repositories\ClientColorCollectionRepository;
use App\Services\Image\Handlers\DefineRestrictionsForColorCollectionsHandler;
use App\Services\Image\Handlers\GetItemFromEditorHandler;
use App\Services\Image\Repositories\ClientImageRepository;
use App\Services\Image\Resources\FromClientCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ClientImageService
{
    private ClientImageRepository $repository;
    private ClientCategoryRepository $categoryRepository;
    private ClientColorCollectionRepository $colorCollectionRepository;
    private ClientArtCollectionRepository $artCollectionRepository;
    private CacheKeyManager $cacheKeyManager;
    private DefineRestrictionsForColorCollectionsHandler $defineRestrictionsForColorCollectionsHandler;
    private GetItemFromEditorHandler $getItemFromEditorHandler;

    /**
     * ClientImageService constructor.
     * @param ClientImageRepository $repository
     * @param ClientCategoryRepository $categoryRepository
     * @param ClientColorCollectionRepository $colorCollectionRepository
     * @param ClientArtCollectionRepository $artCollectionRepository
     * @param CacheKeyManager $cacheKeyManager
     * @param DefineRestrictionsForColorCollectionsHandler $defineRestrictionsForColorCollectionsHandler
     * @param GetItemFromEditorHandler $getItemFromEditorHandler
     */
    public function __construct(
        ClientImageRepository $repository,
        ClientCategoryRepository $categoryRepository,
        ClientColorCollectionRepository $colorCollectionRepository,
        ClientArtCollectionRepository $artCollectionRepository,
        CacheKeyManager $cacheKeyManager,
        DefineRestrictionsForColorCollectionsHandler $defineRestrictionsForColorCollectionsHandler,
        GetItemFromEditorHandler $getItemFromEditorHandler
    )
    {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->colorCollectionRepository = $colorCollectionRepository;
        $this->artCollectionRepository = $artCollectionRepository;
        $this->cacheKeyManager = $cacheKeyManager;
        $this->defineRestrictionsForColorCollectionsHandler = $defineRestrictionsForColorCollectionsHandler;
        $this->getItemFromEditorHandler = $getItemFromEditorHandler;
    }

    /**
     * @param Request $request
     * @return FromClientCollection
     */
    public function getItems(Request $request): FromClientCollection
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['client'], $request->all());

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember($key, TTL::IMAGES_TTL, function () use ($request) {
                $isRestrictedForColorCollection = $this->defineRestrictionsForColorCollectionsHandler
                    ->handle($request);

                return new FromClientCollection($this->repository
                    ->getItems($request, $isRestrictedForColorCollection));
            });
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['client', 'id_' . $id]);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember($key, TTL::IMAGES_TTL, function () use ($id) {
                return $this->repository->getResourceItem($id);
            });
    }

    /**
     * @param int $id
     * @return array
     */
    public function getItemFromEditor(int $id): array
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['client', 'from-editor', 'id_' . $id]);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember($key, TTL::IMAGES_TTL, function () use ($id) {
                $item = $this->repository->getResourceItem($id);

                return $this->getItemFromEditorHandler->handle($item);
            });
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getWishListTags(array $keys)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['client', 'wish-list-tags', 'keys_' . implode('_', $keys)]);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember($key, TTL::IMAGES_TTL, function () use ($keys) {
                return $this->categoryRepository->getTagsByImageKeys($keys);
            });
    }

    /**
     * @param int $id
     * @return array
     */
    public function getItemColorCollectionImages(int $id)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['client', 'color-collection-images', 'id_' . $id]);

        return Cache::tags(Tag::IMAGES_TAG)
            ->remember($key, TTL::IMAGES_TTL, function () use ($id) {
                $item = $this->repository->getResourceItem($id);

                return [$item, ...$this->colorCollectionRepository
                    ->getItemImagesFromEditor($item->colorCollection, $id)];
            });
    }
}
