<?php

namespace App\Http\Controllers\API\Cms\Order;


use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Order\Requests\ChangeStatusRequest;
use App\Http\Controllers\API\Cms\Order\Requests\RefundRequest;
use App\Http\Requests\FormRequest;
use App\Services\Order\CmsOrderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

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
     * @param string $status
     * @return JsonResponse
     */
    public function getItemsByStatus(FormRequest $request, string $status): JsonResponse
    {
        return response()->json($this->service->getItemsByStatus($status, $request->all()));
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

    /**
     * @param int $id
     * @return int
     * @throws \Exception
     */
    public function destroy(int $id): int {
        if (!Auth::user()->hasRole(['super_admin', 'owner'])) {
            abort('403');
        }

        return $this->service->destroy($id);
    }

    /**
     * @param RefundRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function refund(RefundRequest $request, int $id): JsonResponse
    {
        return response()->json($this->service->makeRefund($id, $request->all()));
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getPdfItemDetails(int $id)
    {
        return $this->service->getPdfItemDetails($id);
    }
}
