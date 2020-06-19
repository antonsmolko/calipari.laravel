<?php


namespace App\Services\Image;


use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Category\Repositories\ClientCategoryRepository;
use App\Services\Collection\ClientCollectionService;
use App\Services\Image\Handlers\DefineRestrictionsForCollectionsHandler;
use App\Services\Image\Repositories\ClientImageRepository;
use App\Services\Image\Resources\FromClientCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ClientImageService
{
    private ClientImageRepository $repository;
    private ClientCategoryRepository $categoryRepository;
    private ClientCollectionService $collectionService;
    private CacheKeyManager $cacheKeyManager;
    private DefineRestrictionsForCollectionsHandler $defineRestrictionsForCollectionsHandler;

    /**
     * ClientImageService constructor.
     * @param ClientImageRepository $repository
     * @param ClientCategoryRepository $categoryRepository
     * @param ClientCollectionService $collectionService
     * @param CacheKeyManager $cacheKeyManager
     * @param DefineRestrictionsForCollectionsHandler $defineRestrictionsForCollectionsHandler
     */
    public function __construct(
        ClientImageRepository $repository,
        ClientCategoryRepository $categoryRepository,
        ClientCollectionService $collectionService,
        CacheKeyManager $cacheKeyManager,
        DefineRestrictionsForCollectionsHandler $defineRestrictionsForCollectionsHandler
    )
    {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->collectionService = $collectionService;
        $this->cacheKeyManager = $cacheKeyManager;
        $this->defineRestrictionsForCollectionsHandler = $defineRestrictionsForCollectionsHandler;
    }

    /**
     * @param Request $request
     * @return FromClientCollection
     */
    public function getItems(Request $request): FromClientCollection
    {
        $isRestrictedForCollection = $this->defineRestrictionsForCollectionsHandler->handle($request);

        return new FromClientCollection($this->repository->getItems($request, $isRestrictedForCollection));
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        $key = $this->cacheKeyManager
            ->getImagesKey(['client', 'published', 'id_' . $id]);

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
        $item = $this->repository->getResourceItem($id);
        $collectionId = $item->collection_id;

        return $collectionId !== null
            ? ['item' => $item,
               'collection' => $this->collectionService->getItemImagesFromEditor($collectionId, $id)]
            : ['item' => $item];
    }

    public function getWishListTags(array $keys)
    {
        return $this->categoryRepository->getTagsByImageKeys($keys);
    }
}
