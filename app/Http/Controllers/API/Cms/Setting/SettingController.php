<?php

namespace App\Http\Controllers\API\Cms\Setting;

use App\Http\Controllers\API\Cms\Base\BaseResourceController;
use App\Http\Controllers\API\Cms\Setting\Requests\CreateSettingRequest;
use App\Http\Controllers\API\Cms\Setting\Requests\SetImageSettingValueRequest;
use App\Http\Controllers\API\Cms\Setting\Requests\SetTextSettingValueRequest;
use App\Http\Controllers\API\Cms\Setting\Requests\UpdateSettingRequest;
use App\Services\Setting\CmsSettingService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingController extends BaseResourceController
{
    /**
     * SettingController constructor.
     * @param CmsSettingService $service
     */
    public function __construct(CmsSettingService $service)
    {
        parent::__construct($service);
    }

    /**
     * @return JsonResponse
     */
    public function getItemsWithTypes(): JsonResponse
    {
        return response()->json($this->service->getItemsWithTypes());
    }

    /**
     * @return JsonResponse
     */
    public function getItemsWithGroup(): JsonResponse
    {
        return response()->json($this->service->getItemsWithGroup());
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getItemEntriesByGroups(Request $request): JsonResponse
    {
        return response()->json($this->service->getItemEntriesByGroups($request->groups));
    }

    /**
     * @param CreateSettingRequest $request
     * @return JsonResponse
     */
    public function store(CreateSettingRequest $request): JsonResponse
    {
        if (!Auth::user()->hasRole(['super_admin', 'admin'])) {
            abort('403');
        }

        return response()->json($this->service->store($request->all()));
    }

    /**
     * @param UpdateSettingRequest $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(UpdateSettingRequest $request, int $id): JsonResponse
    {
        if (!Auth::user()->hasRole(['super_admin', 'admin'])) {
            abort('403');
        }

        return response()->json($this->service->update($id, $request->all()));
    }

    /**
     * @param SetTextSettingValueRequest $request
     */
    public function setTextValue(SetTextSettingValueRequest $request)
    {
        $this->service->setTextValue($request->all());
    }

    /**
     * @param SetImageSettingValueRequest $request
     */
    public function setImageValue(SetImageSettingValueRequest $request)
    {
        $this->service->setImageValue($request->all());
    }

    /**
     * @return JsonResponse
     */
    public function getEntries(): JsonResponse
    {
        return response()->json($this->service->getEntries());
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
