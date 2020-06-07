<?php

namespace App\Http\Controllers\API\Cms\HomeModuleInterior;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\HomeModuleInterior\Requests\InteriorSlideStoreRequest;
use App\Http\Controllers\API\Cms\HomeModuleInterior\Requests\InteriorSlideUpdateRequest;
use App\Services\HomeModuleInterior\CmsHomeModuleInteriorSlideService;

class HomeModuleInteriorSlideController extends BaseResourceController
{
    public function __construct(CmsHomeModuleInteriorSlideService $service)
    {
        parent::__construct($service);
    }

    public function store(InteriorSlideStoreRequest $request)
    {
        return $this->service->store($request->all());
    }

    public function update(InteriorSlideUpdateRequest $request, int $id)
    {
        return $this->service->update($id, $request->all());
    }
}
