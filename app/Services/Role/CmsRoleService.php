<?php


namespace App\Services\Role;


use App\Models\Role;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Role\Repositories\CmsRoleRepository;
use App\Services\Base\Resource\CmsBaseResourceService;
use Illuminate\Http\Resources\Json\JsonResource;

class CmsRoleService extends CmsBaseResourceService
{
    /**
     * CmsRoleService constructor.
     * @param CmsRoleRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsRoleRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
    }

    /**
     * @param int $id
     * @return JsonResource
     */
    public function getItemWithPermissions(int $id): JsonResource
    {
        return $this->repository->getItemWithPermissions($id);
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return Role
     */
    public function update(int $id, array $updateData): Role
    {
        $item = $this->repository->getItem($id);

        return $this->repository->update($item, $updateData);
    }
}
