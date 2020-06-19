<?php


namespace App\Services\Search;


use App\Services\Category\Repositories\ClientCategoryRepository;
use App\Services\Collection\Repositories\ClientCollectionRepository;
use Illuminate\Support\Arr;

class SearchService
{
    private ClientCategoryRepository $categoryRepository;
    private ClientCollectionRepository $collectionRepository;

    /**
     * SearchService constructor.
     * @param ClientCategoryRepository $categoryRepository
     * @param ClientCollectionRepository $collectionRepository
     */
    public function __construct(
        ClientCategoryRepository $categoryRepository,
        ClientCollectionRepository $collectionRepository)
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
