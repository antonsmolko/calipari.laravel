<?php


namespace App\Services\User;


use App\Models\User;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\User\Handlers\CmsCreateHandler;
use App\Services\User\Handlers\UpdateHandler;
use App\Services\User\Repositories\CmsUserRepository;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Cache;

class CmsUserService extends CmsBaseResourceService
{
    private CmsCreateHandler $storeHandler;
    private UpdateHandler $updateHandler;

    /**
     * CmsUserService constructor.
     * @param CmsUserRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param CmsCreateHandler $createUserHandler
     * @param UpdateHandler $updateUserHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsUserRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        CmsCreateHandler $createUserHandler,
        UpdateHandler $updateUserHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->repository = $repository;
        $this->storeHandler = $createUserHandler;
        $this->updateHandler = $updateUserHandler;
        $this->cacheTag = Tag::USERS_TAG;
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function getItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::USERS_PREFIX, ['cms', 'list'], ['pagination' => $requestData]);

        return Cache::tags(Tag::USERS_TAG)
            ->remember(
                $key,
                TTL::USERS_TTL,
                fn() => $this->repository->getItems($requestData));
    }

    /**
     * @param int $id
     * @return JsonResource
     */
    public function getItemWithRole(int $id): JsonResource
    {
        return $this->repository->getItemWithRole($id);
    }

    /**
     * @param array $storeData
     * @return User
     */
    public function store(array $storeData): User
    {
        return $this->storeHandler->handle($storeData);
    }

    /**
     * @param array $updateData
     * @param int $id
     * @return User
     */
    public function update(int $id, array $updateData): User
    {
        $user = $this->repository->getItem($id);

        return $this->updateHandler->handle($user, $updateData);
    }
}
