<?php


namespace App\Services\Category;


use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Category\Repositories\ClientCategoryRepository;
use Illuminate\Support\Facades\Cache;

class ClientCategoryService extends ClientBaseResourceService
{

    /**
     * ClientCategoryService constructor.
     * @param ClientCategoryRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientCategoryRepository $repository,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $cacheKeyManager);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|mixed
     */
    public function index()
    {
        $key = $this->cacheKeyManager->getCategoriesKey(['client', 'index']);

        return Cache::tags(Tag::CATEGORIES_TAG)
            ->remember(
                $key,
                TTL::CATEGORIES_TTL,
                fn () => $this->repository->index());
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAlias(string $alias)
    {
        $key = $this->cacheKeyManager->getCategoriesKey(['client', $alias]);

        return Cache::tags(Tag::CATEGORIES_TAG)
            ->remember(
                $key,
                TTL::CATEGORIES_TTL,
                fn () => $this->repository->getItemByAlias($alias));
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItemTags(int $id)
    {
        $key = $this->cacheKeyManager->getCategoriesKey(['client', 'tags', 'by_category_' . $id]);

        return Cache::tags(Tag::CATEGORIES_TAG)
            ->remember(
                $key,
                TTL::CATEGORIES_TTL,
                fn () => $this->repository->getItemTags($id));
    }
}
