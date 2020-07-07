<?php


namespace App\Services\Permission;


use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Permission\Repositories\CmsPermissionRepository;
use App\Services\Base\Resource\CmsBaseResourceService;

class CmsPermissionService extends CmsBaseResourceService
{
    /**
     * CmsPermissionService constructor.
     * @param CmsPermissionRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsPermissionRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
    }
}
