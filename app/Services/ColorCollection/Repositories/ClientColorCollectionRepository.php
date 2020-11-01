<?php


namespace App\Services\ColorCollection\Repositories;


use App\Models\ColorCollection as ColorCollection;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\ColorCollection\Resources\FromClient as FromClientResource;
use App\Services\ColorCollection\Resources\FromListClient as FromListClientResource;
use App\Services\ColorCollection\Resources\FromSearchClient as FromSearchResource;
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
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return FromListClientResource::collection($this->model::published()
            ->with('mainImage')
            ->orderBy('title')
            ->get());
    }

    /**
     * @param string $alias
     * @return FromClientResource
     */
    public function getItemByAliasWithImages(string $alias): FromClientResource
    {
        return new FromClientResource($this->model::where('alias', $alias)
            ->firstOrFail()
            ->load('images'));
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
        return ImageFromEditorResource::collection($item->publishedImages
            ->except($currentImageId));
    }

    /**
     * @param string $search
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getSearchedItems(string $search)
    {
        return FromSearchResource::collection($this->model::search($search)
            ->where('publish', $this->model::PUBLISHED)
            ->get());
    }

    /**
     * @return mixed
     */
    public function getItemsForSitemap()
    {
        return $this->model::published()
            ->select(['alias'])
            ->orderBy('alias')
            ->get();
    }
}
