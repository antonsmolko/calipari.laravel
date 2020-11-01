<?php

namespace App\Http\Controllers\API\Client\ArtCollection;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Services\ArtCollection\ClientArtCollectionService;
use Illuminate\Http\JsonResponse;

class ArtCollectionController extends BaseResourceController
{
    /**
     * CollectionController constructor.
     * @param ClientArtCollectionService $service
     */
    public function __construct(ClientArtCollectionService $service)
    {
        parent::__construct($service);
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json($this->service->index());
    }

    /**
     * @param string $alias
     * @return JsonResponse
     */
    public function getItemByAliasWithImages(string $alias): JsonResponse
    {
        return response()->json($this->service->getItemByAliasWithImages($alias));
    }
}
