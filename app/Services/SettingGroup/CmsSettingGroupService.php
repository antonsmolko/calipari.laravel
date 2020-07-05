<?php


namespace App\Services\SettingGroup;


use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\SettingGroup\Repositories\CmsSettingGroupRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use Illuminate\Support\Collection;

class CmsSettingGroupService extends CmsBaseResourceService
{
    /**
     * SettingGroupServiceCms constructor.
     * @param CmsSettingGroupRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     */
    public function __construct(
        CmsSettingGroupRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
    }

    /**
     * @return Collection
     */
    public function getItemsWithSettings(): Collection
    {
        return $this->repository->getItemsWithSettings();
    }
}
