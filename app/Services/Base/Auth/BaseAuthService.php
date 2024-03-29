<?php


namespace App\Services\Base\Auth;


use App\Services\User\Repositories\ClientUserRepository;
use Tymon\JWTAuth\JWTAuth;

abstract class BaseAuthService
{
    protected JWTAuth $auth;
    protected ClientUserRepository $repository;
    public int $expiresIn;

    /**
     * BaseAuthService constructor.
     * @param JWTAuth $auth
     * @param ClientUserRepository $repository
     */
    public function __construct(JWTAuth $auth, ClientUserRepository $repository)
    {
        $this->auth = $auth;
        $this->repository = $repository;
        $this->expiresIn = auth()->factory()->getTTL() * 60;
    }
}
