<?php


namespace App\Services\Order\Repositories;

use App\Events\Models\Order\OrderSetStatus;
use App\Models\Order;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Order\Resources\CmsOrder as OrderResource;
use App\Services\Order\Resources\CmsOrderForList as OrderFromListResource;
use App\Services\Order\Resources\CmsOrderForListCollection as OrderFromListCollection;

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
                ->orWhere('alias', 'refunded')
            )
                ->when(!empty($requestData['query']),
                    fn ($query) => $query->where('number', 'like', $requestData['query'] . '%'))
                ->with(['statuses', 'user:id,email', 'items', 'sales'])
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
            ->with(['statuses', 'user:id,email', 'items', 'sales'])
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
                'sales',
                'statuses'
            ])
            ->firstOrFail());
    }

    /**
     * @param Order $order
     * @param int $status
     * @return Order
     */
    public function setStatus(Order $order, int $status)
    {
        $order->statuses()->syncWithoutDetaching([$status]);
        event(new OrderSetStatus($order));

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

    /**
     * @param string $email
     * @return mixed
     */
    public function getWithoutRegistrationItemsByEmail(string $email)
    {
        return $this->model::doesntHave('user')
            ->where('customer->email', $email)
            ->get();
    }
}
