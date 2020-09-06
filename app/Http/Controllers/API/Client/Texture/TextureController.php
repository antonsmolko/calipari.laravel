<?php

namespace App\Http\Controllers\API\Client\Texture;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Services\Texture\ClientTextureService;
use Illuminate\Http\JsonResponse;

class TextureController extends BaseResourceController
{
    /**
     * TextureController constructor.
     * @param ClientTextureService $service
     */
    public function __construct(ClientTextureService $service)
    {
        parent::__construct($service);
    }

    /**
     * @return JsonResponse
     */
    public function getItems(): JsonResponse
    {
        return response()->json($this->service->getItems());
    }

    /**
     * @return JsonResponse
     */
    public function getItemsLessDetailed(): JsonResponse
    {
        return response()->json($this->service->getItemsLessDetailed());
    }
}
