<?php


namespace App\Services\Texture\Repositories;

use App\Models\Texture;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Texture\Resources\LessDetailed as TextureLessDetailedResource;
use App\Services\Texture\Resources\CmsForEdit as FromEditResource;
use App\Services\Texture\Resources\CmsForList as FromListResource;

class CmsTextureRepository extends CmsBaseResourceRepository
{
    /**
     * TextureRepository constructor.
     * @param Texture $model
     */
    public function __construct(Texture $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Contracts\Pagination\Paginator|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Illuminate\Http\Resources\Json\ResourceCollection
     */
    public function index()
    {
        return FromListResource::collection($this->model::orderBy('order')
            ->withCount('orders')
            ->get());
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItems()
    {
        return TextureLessDetailedResource::collection($this->model::orderBy('order')->get());
    }

    /**
     * @param int $id
     * @return FromEditResource|mixed
     */
    public function getItemFromEdit(int $id)
    {
        return new FromEditResource($this->model::findOrFail($id));
    }
}
