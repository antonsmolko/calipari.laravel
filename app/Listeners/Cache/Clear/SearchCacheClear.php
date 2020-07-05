<?php

namespace App\Listeners\Cache\Clear;

use App\Services\Search\SearchService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SearchCacheClear
{
    private SearchService $service;

    /**
     * SearchCacheClear constructor.
     * @param SearchService $service
     */
    public function __construct(SearchService $service)
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
