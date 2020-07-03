<?php

namespace App\Listeners\Cache\Delivery;

use App\Listeners\Cache\CacheClear;
use App\Services\Delivery\CmsDeliveryService;

class DeliveryCacheClear extends CacheClear
{
    public function __construct(CmsDeliveryService $service)
    {
        parent::__construct($service);
    }
}
