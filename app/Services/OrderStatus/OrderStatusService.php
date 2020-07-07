<?php


namespace App\Services\OrderStatus;


use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;

class OrderStatusService extends CmsBaseResourceService
{
    /**
     * OrderStatusService constructor.
     * @param OrderStatusRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        OrderStatusRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAlias(string $alias)
    {
        return $this->repository->getItemByAlias($alias);
    }
}
