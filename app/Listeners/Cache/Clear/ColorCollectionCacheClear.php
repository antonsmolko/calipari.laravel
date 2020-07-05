<?php

namespace App\Listeners\Cache\Clear;


use App\Services\ColorCollection\CmsColorCollectionService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ColorCollectionCacheClear extends BaseCacheClear
{
    public function __construct(CmsColorCollectionService $service)
    {
        parent::__construct($service);
    }
}
