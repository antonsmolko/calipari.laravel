<?php


namespace App\Services\HomeModuleInterior\Repositories;


use App\Models\HomeModuleInterior;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\HomeModuleInterior\Resources\InteriorFromListCms as InteriorResource;

class CmsHomeModuleInteriorRepository extends CmsBaseResourceRepository
{
    public function __construct(HomeModuleInterior $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Contracts\Pagination\Paginator|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Illuminate\Http\Resources\Json\ResourceCollection
     */
    public function index()
    {
        return InteriorResource::collection($this->model::orderBy('order')->get());
    }

    /**
     * @return int
     */
    public function getNextOrderNumber(): int
    {
        $lastOrderNumberItem = $this->model::orderBy('order', 'desc')->first();

        return $lastOrderNumberItem ? $lastOrderNumberItem->order + 1 : 1;
    }

    /**
     * @param int $interiorId
     * @return mixed
     */
    public function getItemByInteriorId(int $interiorId)
    {
        return $this->model::where('interior_id', $interiorId)->firstOrFail();
    }
}
