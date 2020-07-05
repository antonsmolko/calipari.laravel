<?php

namespace App\Listeners\Cache\Clear;


use App\Services\Delivery\CmsDeliveryService;

class DeliveryCacheClear extends BaseCacheClear
{
    public function __construct(CmsDeliveryService $service)
    {
        parent::__construct($service);
    }
}
