<?php


namespace App\Services\Image;


use App\Services\ArtCollection\Repositories\ClientArtCollectionRepository;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Category\Repositories\ClientCategoryRepository;
use App\Services\ColorCollection\Repositories\ClientColorCollectionRepository;
use App\Services\Image\Handlers\DefineRestrictionsForColorCollectionsHandler;
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

    /**
     * ClientImageService constructor.
     * @param ClientImageRepository $repository
     * @param ClientCategoryRepository $categoryRepository
     * @param ClientColorCollectionRepository $colorCollectionRepository
     * @param ClientArtCollectionRepository $artCollectionRepository
     * @param CacheKeyManager $cacheKeyManager
     * @param DefineRestrictionsForColorCollectionsHandler $defineRestrictionsForColorCollectionsHandler
     */
    public function __construct(
        ClientImageRepository $repository,
        ClientCategoryRepository $categoryRepository,
        ClientColorCollectionRepository $colorCollectionRepository,
        ClientArtCollectionRepository $artCollectionRepository,
        CacheKeyManager $cacheKeyManager,
        DefineRestrictionsForColorCollectionsHandler $defineRestrictionsForColorCollectionsHandler
    )
    {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->colorCollectionRepository = $colorCollectionRepository;
        $this->artCollectionRepository = $artCollectionRepository;
        $this->cacheKeyManager = $cacheKeyManager;
        $this->defineRestrictionsForColorCollectionsHandler = $defineRestrictionsForColorCollectionsHandler;
    }

    /**
     * @param Request $request
     * @return FromClientCollection
     */
    public function getItems(Request $request): FromClientCollection
    {
        $isRestrictedForColorCollection = $this->defineRestrictionsForColorCollectionsHandler->handle($request);

        return new FromClientCollection($this->repository->getItems($request, $isRestrictedForColorCollection));
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

        return [
            'item' => $item,
            'colorCollection' => $item->colorCollection
                ? [$item, ...$this->colorCollectionRepository
                    ->getItemImagesFromEditor($item->colorCollection, $id)]
                : [],
            'artCollection' => $item->artCollection
                ? [$item, ...$this->artCollectionRepository
                    ->getItemImagesFromEditor($item->artCollection, $id)]
                : []
        ];

    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getWishListTags(array $keys)
    {
        return $this->categoryRepository->getTagsByImageKeys($keys);
    }

    /**
     * @param int $id
     * @return array
     */
    public function getItemColorCollectionImages(int $id)
    {
        $item = $this->repository->getResourceItem($id);

        return [$item, ...$this->colorCollectionRepository
            ->getItemImagesFromEditor($item->colorCollection, $id)];
    }
}
