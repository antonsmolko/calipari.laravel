<?php


namespace App\Services\Collection\Repositories;

use App\Models\Collection;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\Collection\Resources\FromEdit as FromEditResource;
use App\Services\Collection\Resources\FromList as FromListResource;
use App\Services\Image\Resources\FromColorCollectionCms as ImageToTableResource;

class CmsCollectionRepository extends CmsBaseResourceRepository
{
    /**
     * DeliveryRepository constructor.
     * @param Collection $model
     */
    public function __construct(Collection $model)
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
     * @param Collection $item
     * @param array $syncData
     * @return array
     */
    public function syncCategories(Collection $item, array $syncData)
    {
        return $item->categories()->sync($syncData);
    }

    /**
     * @param Collection $item
     * @param array $syncData
     * @return array
     */
    public function syncNonColorCategories(Collection $item, array $syncData)
    {
        return $item->nonColorCategories()->sync($syncData);
    }

    /**
     * @param Collection $item
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getImages(Collection $item)
    {
        return ImageToTableResource::collection($item->images()->orderBy('id')->get());
    }

    /**
     * @param Collection $item
     * @param array $images
     * @return mixed
     */
    public function addImages(Collection $item, array $images)
    {
        return $item->images()->associate($images);
    }

    /**
     * @param Collection $item
     * @param int $imageId
     * @return int
     */
    public function setMainImage(Collection $item, int $imageId): int
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
