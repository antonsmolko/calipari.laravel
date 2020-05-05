<?php

namespace App\Http\Controllers\API\Client\Search;

use App\Http\Controllers\Controller;
use App\Services\Search\SearchService;

class SearchController extends Controller
{
    private SearchService $service;

    public function __construct(SearchService $service)
    {
        $this->service = $service;
    }

    public function __invoke(string $search)
    {
        return response()->json($this->service->getSearchableTags($search));
    }
}
