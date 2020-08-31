<?php


namespace App\Services\Review\Repositories;


use App\Models\Review;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Review\Resources\ForListCmsCollection as ReviewResourceCollection;

class CmsReviewRepository extends CmsBaseResourceRepository
{
    /**
     * CmsReviewRepository constructor.
     * @param Review $model
     */
    public function __construct(Review $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $requestData
     * @return ReviewResourceCollection
     */
    public function getItems(array $requestData): ReviewResourceCollection
    {
        return new ReviewResourceCollection(
            $this->model::when(!empty($requestData['query']),
                    fn ($query) => $query->where('number', 'like', $requestData['query'] . '%'))
                ->orderBy($requestData['sort_by'], $requestData['sort_order'])
                ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }
}
