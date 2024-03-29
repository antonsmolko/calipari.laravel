<?php

namespace App\Http\Controllers\API\Client\Category;


use App\Http\Controllers\API\Client\Base\BaseResourceController;
use App\Http\Requests\FormRequest;
use App\Services\Category\ClientCategoryService;
use Illuminate\Http\JsonResponse;

class CategoryController extends BaseResourceController
{
    /**
     * ClientCategoryController constructor.
     * @param ClientCategoryService $service
     */
    public function __construct(ClientCategoryService $service)
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

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getItemTags(int $id)
    {
        return response()->json($this->service->getItemTags($id));
    }

    /**
     * @param FormRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function getImages(FormRequest $request, int $id): JsonResponse
    {
        return response()->json($this->service->getImages($id, $request->all()));
    }
}
