<?php

namespace App\Http\Controllers\API\Auth\Base;


use App\Services\Auth\AuthService;
use App\Services\User\ClientUserService;
use Tymon\JWTAuth\JWTAuth;

abstract class BaseLoginController extends BaseAuthController
{
    protected ClientUserService $userService;

    /**
     * BaseLoginController constructor.
     * @param JWTAuth $auth
     * @param AuthService $authService
     * @param ClientUserService $userService
     */
    public function __construct(
        JWTAuth $auth,
        AuthService $authService,
        ClientUserService $userService
    )
    {
        parent::__construct($auth, $authService);
        $this->userService = $userService;
    }
}
