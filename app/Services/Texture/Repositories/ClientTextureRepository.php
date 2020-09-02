<?php


namespace App\Services\Texture\Repositories;


use App\Models\Texture;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Texture\Resources\BasicProps as FromEditorResource;

class ClientTextureRepository extends ClientBaseResourceRepository
{
    /**
     * ClientTextureRepository constructor.
     * @param Texture $model
     */
    public function __construct(Texture $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItems()
    {
        return FromEditorResource::collection($this->model::published()
            ->orderBy('order', 'asc')
            ->get());
    }
}
