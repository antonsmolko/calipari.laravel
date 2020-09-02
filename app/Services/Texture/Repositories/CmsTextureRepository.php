<?php


namespace App\Services\Texture\Repositories;

use App\Models\Texture;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Texture\Resources\BasicProps as TextureBasicResource;
use App\Services\Texture\Resources\CmsFromEdit as FromEditResource;
use App\Services\Texture\Resources\CmsFromList as FromListResource;

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
        return TextureBasicResource::collection($this->model::orderBy('order')->get());
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
