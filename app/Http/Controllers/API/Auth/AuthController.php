<?php

namespace App\Http\Controllers\API\Auth;


use App\Http\Controllers\API\Auth\Base\BaseAuthController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


class AuthController extends BaseAuthController
{
//    /**
//     * @return JsonResponse
//     */
//    public function me(): JsonResponse
//    {
//        return response()->json($this->authService->me());
//    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function me(Request $request): JsonResponse
    {
        return response()->json($this->authService->me($request));
    }

    public function logout()
    {
        $this->authService->logout();
    }

    /**
     * @param string $token
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function emailConfirm(string $token)
    {
        return $this->authService->emailConfirm($token);
    }

    /**
     * @return \Exception|JsonResponse
     */
    public function refresh()
    {
        return $this->authService->refresh();
    }
}
