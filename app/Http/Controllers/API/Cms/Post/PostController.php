<?php

namespace App\Http\Controllers\API\Cms\Post;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Post\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\Post\Requests\UpdateRequest;
use App\Http\Requests\FormRequest;
use App\Services\Post\CmsPostService;
use Illuminate\Http\JsonResponse;

class PostController extends BaseResourceController
{
    /**
     * PostController constructor.
     * @param CmsPostService $service
     */
    public function __construct(CmsPostService $service)
    {
        parent::__construct($service);
    }

    /**
     * @return JsonResponse
     */
    public function getItems(): JsonResponse
    {
        return response()->json($this->service->getItems());
    }

    /**
     * @param FormRequest $request
     * @param string $type
     * @return JsonResponse
     */
    public function getItemsByType(FormRequest $request, string $type): JsonResponse
    {
        return response()->json($this->service->getItemsByType($type, $request->all()));
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
