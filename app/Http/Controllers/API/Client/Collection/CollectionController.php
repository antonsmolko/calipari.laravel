<?php

namespace App\Http\Controllers\API\Client\Collection;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Services\Collection\ClientCollectionService;
use Illuminate\Http\JsonResponse;

class CollectionController extends BaseResourceController
{
    /**
     * CollectionController constructor.
     * @param ClientCollectionService $service
     */
    public function __construct(ClientCollectionService $service)
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
     * @param int $id
     * @return JsonResponse
     */
    public function getItemTags(int $id)
    {
        return response()->json($this->service->getItemTags($id));
    }
}
