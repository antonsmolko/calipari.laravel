<?php


namespace App\Services\Sale\Repositories;


use App\Models\Order;
use App\Models\Sale;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Sale\Resources\ForListClient as SaleResource;
use App\Services\Sale\Resources\ForListClientCollection as SaleResourceCollection;

class ClientSaleRepository extends ClientBaseResourceRepository
{
    /**
     * ClientSaleRepository constructor.
     * @param Sale $model
     */
    public function __construct(Sale $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $requestData
     * @return SaleResourceCollection
     */
    public function getItems(array $requestData)
    {
        return new SaleResourceCollection($this->model::where('status', $this->model::FOR_SALE)
            ->published()
            ->with('texture')
            ->orderBy('article')
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }

    /**
     * @param array $keys
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItemsByKeys(array $keys)
    {
        return SaleResource::collection($this->model::whereIn('id', $keys)->get());
    }

    /**
     * @param array $keys
     * @return mixed
     */
    public function getRawItemsByKeys(array $keys)
    {
        return $this->model::whereIn('id', $keys)->get();
    }

    /**
     * @param array $keys
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getAvailableItemsByKeys(array $keys)
    {
        return SaleResource::collection($this->model::whereIn('id', $keys)
            ->available()
            ->get());
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function saleIsAvailable(int $id)
    {
        return $this->model::where('id', $id)
            ->where('status', $this->model::FOR_SALE)
            ->exists();
    }

    /**
     * @param Sale $sale
     * @param Order $order
     * @return bool
     */
    public function orderAssociate(Sale $sale, Order $order): bool
    {
        $sale->order()->associate($order);
        $sale->status = $this->model::IN_ORDER;
        return $sale->save();
    }
}
