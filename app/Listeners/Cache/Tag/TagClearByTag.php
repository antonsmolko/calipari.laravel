<?php

namespace App\Listeners\Cache\Tag;

use App\Listeners\Cache\ClearByTag;
use App\Services\Tag\CmsTagService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class TagClearByTag extends ClearByTag
{
    public function __construct(CmsTagService $service)
    {
        parent::__construct($service);
    }
}
