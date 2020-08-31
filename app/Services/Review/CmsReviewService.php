<?php


namespace App\Services\Review;


use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Review\Repositories\CmsReviewRepository;
use Illuminate\Support\Facades\Cache;

class CmsReviewService extends CmsBaseResourceService
{
    public function __construct(
        CmsReviewRepository $repository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager)
    {
        parent::__construct($repository, $clearCacheHandler, $cacheKeyManager);
        $this->cacheTag = Tag::REVIEWS_TAG;
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function getItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::REVIEWS_PREFIX, ['cms'], $requestData);

        return Cache::tags(Tag::REVIEWS_TAG)
            ->remember(
                $key,
                TTL::REVIEWS_TTL,
                fn() => $this->repository->getItems($requestData));
    }
}