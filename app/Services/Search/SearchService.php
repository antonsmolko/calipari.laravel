<?php


namespace App\Services\Search;


use App\Services\Search\Repository\SearchRepository;

class SearchService
{
    private SearchRepository $repository;

    /**
     * SearchService constructor.
     * @param SearchRepository $repository
     */
    public function __construct(SearchRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param string $search
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getSearchableTags(string $search)
    {
        return $this->repository->getSearchableTags($search);
    }
}
