<?php

namespace App\Http\Controllers\API\Auth;

use App\Events\Auth\Registered;
use App\Http\Controllers\API\Auth\ResponseUserStatus\SocialLoginResponseUserStatusStrategy;
use App\Http\Controllers\API\Auth\Base\BaseLoginController;
use App\Http\Controllers\API\Client\User\Requests\SocialRequest;
use App\Models\User;
use App\Services\Auth\AuthService;
use App\Services\User\ClientUserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\JWTAuth;

class SocialLoginController extends BaseLoginController
{
    use SocialLoginResponseUserStatusStrategy;

    /**
     * SocialLoginController constructor.
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
        parent::__construct($auth, $authService, $userService);
        $this->middleware('social');
    }

    /**
     * @param $service
     * @return mixed
     */
    public function redirect($service)
    {
        return Socialite::driver($service)->stateless()->redirect();
    }

    /**
     * @param string $service
     * @param SocialRequest $request
     * @return JsonResponse
     */
    public function register(string $service, SocialRequest $request): JsonResponse
    {
        /** @var User $user */
        $user = $this->userService->storeWithSocial($request->all(), $service);
        $this->authService->createEmailConfirmation($user, $user->email);
        event(new Registered($user));

        return response()->json($this->authService->getMessageByEmailConfirmation($user->email), 200);
    }

    /**
     * @param $service
     * @return JsonResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function callback($service)
    {
        try {
            $serviceUser = Socialite::driver($service)->stateless()->user();
        } catch (\Exception $e) {

            return redirect(env('CLIENT_BASE_URL')
                . '/social-callback?'
                . 'status=danger'
                . '&message=' .trans('auth.unable_using_service', ['service' => Str::title($service)])
                . '&origin=login');
        }

        if ($user = $this->userService->getUserBySocialId($serviceUser->getId())) {
            return $this->getStatusResponse($user);
        }

        if ($user = $this->userService->getUserByEmail($serviceUser->getEmail())) {
            $this->userService->storeUserSocial($user, $serviceUser->getId(), $service);

            return $this->getStatusResponse($user);
        }

        return redirect(env('CLIENT_BASE_URL')
            . '/social-callback?'
            . 'name=' . ($serviceUser->getName() ? $serviceUser->getName() : '')
            . '&email=' . ($serviceUser->getEmail() ? $serviceUser->getEmail() : '')
            . '&social_id=' . $serviceUser->getId()
            . '&service=' . $service
        );
    }

    /**
     * @param User $user
     * @return JsonResponse|\Illuminate\Http\RedirectResponse
     */
    private function getStatusResponse(User $user)
    {
        return $this->getUserStatusResponse(
            $user,
            $this->auth->fromUser($user),
            $this->expiresIn);
    }
}
