<?php

namespace App\Http\Controllers\API\Cms\WorkExample;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\WorkExample\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\WorkExample\Requests\UpdateRequest;
use App\Http\Requests\FormRequest;
use App\Services\WorkExample\CmsWorkExampleService;
use Illuminate\Http\JsonResponse;

class WorkExampleController extends BaseResourceController
{
    public function __construct(CmsWorkExampleService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function getItems(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->getItems($request->all()));
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

    /**
     * @param FormRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function upload(FormRequest $request, int $id): JsonResponse
    {
        return response()->json($this->service->upload($id, $request->images));
    }

    /**
     * @param int $id
     * @param int $imageIndex
     * @return JsonResponse
     */
    public function deleteImage(int $id, int $imageIndex): JsonResponse
    {
        return response()->json($this->service->deleteImage($id, $imageIndex));
    }
}
