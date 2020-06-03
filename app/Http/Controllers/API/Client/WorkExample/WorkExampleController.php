<?php

namespace App\Http\Controllers\API\Client\WorkExample;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Http\Requests\FormRequest;
use App\Services\WorkExample\ClientWorkExampleService;
use Illuminate\Http\JsonResponse;

class WorkExampleController extends BaseResourceController
{
    /**
     * WorkExampleController constructor.
     * @param ClientWorkExampleService $service
     */
    public function __construct(ClientWorkExampleService $service)
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
