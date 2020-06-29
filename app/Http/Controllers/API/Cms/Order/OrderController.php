<?php

namespace App\Http\Controllers\API\Cms\Order;


use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Order\Requests\ChangeStatusRequest;
use App\Http\Requests\FormRequest;
use App\Services\Order\CmsOrderService;
use Illuminate\Http\JsonResponse;

class OrderController extends BaseResourceController
{
    /**
     * OrderController constructor.
     * @param CmsOrderService $service
     */
    public function __construct(CmsOrderService $service)
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
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function getCurrentItems(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->getCurrentItems($request->all()));
    }

    /**
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function getCompletedItems(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->getCompletedItems($request->all()));
    }

    /**
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function getCanceledItems(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->getCanceledItems($request->all()));
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
     * @param int $id
     * @return JsonResponse
     */
    public function getItemDetails(int $id): JsonResponse
    {
        return response()->json($this->service->getItemDetails($id));
    }

    /**
     * @param ChangeStatusRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function changeStatus(ChangeStatusRequest $request, int $id ): JsonResponse
    {
        return response()->json($this->service->changeStatus($id, $request->all()));
    }
}
