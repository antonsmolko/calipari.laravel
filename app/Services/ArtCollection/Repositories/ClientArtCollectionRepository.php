<?php


namespace App\Services\ArtCollection\Repositories;


use App\Models\ArtCollection;
use App\Services\ArtCollection\Resources\FromClient as FromClientResource;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Image\Resources\FromEditorClient as ImageFromEditorResource;

class ClientArtCollectionRepository extends ClientBaseResourceRepository
{
    public function __construct(ArtCollection $model)
    {
        $this->model = $model;
    }

    /**
     * @param string $alias
     * @return FromClientResource
     */
    public function getItemByAliasWithImages(string $alias): FromClientResource
    {
        return new FromClientResource($this->model::where('alias', $alias)
            ->firstOrFail()->load('images'));
    }

    /**
     * @param ArtCollection $item
     * @param int $currentImageId
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItemImagesFromEditor(ArtCollection $item, int $currentImageId)
    {
        return ImageFromEditorResource::collection($item->images->except($currentImageId));
    }
}
