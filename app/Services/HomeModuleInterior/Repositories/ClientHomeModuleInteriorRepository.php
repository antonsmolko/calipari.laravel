<?php


namespace App\Services\HomeModuleInterior\Repositories;


use App\Models\HomeModuleInterior;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\HomeModuleInterior\Resources\InteriorClient as InteriorResource;
use Illuminate\Database\Eloquent\Collection;

class ClientHomeModuleInteriorRepository extends ClientBaseResourceRepository
{
    /**
     * ClientHomeModuleInteriorRepository constructor.
     * @param HomeModuleInterior $model
     */
    public function __construct(HomeModuleInterior $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return InteriorResource::collection($this->model::has('publishSlides')
            ->orderBy('order')
            ->get()->load('slides'));
    }
}
