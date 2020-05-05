<?php


namespace App\Services\Tag;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Tag\Repositories\ClientTagRepository;
use Illuminate\Support\Facades\Cache;

class ClientTagService extends ClientBaseResourceService
{
    /**
     * ClientCategoryService constructor.
     * @param ClientTagRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientTagRepository $repository,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    /**
     * @param string $query
     * @return mixed
     */
    public function getSearchedItems(string $query)
    {
        return $this->repository->getSearchedItems($query);
    }
}
