<?php


namespace App\Services\ColorCollection;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\ColorCollection\Repositories\ClientColorCollectionRepository;
use Illuminate\Support\Facades\Cache;

class ClientColorCollectionService extends ClientBaseResourceService
{
    /**
     * ClientColorCollectionService constructor.
     * @param ClientColorCollectionRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientColorCollectionRepository $repository,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAliasWithImages(string $alias)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::COLOR_COLLECTIONS_PREFIX, ['client', $alias]);

        return Cache::tags(Tag::COLOR_COLLECTIONS_TAG)
            ->remember(
                $key,
                TTL::COLOR_COLLECTIONS_TTL,
                fn () => $this->repository->getItemByAliasWithImages($alias));
    }
}
