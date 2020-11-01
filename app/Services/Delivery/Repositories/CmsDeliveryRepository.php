<?php


namespace App\Services\Delivery\Repositories;

use App\Models\Delivery;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Delivery\Resources\DeliveryCms as DeliveryResource;

class CmsDeliveryRepository extends CmsBaseResourceRepository
{
    /**
     * DeliveryRepository constructor.
     * @param Delivery $model
     */
    public function __construct(Delivery $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Contracts\Pagination\Paginator|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Illuminate\Http\Resources\Json\ResourceCollection
     */
    public function index()
    {
        return DeliveryResource::collection($this->model::orderBy('order')->get());
    }

    /**
     * @param int $id
     * @return DeliveryResource|mixed
     */
    public function getDetailsItem(int $id)
    {
        return new DeliveryResource($this->model::findOrFail($id));
    }

    /**
     * @return mixed
     */
    public function getPickupItems()
    {
        return $this->model::where('is_pickup', 1)
            ->select(['id', 'title', 'alias'])
            ->get();
    }

    /**
     * @return mixed
     */
    public function getPickupsRequirementsItems()
    {
        return $this->model::pickupsRequirements()
            ->published()
            ->get();
    }
}
