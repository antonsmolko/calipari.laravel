<?php


namespace App\Services\Auth;


use App\Events\Auth\ChangeEmail;
use App\Events\Auth\Registered;
use App\Models\User;
use App\Services\Base\Auth\BaseAuthService;
use App\Services\User\Resources\UserClient as UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthService extends BaseAuthService
{
    /**
     * @param Request $request
     * @return array|void
     */
    public function me(Request $request)
    {
        $user = $request->user();

        if ($user && $user->isActive() && $user->isConfirmed()) {
            return [
                'status' => 'success',
                'data' => new UserResource(auth()->user())
            ];
        }
    }

    public function logout()
    {
        $this->auth->invalidate();
    }

    /**
     * @return \Exception|JsonResponse
     */
    public function refresh()
    {
        try {
            $token = auth()->refresh(true, true);
        } catch (\Exception $e) {
            return $e;
        }

        return $this->respondWithRefreshToken($token);
    }

    /**
     * @param string $token
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function emailConfirm(string $token)
    {
        $user = $this->repository->getEmailConfirmation($token);

        if (!$user)
            return redirect(env('CLIENT_BASE_URL')
                . '/login'
                . '?message=' . __('auth.invalid_token')
                . '&status=danger');

        if ($this->repository->emailConfirm($user)) {
            $message = __('auth.email_verified');
            event(new ChangeEmail($user));
        } else {
            $message = __('auth.email_already_verified');
        }

        return redirect(env('CLIENT_BASE_URL')
            . '/login'
            . '?message=' . $message
            . '&status=success');
    }

    /**
     * @param \Illuminate\Contracts\Auth\Authenticatable|User $user
     * @param string $email
     */
    public function createEmailConfirmation($user, string $email)
    {
        $this->repository->setConfirmToken($user, $email);
        $user->sendEmailConfirmationNotification();
    }

    /**
     * @param \Illuminate\Contracts\Auth\Authenticatable|User $user
     * @param string $email
     */
    public function createWelcomeEmailConfirmation($user, string $email)
    {
        $this->repository->setConfirmToken($user, $email);
        $user->sendWelcomeNotification();
    }

    /**
     * @param \Illuminate\Contracts\Auth\Authenticatable|User $user
     * @param string $email
     */
    public function createNewEmailConfirmation($user, string $email)
    {
        $this->repository->setConfirmToken($user, $email);
        $user->sendNewEmailConfirmationNotification();
    }

    /**
     * @param string $email
     * @return array
     */
    public function getMessageByEmailConfirmation(string $email): array
    {
        return [
            'message' => __('auth.send_activation_code', ['email' => $email]),
            'status' => 'primary'
        ];
    }

    /**
     * @param User $user
     * @param string $token
     * @return array
     */
    public function respondWithToken(User $user, string $token): array
    {
        event(new Registered($user));

        return [
            'message' => __('auth.welcome_message', ['name' => $user->name]),
            'status' => 'success',
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->expiresIn
        ];
    }

    /**
     * @param string $token
     * @return JsonResponse
     */
    public function respondWithRefreshToken(string $token): JsonResponse
    {
        return response()
            ->json([
                'status' => 'success',
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => $this->expiresIn
            ], 200)
            ->header('Authorization', $token);
    }
}
