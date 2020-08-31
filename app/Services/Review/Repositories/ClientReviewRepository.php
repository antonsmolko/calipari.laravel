<?php


namespace App\Services\Review\Repositories;


use App\Models\Review;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;

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
}
