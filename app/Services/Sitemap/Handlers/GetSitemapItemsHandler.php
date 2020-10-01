<?php


namespace App\Services\Sitemap\Handlers;


use App\Services\ArtCollection\ClientArtCollectionService;
use App\Services\Category\ClientCategoryService;
use App\Services\ColorCollection\ClientColorCollectionService;
use App\Services\Post\ClientPostService;

class GetSitemapItemsHandler
{
    private ClientCategoryService $categoryService;
    private ClientPostService $postService;
    private ClientColorCollectionService $colorCollectionService;
    private ClientArtCollectionService $artCollectionService;

    /**
     * GetSitemapItemsHandler constructor.
     * @param ClientCategoryService $categoryService
     * @param ClientColorCollectionService $colorCollectionService
     * @param ClientArtCollectionService $artCollectionService
     * @param ClientPostService $postService
     */
    public function __construct(
        ClientCategoryService $categoryService,
        ClientColorCollectionService $colorCollectionService,
        ClientArtCollectionService $artCollectionService,
        ClientPostService $postService
    )
    {
        $this->categoryService = $categoryService;
        $this->postService = $postService;
        $this->artCollectionService = $artCollectionService;
        $this->colorCollectionService = $colorCollectionService;
    }

    /**
     * @return mixed
     */
    public function  handle()
    {
        $categories = $this->categoryService->getItemsForSitemap();
        $posts = $this->postService->getItemsForSitemap();
        $artCollections = $this->artCollectionService->getItemsForSitemap();
        $colorCollections = $this->colorCollectionService->getItemsForSitemap();

        $categoryPaths = $categories->map(fn($category) => '/catalog/' . $category->alias);
        $postsPaths = $posts->map(fn($post) => '/blog/' . $post->alias);
        $artCollections = $artCollections->map(fn($collection) => '/catalog/art-collections/' . $collection->alias);
        $colorCollections = $colorCollections->map(fn($collection) => '/catalog/color-collections/' . $collection->alias);

        return $categoryPaths
            ->concat($artCollections)
            ->concat($colorCollections)
            ->concat($postsPaths);
    }
}
