<?php

namespace App\Http\Controllers\API\Client\Image;

use App\Http\Controllers\API\Client\Image\Requests\GetRequest;
use App\Http\Controllers\API\Client\Image\Requests\WishListRequest;
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

    public function getItems(GetRequest $request)
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
     * @param WishListRequest $request
     * @return JsonResponse
     */
    public function getWishListItems(WishListRequest $request): JsonResponse
    {
        return response()->json($this->service->getWishListItems($request));
    }

    /**
     * @param WishListRequest $request
     * @return JsonResponse
     */
    public function getWishListTags(WishListRequest $request): JsonResponse
    {
        return response()->json($this->service->getWishListTags($request->keys));
    }
}
