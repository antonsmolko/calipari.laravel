<?php


namespace App\Http\Controllers\API\Cms\Sale;


use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Sale\Requests\CreateRequest;
use App\Http\Controllers\API\Cms\Sale\Requests\UpdateRequest;
use App\Http\Requests\FormRequest;
use App\Services\Sale\CmsSaleService;
use Illuminate\Http\JsonResponse;

class SaleController extends BaseResourceController
{
    /**
     * SaleController constructor.
     * @param CmsSaleService $service
     */
    public function __construct(CmsSaleService $service)
    {
        parent::__construct($service);
    }

    /**
     * @param CreateRequest $request
     * @return mixed
     */
    public function store(CreateRequest $request)
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
     * @return JsonResponse
     */
    public function getArticles(): JsonResponse
    {
        return response()->json($this->service->getArticles());
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getRestArticles(int $id): JsonResponse
    {
        return response()->json($this->service->getRestArticles($id));
    }

    /**
     * @param FormRequest $request
     * @param int $status
     * @return JsonResponse
     */
    public function getItemsByStatus(FormRequest $request, int $status): JsonResponse
    {
        return response()->json($this->service->getItemsByStatus($request->all(), $status));
    }

    /**
     * @param int $id
     * @param int $status
     * @return JsonResponse
     */
    public function changeStatus(int $id, int $status): JsonResponse
    {
        return response()->json($this->service->changeStatus($id, $status));
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getPdfLabel(int $id)
    {
        return $this->service->getPdfLabel($id);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getPdfLayout(int $id)
    {
        return $this->service->getPdfLayout($id);
    }
}
