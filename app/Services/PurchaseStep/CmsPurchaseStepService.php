<?php


namespace App\Services\PurchaseStep;


use App\Models\PurchaseStep;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\PurchaseStep\Handlers\DeleteHandler;
use App\Services\PurchaseStep\Handlers\StoreHandler;
use App\Services\PurchaseStep\Repositories\CmsPurchaseStepRepository;
use App\Services\PurchaseStep\Handlers\UpdateHandler;

class CmsPurchaseStepService extends CmsBaseResourceService
{
    private StoreHandler $storeHandler;
    private UpdateHandler $updateHandler;
    private DeleteHandler $deleteHandler;

    /**
     * CmsPurchaseStepService constructor.
     * @param CmsPurchaseStepRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param StoreHandler $storeHandler
     * @param UpdateHandler $updateHandler
     * @param DeleteHandler $deleteHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsPurchaseStepRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        StoreHandler $storeHandler,
        UpdateHandler $updateHandler,
        DeleteHandler $deleteHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
        $this->updateHandler = $updateHandler;
        $this->deleteHandler = $deleteHandler;
    }

    /**
     * @param array $storeData
     * @return PurchaseStep
     */
    public function store(array $storeData): PurchaseStep
    {
        return $this->storeHandler->handle($storeData);
    }

    /**
     * @param int $id
     * @param array $updateData
     * @return PurchaseStep
     */
    public function update(int $id, array $updateData): PurchaseStep
    {
        $item = $this->repository->getItem($id);

        return $this->updateHandler->handle($item, $updateData);
    }

    /**
     * @param int $id
     * @return int
     * @throws \Exception
     */
    public function delete(int $id): int
    {
        $item = $this->repository->getItem($id);

        return $this->deleteHandler->handle($item);
    }
}
