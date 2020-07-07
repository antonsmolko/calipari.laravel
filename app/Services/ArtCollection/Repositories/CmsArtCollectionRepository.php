<?php


namespace App\Services\ArtCollection\Repositories;


use App\Models\ArtCollection;
use App\Models\Image;
use App\Services\ArtCollection\Resources\FromEdit as FromEditResource;
use App\Services\ArtCollection\Resources\FromList as FromListResource;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use Illuminate\Database\Eloquent\Builder;

class CmsArtCollectionRepository extends CmsBaseResourceRepository
{
    /**
     * CmsArtCollectionRepository constructor.
     * @param ArtCollection $model
     */
    public function __construct(ArtCollection $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Contracts\Pagination\Paginator|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Illuminate\Http\Resources\Json\ResourceCollection
     */
    public function index()
    {
        return FromListResource::collection($this->model::orderBy('id')
            ->with(['images', 'backgroundImage'])
            ->withCount([
                'images',
                'images as published_count' => fn(Builder $query) => $query
                    ->where('publish', Image::PUBLISHED)])
            ->get());
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItemDetail(int $id)
    {
        return new FromEditResource($this->model::where('id', $id)
            ->withCount(['images as published_count' => fn(Builder $query) => $query
                ->where('publish', Image::PUBLISHED)])
            ->firstOrFail());
    }

    /**
     * @param ArtCollection $collection
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getImages(ArtCollection $collection)
    {
        return $collection->images()
            ->with(Image::IMAGE_QUERY_BUILDER)
            ->withCount(['likes', 'orders'])
            ->orderBy('id', 'desc')
            ->get();
    }

    /**
     * @param ArtCollection $collection
     * @param int $imageId
     * @return int
     */
    public function removeImage(ArtCollection $collection, int $imageId): int
    {
        $detachImages = $collection->images()->detach($imageId);
        if (!$collection->images->count()) {
            $collection->publish = 0;
            $collection->save();
        }

        return $detachImages;
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function getExcludedImages(array $requestData)
    {
        return Image::doesntHave('artCollection')
            ->with(Image::IMAGE_QUERY_BUILDER)
            ->withCount(['likes', 'orders'])
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

    /**
     * @return mixed
     */
    public function getWithoutPublishedImagesItems()
    {
        return $this->model::withoutPublishedImages();
    }
}
