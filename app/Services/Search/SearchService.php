<?php


namespace App\Services\Search;


use App\Services\Category\Repositories\ClientCategoryRepository;
use App\Services\Tag\Repositories\ClientTagRepository;

class SearchService
{
    private ClientTagRepository $tagRepository;
    private ClientCategoryRepository $categoryRepository;

    /**
     * SearchService constructor.
     * @param ClientTagRepository $tagRepository
     * @param ClientCategoryRepository $categoryRepository
     */
    public function __construct(
        ClientTagRepository $tagRepository,
        ClientCategoryRepository $categoryRepository)
    {
        $this->tagRepository = $tagRepository;
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @param string $query
     * @return array
     */
    public function getSearchedResult(string $query): array
    {
        $tags = $this->tagRepository->getSearchedItems($query);
        $categories = $this->categoryRepository->getSearchedItems($query);

        return [...$tags, ...$categories];
    }
}
