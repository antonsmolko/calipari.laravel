<?php

namespace App\Listeners\Cache\Clear;

use App\Services\Base\Resource\CmsBaseResourceService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

abstract class BaseCacheClear
{
    private CmsBaseResourceService $service;

    /**
     * ClearCategoryCache constructor.
     * @param CmsBaseResourceService $service
     */
    public function __construct(CmsBaseResourceService $service)
    {
        $this->service = $service;
    }

    /**
     * Handle the event.
     */
    public function handle()
    {
        $this->service->clearCache();
    }
}
