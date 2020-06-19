<?php

namespace App\Http\Controllers\API\Client\Post;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Http\Requests\FormRequest;
use App\Services\Post\ClientPostService;
use Illuminate\Http\JsonResponse;

class PostController extends BaseResourceController
{
    /**
     * PostController constructor.
     * @param ClientPostService $service
     */
    public function __construct(ClientPostService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param FormRequest $request
     * @param string $type
     * @return JsonResponse
     */
    public function getItems(FormRequest $request, string $type): JsonResponse
    {
        return response()->json($this->service->getItems($type, $request->all()));
    }

    public function getPublishedTypes()
    {
        return response()->json($this->service->getPublishedTypes());
    }

    public function getItemByAlias(string $alias)
    {
        return response()->json($this->service->getItemByAlias($alias));
    }
}
