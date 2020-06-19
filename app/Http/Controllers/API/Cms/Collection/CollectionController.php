<?php

namespace App\Http\Controllers\API\Cms\Collection;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Collection\Requests\MainImageRequest;
use App\Http\Controllers\API\Cms\Collection\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\Collection\Requests\UpdateRequest;
use App\Http\Requests\FormRequest;
use App\Services\Collection\CmsCollectionService;

class CollectionController extends BaseResourceController
{
    /**
     * CollectionController constructor.
     * @param CmsCollectionService $service
     */
    public function __construct(CmsCollectionService $service)
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function getImages(int $id)
    {
        return response()->json($this->service->getImages($id));
    }

    public function upload(FormRequest $request, int $id)
    {
        return $this->service->upload($id, $request->images);
    }

    /**
     * @param MainImageRequest $request
     * @param int $id
     * @return mixed
     */
    public function setMainImage(MainImageRequest $request, int $id)
    {
        return $this->service->setMainImage($id, $request->image_id);
    }
}
