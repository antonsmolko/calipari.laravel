<?php

namespace App\Http\Controllers\API\Client\Sitemap;

use App\Http\Controllers\Controller;
use App\Services\Sitemap\SitemapService;
use Illuminate\Http\JsonResponse;

class SitemapController extends Controller
{
    private SitemapService $service;

    /**
     * SitemapController constructor.
     * @param SitemapService $service
     */
    public function __construct(SitemapService $service)
    {
        $this->service = $service;
    }

    /**
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        return response()->json($this->service->getMapItems());
    }
}
