<?php


namespace App\Services\Delivery;


use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Tag;
use App\Services\Delivery\Repositories\CmsDeliveryRepository;
use App\Services\Base\Resource\CmsBaseResourceService;

class CmsDeliveryService extends CmsBaseResourceService
{
    /**
     * CmsDeliveryService constructor.
     * @param CmsDeliveryRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     */
    public function __construct(
        CmsDeliveryRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler);
        $this->cacheTag = Tag::DELIVERY_TAG;
    }
}
