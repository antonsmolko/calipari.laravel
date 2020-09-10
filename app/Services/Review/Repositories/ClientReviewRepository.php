<?php


namespace App\Services\Review\Repositories;


use App\Models\Review;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Review\Resources\ForListClientCollection as ReviewCollection;

class ClientReviewRepository extends ClientBaseResourceRepository
{
    /**
     * ClientReviewRepository constructor.
     * @param Review $model
     */
    public function __construct(Review $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $requestData
     * @return ReviewCollection
     */
    public function getItems(array $requestData)
    {
        return new ReviewCollection($this->model::published()
            ->orderBy('created_at', 'desc')
            ->with('order:id,customer,user_id')
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }
}
