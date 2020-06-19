<?php

namespace App\Http\Controllers\API\Cms\Category;

use App\Http\Controllers\API\Cms\Base\BaseCategoryController;
use App\Http\Controllers\API\Cms\Category\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\Category\Requests\UpdateRequest;
use App\Services\Category\CmsCategoryService;
use Illuminate\Http\JsonResponse;

class CategoryController extends BaseCategoryController
{
    /**
     * @var CmsCategoryService
     */
    protected $service;

    /**
     * CategoryController constructor.
     * @param CmsCategoryService $service
     */
    public function __construct(CmsCategoryService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param StoreRequest $request
     * @return JsonResponse
     */
    public function store(StoreRequest $request): JsonResponse
    {
        return response()->json($this->service->store($request->all()));
    }

    /**
     * @param UpdateRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(UpdateRequest $request, int $id): JsonResponse
    {
        return response()->json($this->service->update($id, $request->all()));
    }
}
