<?php


namespace App\Services\Delivery;


use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Delivery\Repositories\CmsDeliveryRepository;
use App\Services\Base\Resource\CmsBaseResourceService;

class CmsDeliveryService extends CmsBaseResourceService
{
    /**
     * CmsDeliveryService constructor.
     * @param CmsDeliveryRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsDeliveryRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->cacheTag = Tag::DELIVERY_TAG;
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        return $this->repository->getDetailsItem($id);
    }

    /**
     * @return mixed
     */
    public function getPickupItems()
    {
        return $this->repository->getPickupItems();
    }
}
