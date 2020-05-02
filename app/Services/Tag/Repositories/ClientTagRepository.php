<?php


namespace App\Services\Tag\Repositories;

use App\Models\Tag;

class ClientTagRepository
{
    /**
     * TagRepository constructor.
     * @param Tag $model
     */
    public function __construct(Tag $model)
    {
        $this->model = $model;
    }

    /**
     * @param int $categoryId
     * @param array|null $filter
     * @return mixed
     */
    public function getFiltersByCategoryId(int $categoryId, array $filter = null)
    {
        return $this->model::select(['id', 'title'])
                            ->getFiltersByCategoryId($categoryId)
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
        return $this->model::select(['id', 'title'])
            ->getFiltersByImageIds($ids)
            ->when($filter, function ($query, $filter) {
                return $query->filtered($filter);
            })
            ->get();
    }
}
