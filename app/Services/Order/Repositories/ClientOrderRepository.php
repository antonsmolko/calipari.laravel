<?php


namespace App\Services\Order\Repositories;


use App\Events\Models\Order\OrderSetStatus;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Sale;
use App\Models\User;
use App\Services\Order\Resources\ClientOrder as ClientOrderResource;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Order\Resources\ByHashClient as ForPaymentResource;

class ClientOrderRepository extends ClientBaseResourceRepository
{
    /**
     * ClientDeliveryRepository constructor.
     * @param Order $model
     */
    public function __construct(Order $model)
    {
        $this->model = $model;
    }

    /**
     * @param \Illuminate\Contracts\Auth\Authenticatable|User $user
     * @param int $number
     * @return mixed
     */
    public function getUserItemByNumber($user, int $number)
    {
        return $user->orders()->where('number', $number)->firstOrFail();
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function store(array $requestData)
    {
        $defaultStatus = OrderStatus::where('alias', Order::DEFAULT_STATUS)->firstOrFail();
        $order = $this->model::create($requestData);
        $order->statuses()->attach($defaultStatus->id);

        return $order;
    }

    /**
     * @param Order|ForPaymentResource $order
     * @param array $updateData
     * @return mixed
     */
    public function update($order, array $updateData)
    {
        return $order->update($updateData);
    }

    /**
     * @param Order $order
     * @param int $status
     * @return ClientOrderResource
     */
    public function changeStatus(Order $order, int $status): ClientOrderResource
    {
        $order->statuses()->syncWithoutDetaching([$status]);
        event(new OrderSetStatus($order));

        return new ClientOrderResource($order);
    }

    /**
     * @param string $number
     * @return ForPaymentResource
     */
    public function getItemForPayment(string $number): ForPaymentResource
    {
        return new ForPaymentResource($this->model::where('number', $number)->firstOrFail());
    }

    /**
     * @param string $token
     * @return mixed
     */
    public function getItemByCompletionToken(string $token)
    {
        return $this->model::where('completion_token', $token)->firstOrFail();
    }

    /**
     * @param string $number
     * @return mixed
     */
    public function getItemByNumber(string $number)
    {
        return $this->model::where('number', $number)->firstOrFail();
    }

    /**
     * @param Order $order
     * @param array $reviewData
     * @return \Illuminate\Database\Eloquent\Model|\Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function createReview(Order $order, array $reviewData)
    {
        return $order->review()->create($reviewData);
    }
}
