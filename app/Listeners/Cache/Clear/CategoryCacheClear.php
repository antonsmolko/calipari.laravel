<?php

namespace App\Listeners\Cache\Clear;


use App\Services\Base\Category\CmsBaseCategoryService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CategoryCacheClear extends BaseCacheClear
{
    public function __construct(CmsBaseCategoryService $service)
    {
        parent::__construct($service);
    }
}
