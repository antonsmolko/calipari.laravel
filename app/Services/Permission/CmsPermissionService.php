<?php


namespace App\Services\Permission;


use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Permission\Repositories\CmsPermissionRepository;
use App\Services\Base\Resource\CmsBaseResourceService;

class CmsPermissionService extends CmsBaseResourceService
{
    /**
     * PermissionServiceCms constructor.
     * @param CmsPermissionRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     */
    public function __construct(
        CmsPermissionRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
    }
}
