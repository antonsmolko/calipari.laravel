<?php

namespace App\Listeners\Cache\Clear;


use App\Services\Image\CmsImageService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ImageCacheClear extends BaseCacheClear
{
    public function __construct(CmsImageService $service)
    {
        parent::__construct($service);
    }
}
