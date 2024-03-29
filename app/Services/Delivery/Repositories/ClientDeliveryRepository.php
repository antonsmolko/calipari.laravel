<?php


namespace App\Services\Delivery\Repositories;


use App\Models\Delivery;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Delivery\Resources\DeliveryClient as DeliveryResource;
use Illuminate\Database\Eloquent\Collection;

class ClientDeliveryRepository extends ClientBaseResourceRepository
{
    /**
     * ClientDeliveryRepository constructor.
     * @param Delivery $model
     */
    public function __construct(Delivery $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return DeliveryResource::collection($this->model::published()
            ->orderBy('order')
            ->get()
            ->load('pickups'));
    }
}
