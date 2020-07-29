<?php


namespace App\Services\Order\Repositories;

use App\Models\Order;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Order\Resources\CmsOrder as OrderResource;
use App\Services\Order\Resources\CmsOrderFromList as OrderFromListResource;
use App\Services\Order\Resources\CmsOrderFromListCollection as OrderFromListCollection;

class CmsOrderRepository extends CmsBaseResourceRepository
{
    /**
     * DeliveryRepository constructor.
     * @param Order $model
     */
    public function __construct(Order $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItems()
    {
        return OrderFromListResource::collection($this->model::orderBy('id', 'desc')->get());
    }

    /**
     * @param array $requestData
     * @return OrderFromListCollection
     */
    public function getCurrentItems(array $requestData)
    {
        return new OrderFromListCollection(
            $this->model::whereDoesntHave('statuses', fn ($query) => $query
                ->where('alias', 'completed')
                ->orWhere('alias', 'canceled')
            )
                ->when(!empty($requestData['query']),
                    fn ($query) => $query->where('number', 'like', $requestData['query'] . '%'))
                ->with(['statuses', 'user:id,email'])
                ->orderBy($requestData['sort_by'], $requestData['sort_order'])
                ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }

    /**
     * @param array $requestData
     * @param string $status
     * @return OrderFromListCollection
     */
    public function getItemsByStatus(array $requestData, string $status)
    {
        return new OrderFromListCollection($this->model::with(['statuses', 'user:id,email'])
            ->whereHas('statuses', fn ($query) => $query->where('alias', $status))
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('number', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        return $this->model::findOrFail($id);
    }

    /**
     * @param int $id
     * @return OrderResource
     */
    public function getItemDetails(int $id)
    {
        return new OrderResource($this->model::where('id', $id)
            ->with([
                'user:id,email,name',
                'items',
                'statuses'
            ])
            ->firstOrFail());
    }

    /**
     * @param Order $order
     * @param int $status
     * @return Order
     */
    public function changeStatus(Order $order, int $status)
    {
        $order->statuses()->syncWithoutDetaching([$status]);

        return $order;
    }

    /**
     * @param string $paymentId
     * @return mixed
     */
    public function getItemByPaymentId(string $paymentId)
    {
        return $this->model::where('payment_id', $paymentId)->firstOrFail();
    }
}
