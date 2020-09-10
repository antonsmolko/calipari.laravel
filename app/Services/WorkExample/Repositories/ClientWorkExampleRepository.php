<?php


namespace App\Services\WorkExample\Repositories;


use App\Models\WorkExample;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\WorkExample\Resources\ForListClientCollection as FromListResourceCollection;

class ClientWorkExampleRepository extends ClientBaseResourceRepository
{
    /**
     * ClientWorkExampleRepository constructor.
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
        return new FromListResourceCollection($this->model::published()
            ->orderBy('date', 'desc')
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }
}
