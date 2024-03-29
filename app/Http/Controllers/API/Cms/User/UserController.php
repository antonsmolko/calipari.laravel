<?php

namespace App\Http\Controllers\API\Cms\User;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\User\Requests\CreateRequest;
use App\Http\Controllers\API\Cms\User\Requests\UpdateRequest;
use App\Http\Requests\FormRequest;
use App\Services\User\CmsUserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class UserController extends BaseResourceController
{
    /**
     * UserController constructor.
     * @param CmsUserService $service
     */
    public function __construct(CmsUserService $service)
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
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        return response()->json($this->service->getItemWithRole($id));
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
     * @param int $id
     * @return int
     * @throws \Exception
     */
    public function destroy(int $id): int {
        if (!Auth::user()->hasRole(['super_admin', 'owner'])) {
            abort('403');
        }

        return $this->service->destroy($id);
    }
}
