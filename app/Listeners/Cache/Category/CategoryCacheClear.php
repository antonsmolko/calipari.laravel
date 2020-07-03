<?php

namespace App\Listeners\Cache\Category;

use App\Listeners\Cache\CacheClear;
use App\Services\Base\Category\CmsBaseCategoryService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CategoryCacheClear extends CacheClear
{
    public function __construct(CmsBaseCategoryService $service)
    {
        parent::__construct($service);
    }
}
