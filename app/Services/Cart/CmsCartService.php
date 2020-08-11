<?php


namespace App\Services\Cart;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cart\Handlers\StoreHandler;
use App\Services\Cart\Repositories\CmsCartRepository;

class CmsCartService extends CmsBaseResourceService
{
    private StoreHandler $storeHandler;

    /**
     * CmsCartService constructor.
     * @param CmsCartRepository $repository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     */
    public function __construct(
        CmsCartRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler
    )
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function store(array $storeData)
    {
        return $this->storeHandler->handle($storeData);
    }
}
