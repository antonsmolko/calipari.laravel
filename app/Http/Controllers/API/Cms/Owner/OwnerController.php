<?php

namespace App\Http\Controllers\API\Cms\Owner;

use App\Http\Controllers\API\Cms\SubCategory\SubCategoryController;
use App\Services\Image\CmsImageService;
use App\Services\Owner\OwnerService;
use App\Http\Controllers\API\Cms\Owner\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\Owner\Requests\UpdateRequest;
use Illuminate\Http\JsonResponse;

class OwnerController extends SubCategoryController
{
    private CmsImageService $imageService;

    /**
     * OwnerController constructor.
     * @param OwnerService $service
     * @param CmsImageService $imageService
     */
    public function __construct(
        OwnerService $service,
        CmsImageService $imageService
    )
    {
        parent::__construct($service);
        $this->imageService = $imageService;
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
     * @return mixed
     */
    public function update(UpdateRequest $request, int $id)
    {
        return $this->service->update($id, $request->all());
    }
}
