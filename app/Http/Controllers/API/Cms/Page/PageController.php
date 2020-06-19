<?php

namespace App\Http\Controllers\API\Cms\Page;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Page\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\Page\Requests\UpdateRequest;
use App\Services\Page\CmsPageService;

class PageController extends BaseResourceController
{
    /**
     * PageController constructor.
     * @param CmsPageService $service
     */
    public function __construct(CmsPageService $service)
    {
        parent::__construct($service);
    }

//    /**
//     * @param StoreRequest $request
//     * @return mixed
//     */
//    public function store(StoreRequest $request)
//    {
//        return $this->service->store($request->all());
//    }

    /**
     * @param UpdateRequest $request
     * @param int $id
     * @return mixed
     */
    public function update(UpdateRequest $request, int $id)
    {
        return $this->service->update($id, $request->all());
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function deleteImage(int $id)
    {
        return response()->json($this->service->deleteImage($id));
    }
}
