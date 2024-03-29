<?php


namespace App\Services\ArtCollection;


use App\Services\ArtCollection\Repositories\ClientArtCollectionRepository;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use Illuminate\Support\Facades\Cache;

class ClientArtCollectionService extends ClientBaseResourceService
{
    /**
     * ClientArtCollectionService constructor.
     * @param ClientArtCollectionRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientArtCollectionRepository $repository,
        CacheKeyManager $cacheKeyManager)
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    /**
     * @return array|\Illuminate\Database\Eloquent\Collection|mixed
     */
    public function index()
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ART_COLLECTIONS_PREFIX, ['client']);

        return Cache::tags(Tag::ART_COLLECTIONS_TAG)
            ->remember(
                $key,
                TTL::ART_COLLECTIONS_TTL,
                fn () => $this->repository->index());
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAliasWithImages(string $alias)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ART_COLLECTIONS_PREFIX, ['client', $alias]);

        return Cache::tags(Tag::ART_COLLECTIONS_TAG)
            ->remember(
                $key,
                TTL::ART_COLLECTIONS_TTL,
                fn () => $this->repository->getItemByAliasWithImages($alias));
    }

    /**
     * @return array|mixed
     */
    public function getItemsForSitemap()
    {
        $key = $this->cacheKeyManager->getCategoriesKey(['client', 'sitemap']);

        return Cache::tags(Tag::ART_COLLECTIONS_TAG)
            ->remember(
                $key,
                TTL::ART_COLLECTIONS_TTL,
                fn () => $this->repository->getItemsForSitemap());
    }
}
