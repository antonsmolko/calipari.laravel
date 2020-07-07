<?php

namespace App\Listeners\Cache\Clear;


use App\Services\Order\CmsOrderService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class OrderCacheClear extends BaseCacheClear
{
    public function __construct(CmsOrderService $service)
    {
        parent::__construct($service);
    }
}
