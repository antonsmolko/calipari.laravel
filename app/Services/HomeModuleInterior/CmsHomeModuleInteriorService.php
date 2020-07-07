<?php


namespace App\Services\HomeModuleInterior;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\HomeModuleInterior\Handlers\InteriorDestroyHandler;
use App\Services\HomeModuleInterior\Handlers\InteriorStoreHandler;
use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorRepository;

class CmsHomeModuleInteriorService extends CmsBaseResourceService
{
    private InteriorStoreHandler $storeHandler;
    private InteriorDestroyHandler $destroyHandler;

    /**
     * CmsHomeModuleInteriorService constructor.
     * @param CmsHomeModuleInteriorRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param InteriorStoreHandler $storeHandler
     * @param InteriorDestroyHandler $destroyHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsHomeModuleInteriorRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        InteriorStoreHandler $storeHandler,
        InteriorDestroyHandler $destroyHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct(
            $repository,
            $clearCacheByTagHandler,
            $cacheKeyManager
        );
        $this->storeHandler = $storeHandler;
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
     * @return mixed
     */
    public function getItemSlides(int $id)
    {
        $item = $this->repository->getItem($id);

        return $item->slides;
    }

    /**
     * @param int $id
     * @return int
     */
    public function destroy(int $id): int
    {
        $item = $this->repository->getItem($id);

        return $this->destroyHandler->handle($item);
    }
}
