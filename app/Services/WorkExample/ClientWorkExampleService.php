<?php


namespace App\Services\WorkExample;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\WorkExample\Repositories\ClientWorkExampleRepository;

class ClientWorkExampleService extends ClientBaseResourceService
{
    public function __construct(
        ClientWorkExampleRepository $repository,
        CacheKeyManager $cacheKeyManager)
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function getItems(array $requestData)
    {
        return $this->repository->getItems($requestData);
    }
}
