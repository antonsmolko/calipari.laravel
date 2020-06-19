<?php


namespace App\Services\Format\Repositories;


use App\Models\Format;

class ClientFormatRepository
{
    /**
     * @param int $categoryId
     * @param array|null $filter
     * @return mixed
     */
    public function getFilters(int $categoryId, array $filter = null)
    {
        return Format::select(['id', 'title', 'alias'])
            ->getFilters($categoryId)
            ->when($filter, function ($query, $filter) {
                return $query->filtered($filter);
            })
            ->withImageCountWhereCategoryId($categoryId)
            ->get();
    }

    /**
     * @param array $ids
     * @param array|null $filter
     * @return mixed
     */
    public function getFiltersByImageIds(array $ids, array $filter = null)
    {
        return Format::select(['id', 'title', 'alias'])
            ->getFiltersByImageIds($ids)
            ->when($filter, function ($query, $filter) {
                return $query->filtered($filter);
            })
            ->get();
    }
}
