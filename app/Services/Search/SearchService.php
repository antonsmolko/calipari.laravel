<?php


namespace App\Services\Search;


use App\Services\Category\Repositories\ClientCategoryRepository;
use App\Services\ColorCollection\Repositories\ClientColorCollectionRepository;
use Illuminate\Support\Arr;

class SearchService
{
    private ClientCategoryRepository $categoryRepository;
    private ClientColorCollectionRepository $collectionRepository;

    /**
     * SearchService constructor.
     * @param ClientCategoryRepository $categoryRepository
     * @param ClientColorCollectionRepository $collectionRepository
     */
    public function __construct(
        ClientCategoryRepository $categoryRepository,
        ClientColorCollectionRepository $collectionRepository)
    {
        $this->categoryRepository = $categoryRepository;
        $this->collectionRepository = $collectionRepository;
    }

    /**
     * @param string $query
     * @return array
     */
    public function getSearchedResult(string $query)
    {
        $categories = $this->categoryRepository->getSearchedItems($query);
        $collections = $this->collectionRepository->getSearchedItems($query);

        return [...$categories, ...$collections];
//        return $this->categoryRepository->getSearchedItems($query);
    }
}
