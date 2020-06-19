<?php

namespace App\Http\Controllers\API\Cms\HomeModuleInterior;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\HomeModuleInterior\Requests\InteriorUpdateRequest;
use App\Services\HomeModuleInterior\CmsHomeModuleInteriorService;
use Illuminate\Http\JsonResponse;

class HomeModuleInteriorController extends BaseResourceController
{
    /**
     * HomeModuleInteriorController constructor.
     * @param CmsHomeModuleInteriorService $service
     */
    public function __construct(CmsHomeModuleInteriorService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getItemSlides(int $id): JsonResponse
    {
        return response()->json($this->service->getItemSlides($id));
    }

    /**
     * @param InteriorUpdateRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(InteriorUpdateRequest $request, int $id): JsonResponse
    {
        return response()->json($this->service->update($id, $request->all()));
    }
}
