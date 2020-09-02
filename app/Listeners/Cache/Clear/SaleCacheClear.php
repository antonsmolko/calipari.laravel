<?php

namespace App\Listeners\Cache\Clear;


use App\Services\Sale\CmsSaleService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SaleCacheClear extends BaseCacheClear
{
    public function __construct(CmsSaleService $service)
    {
        parent::__construct($service);
    }
}
