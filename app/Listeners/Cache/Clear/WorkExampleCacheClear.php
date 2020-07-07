<?php

namespace App\Listeners\Cache\Clear;


use App\Services\WorkExample\CmsWorkExampleService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class WorkExampleCacheClear extends BaseCacheClear
{
    public function __construct(CmsWorkExampleService $service)
    {
        parent::__construct($service);
    }
}
