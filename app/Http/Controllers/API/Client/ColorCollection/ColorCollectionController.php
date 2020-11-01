<?php

namespace App\Http\Controllers\API\Client\ColorCollection;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Services\ColorCollection\ClientColorCollectionService;
use Illuminate\Http\JsonResponse;

class ColorCollectionController extends BaseResourceController
{
    /**
     * CollectionController constructor.
     * @param ClientColorCollectionService $service
     */
    public function __construct(ClientColorCollectionService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param string $alias
     * @return JsonResponse
     */
    public function getItemByAliasWithImages(string $alias): JsonResponse
    {
        return response()->json($this->service->getItemByAliasWithImages($alias));
    }

    /**
     * @return JsonResponse
     */
    public function getItems(): JsonResponse
    {
        return response()->json($this->service->index());
    }
}
