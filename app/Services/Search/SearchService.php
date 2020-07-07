<?php


namespace App\Services\Search;


use App\Services\ArtCollection\Repositories\ClientArtCollectionRepository;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Category\Repositories\ClientCategoryRepository;
use App\Services\ColorCollection\Repositories\ClientColorCollectionRepository;
use Illuminate\Support\Facades\Cache;

class SearchService
{
    private ClientCategoryRepository $categoryRepository;
    private ClientColorCollectionRepository $colorCollectionRepository;
    private ClientArtCollectionRepository $artCollectionRepository;
    private ClearCacheHandler $clearCacheHandler;
    private CacheKeyManager $cacheKeyManager;
    private string $cacheTag;

    /**
     * SearchService constructor.
     * @param ClientCategoryRepository $categoryRepository
     * @param ClientColorCollectionRepository $colorCollectionRepository
     * @param ClientArtCollectionRepository $artCollectionRepository
     * @param ClearCacheHandler $clearCacheHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientCategoryRepository $categoryRepository,
        ClientColorCollectionRepository $colorCollectionRepository,
        ClientArtCollectionRepository $artCollectionRepository,
        ClearCacheHandler $clearCacheHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        $this->categoryRepository = $categoryRepository;
        $this->colorCollectionRepository = $colorCollectionRepository;
        $this->artCollectionRepository = $artCollectionRepository;
        $this->clearCacheHandler = $clearCacheHandler;
        $this->cacheKeyManager = $cacheKeyManager;
        $this->cacheTag = Tag::SEARCH_TAG;
    }

    /**
     * @param string $query
     * @return array
     */
    public function getSearchedResult(string $query)
    {
        $key = $this->cacheKeyManager->getResourceKey(Key::SEARCH_PREFIX, ['client', 'search', 'query:' . $query]);

        return Cache::tags(Tag::SEARCH_TAG)
            ->remember($key,TTL::SEARCH_TTL, function() use ($query) {
                $categories = $this->categoryRepository->getSearchedItems($query);
                $colorCollections = $this->colorCollectionRepository->getSearchedItems($query);
                $artCollections = $this->artCollectionRepository->getSearchedItems($query);

                return [...$categories, ...$colorCollections, ...$artCollections];
            });
    }

    public function clearCache()
    {
        $this->clearCacheHandler->handle($this->cacheTag);
    }
}
