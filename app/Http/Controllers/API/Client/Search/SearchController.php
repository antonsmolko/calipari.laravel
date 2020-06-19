<?php

namespace App\Http\Controllers\API\Client\Search;

use App\Http\Controllers\Controller;
use App\Services\Search\SearchService;
use Illuminate\Http\JsonResponse;

class SearchController extends Controller
{
    private SearchService $service;

    /**
     * SearchController constructor.
     * @param SearchService $service
     */
    public function __construct(SearchService $service)
    {
        $this->service = $service;
    }

    /**
     * @param string $query
     * @return JsonResponse
     */
    public function __invoke(string $query): JsonResponse
    {
        return response()->json($this->service->getSearchedResult($query));
    }
}
