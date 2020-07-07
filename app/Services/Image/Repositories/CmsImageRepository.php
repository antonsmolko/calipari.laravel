<?php


namespace App\Services\Image\Repositories;


use App\Models\Image;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use Illuminate\Contracts\Pagination\Paginator;
use App\Services\Image\Resources\FromEditCms as ImageToEditResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CmsImageRepository extends CmsBaseResourceRepository
{
    /**
     * ImageRepository constructor.
     * @param Image $model
     */
    public function __construct(Image $model)
    {
        $this->model = $model;
    }

    /**
     * @param int $id
     * @return JsonResource
     */
    public function getItemToEdit(int $id): JsonResource
    {
        return new ImageToEditResource($this->model::findOrFail($id));
    }

    /**
     * @param array $requestData
     * @return Paginator
     */
    public function getTrashedItems(array $requestData)
    {
        return $this->model::onlyTrashed()
            ->with($this->model::IMAGE_QUERY_BUILDER)
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

    /**
     * @param array $requestData
     * @return Paginator
     */
    public function getItems(array $requestData)
    {
        return $this->model::with($this->model::IMAGE_QUERY_BUILDER)
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

    /**
     * @param Image $item
     * @param array $syncData
     * @return array
     */
    public function syncCategories(Image $item, array $syncData)
    {
        return $item->categories()->sync($syncData);
    }

    /**
     * @param Image $item
     * @param array $syncData
     * @return array
     */
    public function syncNonColorCategories(Image $item, array $syncData)
    {
        return $item->nonColorCategories()->sync($syncData);
    }

    /**
     * @param $item
     * @param array $updateData
     * @return mixed
     */
    public function update($item, array $updateData)
    {
        return $item->update($updateData);
    }

    /**
     * @param Image $item
     * @return mixed
     */
    public function dissociateOwner(Image $item)
    {
        $item->owner()->dissociate();

        return $item->save();
    }

    /**
     * @param int $id
     * @return bool|mixed|null
     */
    public function forceDelete(int $id)
    {
        return $this->model::onlyTrashed()
            ->where('id', $id)
            ->forceDelete();
    }

    /**
     * @param int $id
     * @return bool|null
     */
    public function restore(int $id)
    {
        return $this->model::onlyTrashed()
            ->where('id', $id)
            ->restore();
    }

    /**
     * @param Image $item
     * @return mixed
     */
    public function dissociateArtCollection(Image $item)
    {
        return $this->update($item, ['art_collection_id' => null]);
    }
}
