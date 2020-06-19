<?php


namespace App\Services\Page\Repositories;


use App\Models\Page;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsPageRepository extends CmsBaseResourceRepository
{
    /**
     * CmsPageRepository constructor.
     * @param Page $model
     */
    public function __construct(Page $model)
    {
        $this->model = $model;
    }

//    /**
//     * @param string $alias
//     * @return mixed
//     */
//    public function getItemByAlias(string $alias)
//    {
//        return $this->model::where('alias', $alias)->firstOrFail();
//    }
}
