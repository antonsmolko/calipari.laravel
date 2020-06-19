<?php


namespace App\Services\HomeModuleInterior;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\HomeModuleInterior\Repositories\ClientHomeModuleInteriorRepository;

class ClientHomeModuleInteriorService extends ClientBaseResourceService
{
    public function __construct(
        ClientHomeModuleInteriorRepository $repository,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $cacheKeyManager);
    }
}
