<?php


namespace App\Services\HomeModuleInterior;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\HomeModuleInterior\Handlers\InteriorSlideDestroyHandler;
use App\Services\HomeModuleInterior\Handlers\InteriorSlideStoreHandler;
use App\Services\HomeModuleInterior\Handlers\InteriorSlideUpdateHandler;
use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorSlideRepository;

class CmsHomeModuleInteriorSlideService extends CmsBaseResourceService
{
    private InteriorSlideStoreHandler $storeHandler;
    private InteriorSlideUpdateHandler $updateHandler;
    private InteriorSlideDestroyHandler $destroyHandler;

    /**
     * CmsHomeModuleInteriorSlideService constructor.
     * @param CmsHomeModuleInteriorSlideRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param InteriorSlideStoreHandler $storeHandler
     * @param InteriorSlideUpdateHandler $updateHandler
     * @param InteriorSlideDestroyHandler $destroyHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsHomeModuleInteriorSlideRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        InteriorSlideStoreHandler $storeHandler,
        InteriorSlideUpdateHandler $updateHandler,
        InteriorSlideDestroyHandler $destroyHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $cacheKeyManager
        );
        $this->storeHandler = $storeHandler;
        $this->updateHandler = $updateHandler;
        $this->destroyHandler = $destroyHandler;
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
     * @param int $id
     * @return int
     */
    public function delete(int $id)
    {
        $item = $this->repository->getItem($id);

        return $this->destroyHandler->handle($item);
    }
}
