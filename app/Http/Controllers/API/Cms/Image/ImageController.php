<?php

namespace App\Http\Controllers\API\Cms\Image;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Image\Requests\DuplicateRequest;
use App\Http\Controllers\API\Cms\Image\Requests\UpdateRequest;
use App\Http\Requests\FormRequest;
use App\Services\Image\CmsImageService;
use Illuminate\Http\JsonResponse;

class ImageController extends BaseResourceController
{
    /**
     * @var CmsImageService
     */
    protected $service;

    /**
     * ImageController constructor.
     * @param CmsImageService $service
     */
    public function __construct(CmsImageService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        return response()->json($this->service->getItemToEdit($id));
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
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function getTrashedItems(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->getTrashedItems($request->all()));
    }

    /**
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function store(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->store($request->images));
    }

    /**
     * @param UpdateRequest $request
     * @param int $id
     * @return mixed|void
     */
    public function update(UpdateRequest $request, int $id)
    {
        return $this->service->update($id, $request->all());
    }

    /**
     * @param int $id
     * @return bool|null
     */
    public function forceDelete(int $id)
    {
        return $this->service->forceDelete($id);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function restore(int $id)
    {
        return $this->service->restore($id);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function dissociateOwner(int $id)
    {
        return $this->service->dissociateOwner($id);
    }

    /**
     * @param DuplicateRequest $request
     * @return JsonResponse
     */
    public function findDuplicates(DuplicateRequest $request): JsonResponse
    {
        return response()->json($this->service->findDuplicates($request->all()));
    }
}
