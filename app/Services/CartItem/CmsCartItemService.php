<?php


namespace App\Services\CartItem;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\CartItem\Repositories\CmsCartItemRepository;

class CmsCartItemService extends CmsBaseResourceService
{
    /**
     * CmsCartItemService constructor.
     * @param CmsCartItemRepository $repository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsCartItemRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager)
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
    }
}
