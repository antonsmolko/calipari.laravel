<?php

namespace App\Http\Controllers\API\Cms\ArtCollection;

use App\Http\Controllers\API\Cms\ArtCollection\Requests\StoreRequest;
use App\Http\Controllers\API\Cms\ArtCollection\Requests\UpdateRequest;
use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Requests\FormRequest;
use App\Services\ArtCollection\CmsArtCollectionService;
use Illuminate\Http\JsonResponse;

class ArtCollectionController extends BaseResourceController
{
    /**
     * ArtCollectionController constructor.
     * @param CmsArtCollectionService $service
     */
    public function __construct(CmsArtCollectionService $service)
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

    /**
     * @param FormRequest $request
     * @param int $id
     */
    public function addImages(FormRequest $request, int $id)
    {
        $this->service->addImages($id, $request->all());
    }

    /**
     * @param int $collectionId
     * @param int $imageId
     * @return int
     */
    public function removeImage(int $collectionId, int $imageId): int
    {
        return $this->service->removeImage($collectionId, $imageId);
    }

    /**
     * @param FormRequest $request
     * @return JsonResponse
     */
    public function getExcludedImages(FormRequest $request): JsonResponse
    {
        return response()->json($this->service->getExcludedImages($request->all()));
    }
}
