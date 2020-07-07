<?php

namespace App\Listeners\Cache\Clear;


use App\Services\User\CmsUserService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UserCacheClear extends BaseCacheClear
{
    public function __construct(CmsUserService $service)
    {
        parent::__construct($service);
    }
}
