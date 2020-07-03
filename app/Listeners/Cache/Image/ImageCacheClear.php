<?php

namespace App\Listeners\Cache\Image;

use App\Listeners\Cache\CacheClear;
use App\Services\Image\CmsImageService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ImageCacheClear extends CacheClear
{
    public function __construct(CmsImageService $service)
    {
        parent::__construct($service);
    }
}
