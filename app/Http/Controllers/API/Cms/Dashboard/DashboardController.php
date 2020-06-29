<?php

namespace App\Http\Controllers\API\Cms\Dashboard;

use App\Http\Controllers\Controller;
use App\Services\Dashboard\DashboardService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    private DashboardService $service;

    /**
     * DashboardController constructor.
     * @param DashboardService $service
     */
    public function __construct(DashboardService $service)
    {
        $this->service = $service;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getResourcesCount(Request $request): JsonResponse
    {
        return response()->json($this->service->getResourcesCount($request->all()));
    }
}
