<?php


namespace App\Services\Category\Handlers;


use App\Services\Category\Repositories\ClientCategoryRepository;
use App\Services\Format\Repositories\ClientFormatRepository;
use App\Services\Tag\Repositories\ClientTagRepository;
use Illuminate\Support\Arr;

class GetFiltersHandler
{
    private ClientCategoryRepository $repository;
    private ClientTagRepository $tagRepository;
    private ClientFormatRepository $formatRepository;

    /**
     * GetFiltersHandler constructor.
     * @param ClientCategoryRepository $repository
     * @param ClientTagRepository $tagRepository
     * @param ClientFormatRepository $formatRepository
     */
    public function __construct(
        ClientCategoryRepository $repository,
        ClientTagRepository $tagRepository,
        ClientFormatRepository $formatRepository
    )
    {
        $this->repository = $repository;
        $this->tagRepository = $tagRepository;
        $this->formatRepository = $formatRepository;
    }

    /**
     * @param int $categoryId
     * @param array $filter
     * @return array
     */
    public function handle(int $categoryId, array $filter = null): array
    {
        $categories = $this->repository
            ->getFilters($categoryId, $filter)
            ->groupBy('type');

        $tags = $this->tagRepository
            ->getFiltersByCategoryId($categoryId, $filter);

        $formats = $this->formatRepository
            ->getFilters($categoryId, $filter);

        return Arr::collapse([$categories->toArray(), ['tags' => $tags, 'formats' => $formats]]);
    }
}
