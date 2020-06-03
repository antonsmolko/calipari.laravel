<?php


namespace App\Services\Post;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Post\Handlers\GetPublishedTypesHandler;
use App\Services\Post\Repositories\ClientPostRepository;

class ClientPostService extends ClientBaseResourceService
{
    private GetPublishedTypesHandler $getPublishedTypesHandler;

    /**
     * ClientPostService constructor.
     * @param ClientPostRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     * @param GetPublishedTypesHandler $getPublishedTypesHandler
     */
    public function __construct(
        ClientPostRepository $repository,
        CacheKeyManager $cacheKeyManager,
        GetPublishedTypesHandler $getPublishedTypesHandler
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->getPublishedTypesHandler = $getPublishedTypesHandler;
    }

    /**
     * @param string $type
     * @param array $requestData
     * @return mixed
     */
    public function getItems(string $type, array $requestData)
    {
        return $this->repository->getItems($type, $requestData);
    }

    /**
     * @return array
     */
    public function getPublishedTypes(): array
    {
        return $this->getPublishedTypesHandler->handle();
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAlias(string $alias)
    {
        return $this->repository->getItemByAlias($alias);
    }
}
