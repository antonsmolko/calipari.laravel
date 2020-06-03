<?php


namespace App\Services\Page;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Page\Repositories\ClientPageRepository;

class ClientPageService extends ClientBaseResourceService
{
    public function __construct(
        ClientPageRepository $repository,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    public function getItemByAlias(string $alias)
    {
        return $this->repository->getItemByAlias($alias);
    }
}
