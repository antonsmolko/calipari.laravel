<?php


namespace App\Services\WorkExample\Repositories;


use App\Models\WorkExample;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\WorkExample\Resources\ForListCms as FromListResource;
use App\Services\WorkExample\Resources\ForListCmsCollection as FromListResourceCollection;
use App\Services\WorkExample\Resources\WorkExampleCms as WorkExampleResource;

class CmsWorkExampleRepository extends CmsBaseResourceRepository
{
    /**
     * CmsWorkExampleRepository constructor.
     * @param WorkExample $model
     */
    public function __construct(WorkExample $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $requestData
     * @return FromListResourceCollection
     */
    public function getItems(array $requestData)
    {
        return new FromListResourceCollection($this->model::when(!empty($requestData['query']),
                    fn ($query) => $query
                        ->where('image_id', 'like', $requestData['query'] . '%'))
                ->orderBy($requestData['sort_by'], $requestData['sort_order'])
                ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }

    /**
     * @param int $id
     * @return FromListResource|mixed
     */
    public function getResourceItem(int $id)
    {
        return new WorkExampleResource($this->model::findOrFail($id));
    }

    /**
     * @param $item
     * @param array $updateData
     * @return FromListResource|mixed
     */
    public function update($item, array $updateData)
    {
        $item->update($updateData);

        return $item;
    }
}
