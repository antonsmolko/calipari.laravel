<?php


namespace App\Services\ColorCollection\Repositories;

use App\Models\ColorCollection;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\ColorCollection\Resources\FromEdit as FromEditResource;
use App\Services\ColorCollection\Resources\FromList as FromListResource;
use App\Services\Image\Resources\FromColorCollectionCms as ImageToTableResource;

class CmsColorCollectionRepository extends CmsBaseResourceRepository
{
    /**
     * CmsColorCollectionRepository constructor.
     * @param ColorCollection $model
     */
    public function __construct(ColorCollection $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Contracts\Pagination\Paginator|\Illuminate\Database\Eloquent\Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection|\Illuminate\Http\Resources\Json\ResourceCollection
     */
    public function index()
    {
        return FromListResource::collection($this->model::orderBy('id')->get());
    }

    /**
     * @param int $id
     * @return FromEditResource
     */
    public function getItemFromEdit(int $id)
    {
        return new FromEditResource($this->model::findOrFail($id));
    }

    /**
     * @param ColorCollection $item
     * @param array $syncData
     * @return array
     */
    public function syncCategories(ColorCollection $item, array $syncData)
    {
        return $item->categories()->sync($syncData);
    }

    /**
     * @param ColorCollection $item
     * @param array $syncData
     * @return array
     */
    public function syncNonColorCategories(ColorCollection $item, array $syncData)
    {
        return $item->nonColorCategories()->sync($syncData);
    }

    /**
     * @param ColorCollection $item
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getImages(ColorCollection $item)
    {
        return ImageToTableResource::collection($item->images()->orderBy('id')->get());
    }

    /**
     * @param ColorCollection $item
     * @param array $images
     * @return mixed
     */
    public function addImages(ColorCollection $item, array $images)
    {
        return $item->images()->associate($images);
    }

    /**
     * @param ColorCollection $item
     * @param int $imageId
     * @return int
     */
    public function setMainImage(ColorCollection $item, int $imageId): int
    {
        if ($item->images->contains('id', $imageId)) {
            $item->mainImage()->associate($imageId);
            $item->save();
        }

        return $item->mainImage ? $item->mainImage->id : 0;
    }

    /**
     * @param $item
     * @return int
     */
    public function destroy($item): int
    {
        return $item->delete();
    }

    /**
     * @return mixed
     */
    public function getWithoutPublishedImagesItems()
    {
        return $this->model::withoutPublishedImages();
    }
}
