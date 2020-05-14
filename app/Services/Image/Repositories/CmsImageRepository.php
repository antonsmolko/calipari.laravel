<?php


namespace App\Services\Image\Repositories;


use App\Models\Image;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use Illuminate\Contracts\Pagination\Paginator;
use App\Services\Image\Resources\ImageToEdit as ImageToEditResource;
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
    public function getItems(array $requestData)
    {
        return $this->model::with(config('query_builder.image'))
            ->when(!empty($requestData['query']),
                fn ($query) => $query->where('id', 'like', $requestData['query'] . '%'))
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']);
    }

//    /**
//     * @param array $pagination
//     * @return mixed
//     */
//    public function getQueryItems(array $pagination)
//    {
//        return $this->model::where('id', 'like', $pagination['query'] . '%')
//            ->with(config('query_builder.image'))
//            ->orderBy($pagination['sort_by'], $pagination['sort_order'])
//            ->paginate($pagination['per_page'], ['*'], '', $pagination['current_page']);
//    }

    /**
     * @param Image $item
     * @param string $relation
     * @param $syncData
     */
    public function syncAssociations(Image $item, string $relation, $syncData)
    {
        $item->$relation()->sync($syncData);
    }

    /**
     * @param Image $item
     * @param array $fillData
     */
    public function fillAttributesFromArray(Image $item, array $fillData)
    {
        $item->fill($fillData)->save();
    }

    /**
     * @param Image $item
     * @return mixed
     */
    public function removeOwner(Image $item)
    {
        $item->owner()->dissociate();

        return $item->save();
    }
}
