<?php

namespace App\Http\Controllers\API\Client\Image;

use App\Http\Controllers\Controller;
use App\Http\Requests\FormRequest;
use App\Services\Image\ClientImageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    private ClientImageService $service;

    /**
     * ClientImageController constructor.
     * @param ClientImageService $service
     */
    public function __construct(ClientImageService $service)
    {
        $this->service = $service;
    }

    public function getItems(Request $request)
    {
        return response()->json($this->service->getItems($request));
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getItem(int $id): JsonResponse
    {
        return response()->json($this->service->getItem($id));
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getWishListItems(Request $request): JsonResponse
    {
        return response()->json($this->service->getWishListItems($request));
    }
}
