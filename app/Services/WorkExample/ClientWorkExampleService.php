<?php


namespace App\Services\WorkExample;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\WorkExample\Repositories\ClientWorkExampleRepository;
use Illuminate\Support\Facades\Cache;

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
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::WORK_EXAMPLES_PREFIX, ['client', 'list'], ['pagination' => $requestData]);

        return Cache::tags(Tag::WORK_EXAMPLES_TAG)
            ->remember(
                $key,
                TTL::WORK_EXAMPLES_TTL,
                fn () => $this->repository->getItems($requestData));
    }
}
