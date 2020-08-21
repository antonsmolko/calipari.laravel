<?php


namespace App\Services\Setting;


use App\Models\Setting;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Setting\Handlers\SetImageSettingValueHandler;
use App\Services\Setting\Repositories\CmsSettingRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\SettingGroup\Repositories\CmsSettingGroupRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Arr;

class CmsSettingService extends CmsBaseResourceService
{
    private SetImageSettingValueHandler $setImageValueHandler;
    private CmsSettingGroupRepository $groupRepository;
    private array $types;

    /**
     * CmsSettingService constructor.
     * @param CmsSettingRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param CmsSettingGroupRepository $groupRepository
     * @param SetImageSettingValueHandler $setImageSettingValueHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsSettingRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        CmsSettingGroupRepository $groupRepository,
        SetImageSettingValueHandler $setImageSettingValueHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->groupRepository = $groupRepository;
        $this->setImageValueHandler = $setImageSettingValueHandler;
        $this->types = Setting::TYPES;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function store(array $storeData)
    {
        if ($storeData['group_id'] == 0) {
            $storeData['group_id'] = null;
        }

        return $this->repository->store($storeData);
    }

    /**
     * @return array
     */
    public function getItemsWithTypes(): array
    {
        $items = $this->repository->index();

        return ['items' => $items, 'types' => $this->types];
    }

    /**
     * @return Collection
     */
    public function getItemsWithGroup(): Collection
    {
        return $this->repository->getItemsWithGroup();
    }

    /**
     * @param array $groups
     * @return mixed
     */
    public function getItemEntriesByGroups(array $groups)
    {
        $groupKeys = $this->groupRepository->getItemKeysByAlias($groups)->toArray();
        $items = $this->repository->getItemsByGroups($groupKeys);

        return $items->pluck('value', 'key_name');
    }

    /**
     * @param int $id
     * @return array
     */
    public function getItemWithTypes(int $id): array
    {
        $item = $this->repository->getItem($id);

        return ['item' => $item, 'types' => $this->types];
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return Setting
     */
    public function update(int $id, array $updateData): Setting
    {
        $item = $this->repository->getItem($id);

        if ((int)$updateData['group_id'] === 0) {
            $item = $this->repository->dissociateGroup($item);
            $updateData = Arr::except($updateData, ['group_id']);
        }

        return $this->repository->update($item, $updateData);
    }

    /**
     * @param array $setData
     */
    public function setTextValue(array $setData)
    {
        $item = $this->repository->getItemByKey($setData['key_name']);
        $this->repository->setValue($item, $setData['value']);
    }

    /**
     * @param array $setData
     */
    public function setImageValue(array $setData)
    {
        $this->setImageValueHandler->handle($setData);
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function getItemValueByKey(string $key)
    {
        $item = $this->repository->getItemByKey($key);

        return $item->value;
    }

    /**
     * @return array
     */
    public function getEntries()
    {
        $items = $this->repository->index()->pluck('value', 'key_name');

        return $items->all();
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getEntriesWhereKeyIn(array $keys)
    {
        return $this->repository->getEntriesWereKeyIn($keys);
    }
}
