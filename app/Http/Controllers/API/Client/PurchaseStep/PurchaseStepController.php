<?php

namespace App\Http\Controllers\API\Client\PurchaseStep;

use App\Http\Controllers\Controller;
use App\Services\PurchaseStep\ClientPurchaseStepService;
use Illuminate\Http\JsonResponse;

class PurchaseStepController extends Controller
{
    private ClientPurchaseStepService $service;

    /**
     * PurchaseStepController constructor.
     * @param ClientPurchaseStepService $service
     */
    public function __construct(ClientPurchaseStepService $service)
    {
        $this->service = $service;
    }

    /**
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        return response()->json($this->service->index());
    }
}
