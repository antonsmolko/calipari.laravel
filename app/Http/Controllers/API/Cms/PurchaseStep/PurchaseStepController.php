<?php

namespace App\Http\Controllers\API\Cms\PurchaseStep;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\PurchaseStep\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\PurchaseStep\Requests\UpdateRequest;
use App\Services\PurchaseStep\CmsPurchaseStepService;

class PurchaseStepController extends BaseResourceController
{
    /**
     * PurchaseStepController constructor.
     * @param CmsPurchaseStepService $service
     */
    public function __construct(CmsPurchaseStepService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param StoreRequest $request
     * @return mixed
     */
    public function store(StoreRequest $request)
    {
        return $this->service->store($request->all());
    }

    /**
     * @param int $id
     * @param UpdateRequest $request
     * @return mixed
     */
    public function update(int $id, UpdateRequest $request)
    {
        return $this->service->update($id, $request->all());
    }
}
