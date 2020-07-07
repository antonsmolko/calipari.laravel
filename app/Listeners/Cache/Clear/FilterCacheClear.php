<?php

namespace App\Listeners\Cache\Clear;

use App\Services\Filter\FilterService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class FilterCacheClear
{
    private FilterService $service;

    /**
     * SearchCacheClear constructor.
     * @param FilterService $service
     */
    public function __construct(FilterService $service)
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
