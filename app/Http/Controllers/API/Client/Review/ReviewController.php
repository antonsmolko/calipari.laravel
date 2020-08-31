<?php

namespace App\Http\Controllers\API\Client\Review;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Http\Controllers\API\Client\Review\Requests\CreateRequest;
use App\Services\Review\ClientReviewService;
use Illuminate\Http\JsonResponse;

class ReviewController extends BaseResourceController
{
    /**
     * ReviewController constructor.
     * @param ClientReviewService $service
     */
    public function __construct(ClientReviewService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param CreateRequest $request
     * @return JsonResponse
     */
    public function store(CreateRequest $request): JsonResponse
    {
        return response()->json($this->service->store($request->all()));
    }
}
