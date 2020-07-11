<?php

namespace App\Http\Controllers\API\Client\Texture;

use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Services\Texture\ClientTextureService;

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
     * @return \Illuminate\Http\JsonResponse
     */
    public function getItems()
    {
        return response()->json($this->service->getItems());
    }
}
