<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\API\Auth\Base\BaseLoginController;
use App\Http\Controllers\API\Client\User\Requests\LoginRequest;
use App\Services\Auth\AuthService;
use App\Services\User\ClientUserService;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Tymon\JWTAuth\JWTAuth;


class LoginController extends BaseLoginController
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     */
    protected string $redirectTo = '';

    /**
     * @param LoginRequest $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
    public function login(LoginRequest $request)
    {
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return response()->json([
                'message' => trans('auth.locked_out'),
                'status' => 'danger'
            ], 403);
        }

        $this->incrementLoginAttempts($request);

        $token = $this->auth->attempt($request->only('email', 'password'));

        return $token
            ? response()
                ->json($this->authService->respondWithToken($request->user(), $token), 200)
                ->header('Authorization', $token)
            : response()->json([
                'message' => __('auth.wrong_login_pass'),
                'status' => 'danger'
            ], 401);
    }
}
