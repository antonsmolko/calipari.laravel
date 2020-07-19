<?php


namespace App\Services\PurchaseStep\Repositories;

use App\Models\PurchaseStep;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\PurchaseStep\Resources\FromListCms as FromListResource;

class CmsPurchaseStepRepository extends CmsBaseResourceRepository
{
    /**
     * CmsPurchaseStepRepository constructor.
     * @param PurchaseStep $model
     */
    public function __construct(PurchaseStep $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Contracts\Pagination\Paginator|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Illuminate\Http\Resources\Json\ResourceCollection
     */
    public function index()
    {
        return FromListResource::collection($this->model::orderBy('id')->get());
    }
}
