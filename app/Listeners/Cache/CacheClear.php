<?php

namespace App\Listeners\Cache;

use App\Events\Models\Model as ModelEvent;
use App\Services\Base\Resource\CmsBaseResourceService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

abstract class CacheClear
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
        $this->service->clearCacheByTag();
    }
}
