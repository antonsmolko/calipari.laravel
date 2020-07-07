<?php

namespace App\Listeners\Cache\Clear;


use App\Services\Post\CmsPostService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class PostCacheClear extends BaseCacheClear
{
    public function __construct(CmsPostService $service)
    {
        parent::__construct($service);
    }
}
