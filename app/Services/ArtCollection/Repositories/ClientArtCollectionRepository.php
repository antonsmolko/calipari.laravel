<?php


namespace App\Services\ArtCollection\Repositories;


use App\Models\ArtCollection;
use App\Services\ArtCollection\Resources\FromClient as FromClientResource;
use App\Services\ArtCollection\Resources\FromListClient as FromListClientResource;
use App\Services\ArtCollection\Resources\FromSearchClient as FromSearchResource;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Image\Resources\FromEditorClient as ImageFromEditorResource;

class ClientArtCollectionRepository extends ClientBaseResourceRepository
{
    /**
     * ClientArtCollectionRepository constructor.
     * @param ArtCollection $model
     */
    public function __construct(ArtCollection $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return FromListClientResource::collection($this->model::published()
            ->orderBy('alias')
            ->get());
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
