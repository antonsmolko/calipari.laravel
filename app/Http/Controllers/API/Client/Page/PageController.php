<?php

namespace App\Http\Controllers\API\Client\Page;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Services\Page\ClientPageService;
use Illuminate\Http\JsonResponse;

class PageController extends BaseResourceController
{
    /**
     * PageController constructor.
     * @param ClientPageService $service
     */
    public function __construct(ClientPageService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param string $alias
     * @return JsonResponse
     */
    public function getItemByAlias(string $alias): JsonResponse
    {
        return response()->json($this->service->getItemByAlias($alias));
    }
}
