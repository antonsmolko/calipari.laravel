<?php


namespace App\Services\ColorCollection\Repositories;


use App\Models\ColorCollection as ColorCollection;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\ColorCollection\Resources\FromClient as FromClientResource;
use App\Services\ColorCollection\Resources\FromSearchClient as FromSearchClientResource;
use App\Services\Image\Resources\FromEditorClient as ImageFromEditorResource;

class ClientColorCollectionRepository extends ClientBaseResourceRepository
{
    /**
     * ClientColorCollectionRepository constructor.
     * @param ColorCollection $model
     */
    public function __construct(ColorCollection $model)
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
     * @param ColorCollection $item
     * @return mixed
     */
    public function getItemImages(ColorCollection $item)
    {
        return $item->images;
    }

    /**
     * @param ColorCollection $item
     * @param int $currentImageId
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItemImagesFromEditor(ColorCollection $item, int $currentImageId)
    {
        return ImageFromEditorResource::collection($item->images->except($currentImageId));
    }

    /**
     * @param string $search
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getSearchedItems(string $search)
    {
        return FromSearchClientResource::collection($this->model::search($search)
            ->where('publish', $this->model::PUBLISHED)
            ->get());
    }

//    /**
//     * @param ColorCollection $item
//     * @return mixed
//     */
//    public function getItemTags(ColorCollection $item)
//    {
//        return $item->tags->filter(fn ($tag, $key) => $tag->publish === 1);
//    }
}
