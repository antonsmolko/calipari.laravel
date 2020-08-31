<?php

namespace App\Listeners\Cache\Clear;


use App\Services\Review\CmsReviewService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ReviewCacheClear extends BaseCacheClear
{
    public function __construct(CmsReviewService $service)
    {
        parent::__construct($service);
    }
}
