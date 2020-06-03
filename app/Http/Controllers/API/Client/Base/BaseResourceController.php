<?php


namespace App\Http\Controllers\API\Client\Base;


use App\Http\Controllers\Controller;
use App\Services\Base\Resource\ClientBaseResourceService;
use Illuminate\Http\JsonResponse;

abstract class BaseResourceController extends Controller
{
    protected ClientBaseResourceService $service;

    /**
     * BaseResourceController constructor.
     * @param ClientBaseResourceService $service
     */
    public function __construct(ClientBaseResourceService $service) {
        $this->service = $service;
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json($this->service->index());
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getItem(int $id): JsonResponse
    {
        return response()->json($this->service->getItem($id));
    }
}
