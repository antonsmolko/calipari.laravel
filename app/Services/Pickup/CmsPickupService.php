<?php


namespace App\Services\Pickup;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Pickup\Repositories\CmsPickupRepository;

class CmsPickupService extends CmsBaseResourceService
{
    public function __construct(
        CmsPickupRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager)
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
    }
}
