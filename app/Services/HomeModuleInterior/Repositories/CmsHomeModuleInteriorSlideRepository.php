<?php


namespace App\Services\HomeModuleInterior\Repositories;


use App\Models\HomeModuleInteriorSlide;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsHomeModuleInteriorSlideRepository extends CmsBaseResourceRepository
{
    public function __construct(HomeModuleInteriorSlide $model)
    {
        $this->model = $model;
    }

    /**
     * @param int $interiorId
     * @return int
     */
    public function getNextOrderNumber(int $interiorId): int
    {
        $lastOrderNumberItem = $this->model::where('interior_id', $interiorId)
            ->orderBy('order', 'desc')->first();

        return $lastOrderNumberItem ? $lastOrderNumberItem->order + 1 : 1;
    }
}
