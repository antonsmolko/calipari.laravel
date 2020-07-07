<?php


namespace App\Services\Filter;


use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Filter\Repositories\FilterRepository;
use App\Services\Image\Repositories\ClientImageRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class FilterService
{
    private FilterRepository $filterRepository;
    private ClientImageRepository $imageRepository;
    private ClearCacheHandler $clearCacheHandler;
    private CacheKeyManager $cacheKeyManager;
    private string $cacheTag;

    /**
     * FilterService constructor.
     * @param FilterRepository $filterRepository
     * @param ClientImageRepository $imageRepository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        FilterRepository $filterRepository,
        ClientImageRepository $imageRepository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        $this->filterRepository = $filterRepository;
        $this->imageRepository = $imageRepository;
        $this->clearCacheHandler = $clearCacheHandler;
        $this->cacheKeyManager = $cacheKeyManager;
        $this->cacheTag = Tag::FILTERS_TAG;
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getFormatFilters(Request $request): array
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::FILTERS_PREFIX, ['client', 'format'], $request->all());

        return Cache::tags(Tag::FILTERS_TAG)
            ->remember($key,TTL::FILTERS_TTL, function() use ($request) {
                $imageKeys = $this->imageRepository->getModelKeys($request);

                return ['formats' => $this->filterRepository
                    ->getFormatFiltersByImageKeys($imageKeys)];
            });
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getTagFilters(Request $request): array
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::FILTERS_PREFIX, ['client', 'tag'], $request->all());

        return Cache::tags(Tag::FILTERS_TAG)
            ->remember($key,TTL::FILTERS_TTL, function() use ($request) {
                $imageKeys = $this->imageRepository->getModelKeys($request);
                $exceptId = isset($request->filter['restrictive_category'])
                    ? $request->filter['restrictive_category']
                    : null;

                return ['tags' => $this->filterRepository
                    ->getTagFiltersByImageKeys($imageKeys, $exceptId)];
            });
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getTopicFilters(Request $request): array
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::FILTERS_PREFIX, ['client', 'topic'], $request->all());

        return Cache::tags(Tag::FILTERS_TAG)
            ->remember($key,TTL::FILTERS_TTL, function() use ($request) {
                $imageKeys = $this->imageRepository->getModelKeys($request);
                $exceptId = isset($request->filter['restrictive_category'])
                    ? $request->filter['restrictive_category']
                    : null;

                return ['topics' => $this->filterRepository
                    ->getTopicFiltersByImageKeys($imageKeys, $exceptId)];
            });
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getColorFilters(Request $request): array
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::FILTERS_PREFIX, ['client', 'color'], $request->all());

        return Cache::tags(Tag::FILTERS_TAG)
            ->remember($key,TTL::FILTERS_TTL, function() use ($request) {
                $imageKeys = $this->imageRepository->getModelKeys($request);
                $exceptId = isset($request->filter['restrictive_category'])
                    ? $request->filter['restrictive_category']
                    : null;

                return ['colors' => $this->filterRepository
                    ->getColorFiltersByImageKeys($imageKeys, $exceptId)];
            });
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getInteriorFilters(Request $request): array
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::FILTERS_PREFIX, ['client', 'interior'], $request->all());

        return Cache::tags(Tag::FILTERS_TAG)
            ->remember($key,TTL::FILTERS_TTL, function() use ($request) {
                $imageKeys = $this->imageRepository->getModelKeys($request);
                $exceptId = isset($request->filter['restrictive_category'])
                    ? $request->filter['restrictive_category']
                    : null;

                return ['interiors' => $this->filterRepository
                    ->getInteriorFiltersByImageKeys($imageKeys, $exceptId)];
            });
    }

    public function clearCache()
    {
        $this->clearCacheHandler->handle($this->cacheTag);
    }
}
