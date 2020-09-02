<?php


namespace App\Services\Sale;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Sale\Handlers\StoreHandler;
use App\Services\Sale\Handlers\UpdateHandler;
use App\Services\Sale\Repositories\CmsSaleRepository;
use Illuminate\Support\Facades\Cache;

class CmsSaleService extends CmsBaseResourceService
{
    private StoreHandler $storeHandler;
    private UpdateHandler $updateHandler;

    /**
     * CmsSaleService constructor.
     * @param CmsSaleRepository $repository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     * @param UpdateHandler $updateHandler
     */
    public function __construct(
        CmsSaleRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler,
        UpdateHandler $updateHandler)
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
        $this->cacheTag = Tag::SALES_TAG;
        $this->storeHandler = $storeHandler;
        $this->updateHandler = $updateHandler;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function store(array $storeData)
    {
        return $this->storeHandler->handle($storeData);
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return mixed
     */
    public function update(int $id, array $updateData)
    {
        $item = $this->repository->getItem($id);

        return $this->updateHandler->handle($item, $updateData);
    }

    /**
     * @return mixed
     */
    public function getArticles()
    {
        return $this->repository->getArticles();
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getRestArticles(int $id)
    {
        return $this->repository->getRestArticles($id);
    }

    /**
     * @param int $id
     * @param int $status
     * @return mixed
     */
    public function changeStatus(int $id, int $status)
    {
        $item = $this->repository->getItem($id);

        return $this->repository->changeStatus($item, $status);
    }

    /**
     * @param array $requestData
     * @param int $status
     * @return array|mixed
     */
    public function getItemsByStatus(array $requestData, int $status)
    {
        $key = $this->cacheKeyManager->getResourceKey(Key::SALES_PREFIX, ['cms', 'by_status', $status], $requestData);

        return Cache::tags(Tag::SALES_TAG)
            ->remember($key,TTL::SALES_TTL, fn() => $this->repository->getItemsByStatus($requestData, $status));
    }
}
