<?php


namespace App\Services\PurchaseStep\Repositories;

use App\Models\PurchaseStep;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsPurchaseStepRepository extends CmsBaseResourceRepository
{
    /**
     * CmsPurchaseStepRepository constructor.
     * @param PurchaseStep $model
     */
    public function __construct(PurchaseStep $model)
    {
        $this->model = $model;
    }
}
