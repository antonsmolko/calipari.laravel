<?php

namespace App\Listeners\Cache\Clear;


use App\Services\Texture\CmsTextureService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class TextureCacheClear extends BaseCacheClear
{
    public function __construct(CmsTextureService $service)
    {
        parent::__construct($service);
    }
}
