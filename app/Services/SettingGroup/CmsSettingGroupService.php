<?php


namespace App\Services\SettingGroup;


use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\SettingGroup\Repositories\CmsSettingGroupRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use Illuminate\Support\Collection;

class CmsSettingGroupService extends CmsBaseResourceService
{
    /**
     * CmsSettingGroupService constructor.
     * @param CmsSettingGroupRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsSettingGroupRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
    }

    /**
     * @return Collection
     */
    public function getItemsWithSettings(): Collection
    {
        return $this->repository->getItemsWithSettings();
    }
}
