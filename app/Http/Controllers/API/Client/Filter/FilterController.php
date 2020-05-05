<?php

namespace App\Http\Controllers\API\Client\Filter;

use App\Http\Controllers\Controller;
use App\Services\Filter\FilterService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    private FilterService $filterService;

    /**
     * FilterController constructor.
     * @param FilterService $filterService
     */
    public function __construct(FilterService $filterService)
    {
        $this->filterService = $filterService;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getFormatFilters(Request $request): JsonResponse
    {
        return response()->json($this->filterService->getFormatFilters($request));
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getTagFilters(Request $request): JsonResponse
    {
        return response()->json($this->filterService->getTagFilters($request));
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getTopicFilters(Request $request): JsonResponse
    {
        return response()->json($this->filterService->getTopicFilters($request));
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getColorFilters(Request $request): JsonResponse
    {
        return response()->json($this->filterService->getColorFilters($request));
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getInteriorFilters(Request $request): JsonResponse
    {
        return response()->json($this->filterService->getInteriorFilters($request));
    }
}
