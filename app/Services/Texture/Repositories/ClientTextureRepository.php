<?php


namespace App\Services\Texture\Repositories;


use App\Models\Texture;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Texture\Resources\ForListClient as TextureResource;
use App\Services\Texture\Resources\LessDetailed as TextureLessDetailedResource;

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
        return TextureResource::collection($this->model::published()
            ->orderBy('order', 'asc')
            ->get());
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItemsLessDetailed()
    {
        return TextureLessDetailedResource::collection($this->model::published()
            ->orderBy('order', 'asc')
            ->get());
    }
}
