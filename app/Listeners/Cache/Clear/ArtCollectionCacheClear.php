<?php

namespace App\Listeners\Cache\Clear;


use App\Services\ArtCollection\CmsArtCollectionService;
use App\Services\Image\CmsImageService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ArtCollectionCacheClear extends BaseCacheClear
{
    public function __construct(CmsArtCollectionService $service)
    {
        parent::__construct($service);
    }
}
