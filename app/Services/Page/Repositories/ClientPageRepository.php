<?php


namespace App\Services\Page\Repositories;


use App\Models\Page;
use App\Services\Base\Resource\Repositories\ClientBaseResourceRepository;
use App\Services\Page\Resources\FromClient as PageResource;

class ClientPageRepository extends ClientBaseResourceRepository
{
    /**
     * ClientPageRepository constructor.
     * @param Page $model
     */
    public function __construct(Page $model)
    {
        $this->model = $model;
    }

    /**
     * @param string $alias
     * @return mixed
     */
    public function getItemByAlias(string $alias)
    {
        return new PageResource($this->model::where('alias', $alias)->firstOrFail());
    }
}
