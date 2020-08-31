<?php

namespace App\Http\Controllers\API\Cms\Review;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Requests\FormRequest;
use App\Services\Review\CmsReviewService;
use Illuminate\Http\JsonResponse;

class ReviewController extends BaseResourceController
{
    /**
     * ReviewController constructor.
     * @param CmsReviewService $service
     */
    public function __construct(CmsReviewService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function getItems(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->getItems($request->all()));
    }
}
