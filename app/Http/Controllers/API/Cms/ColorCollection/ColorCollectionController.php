<?php

namespace App\Http\Controllers\API\Cms\ColorCollection;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\ColorCollection\Requests\MainImageRequest;
use App\Http\Controllers\API\Cms\ColorCollection\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\ColorCollection\Requests\UpdateRequest;
use App\Http\Requests\FormRequest;
use App\Services\ColorCollection\CmsColorCollectionService;

class ColorCollectionController extends BaseResourceController
{
    /**
     * ColorCollectionController constructor.
     * @param CmsColorCollectionService $service
     */
    public function __construct(CmsColorCollectionService $service)
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
