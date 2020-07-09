<?php

namespace App\Http\Controllers\API\Cms\SettingGroup;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\SettingGroup\Requests\CreateSettingGroupRequest;
use App\Http\Controllers\API\Cms\SettingGroup\Requests\UpdateSettingGroupRequest;
use App\Services\SettingGroup\CmsSettingGroupService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class SettingGroupController extends BaseResourceController
{
    /**
     * SettingGroupController constructor.
     * @param CmsSettingGroupService $service
     */
    public function __construct(CmsSettingGroupService $service)
    {
        parent::__construct($service);
    }

    /**
     * @return JsonResponse
     */
    public function getItemsWithSettings(): JsonResponse
    {
        return response()->json($this->service->getItemsWithSettings());
    }

    /**
     * @param CreateSettingGroupRequest $request
     * @return JsonResponse
     */
    public function store(CreateSettingGroupRequest $request): JsonResponse
    {
        if (!Auth::user()->hasRole(['super_admin', 'admin'])) {
            abort('403');
        }

        return response()->json($this->service->store($request->all()));
    }

    /**
     * @param UpdateSettingGroupRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(UpdateSettingGroupRequest $request, int $id): JsonResponse
    {
        if (!Auth::user()->hasRole(['super_admin', 'admin'])) {
            abort('403');
        }

        return response()->json($this->service->update($id, $request->all()));
    }

    /**
     * @param int $id
     * @return int
     * @throws \Exception
     */
    public function destroy(int $id): int {
        if (!Auth::user()->hasRole(['super_admin', 'admin'])) {
            abort('403');
        }

        return $this->service->destroy($id);
    }
}
