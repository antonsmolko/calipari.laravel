<?php


namespace App\Services\Filter\Handlers;


use App\Services\Filter\Repositories\FilterRepository;
use Illuminate\Support\Arr;

class GetFiltersByImageKeysHandler
{
    private FilterRepository $filterRepository;

    /**
     * GetFiltersByImageKeysHandler constructor.
     * @param FilterRepository $filterRepository
     */
    public function __construct(FilterRepository $filterRepository)
    {
        $this->filterRepository = $filterRepository;
    }

    /**
     * @param int $categoryId
     * @param array $keys
     * @return array
     */
    public function handle(int $categoryId, array $keys)
    {
        $tags = $this->filterRepository->getTagFiltersByImageKeys($keys);
        $formats = $this->filterRepository->getFormatFiltersByImageKeys($keys);
        $categories = $this->filterRepository->getCategoryFiltersByImageKeys($categoryId, $keys);

        return Arr::collapse([
            $categories, ['tags' => $tags, 'formats' => $formats]
        ]);
    }
}
