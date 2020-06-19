<?php

namespace App\Http\Controllers\API\Client\HomeModuleInterior;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Services\HomeModuleInterior\ClientHomeModuleInteriorService;
use Illuminate\Http\JsonResponse;

class HomeModuleInteriorController extends BaseResourceController
{
    public function __construct(ClientHomeModuleInteriorService $service)
    {
        parent::__construct($service);
    }

    /**
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        return response()->json($this->service->index());
    }
}
