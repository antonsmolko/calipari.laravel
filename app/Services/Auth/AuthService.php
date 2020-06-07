<?php


namespace App\Services\Auth;


use App\Models\User;
use App\Services\Base\Auth\BaseAuthService;
use App\Services\User\Resources\User as UserResource;
use Illuminate\Http\Request;

class AuthService extends BaseAuthService
{
    /**
     * @param Request $request
     * @return UserResource
     */
    public function index(Request $request)
    {
        $user = $request->user();

        if ($user && $user->isActive() && $user->isConfirmed()) {
            return new UserResource($request->user());
        }
//        $this->logout();
    }

    public function logout()
    {
        $this->auth->invalidate();
    }

    /**
     * @return array
     */
    public function refresh(): array
    {
        return $this->respondWithRefreshToken(auth()->refresh());
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

        $message = $this->repository->emailConfirm($user)
            ? __('auth.email_verified')
            : __('auth.email_already_verified');

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
     * @param $user
     * @param string $token
     * @return array
     */
    public function respondWithToken($user, string $token): array
    {
        return [
            'message' => __('auth.welcome_message', ['name' => $user->name]),
            'status' => 'success',
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->auth->factory()->getTTL() * 60
        ];
    }

    /**
     * @param string $token
     * @return array
     */
    public function respondWithRefreshToken(string $token)
    {
        return [
            'refresh_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->auth->factory()->getTTL() * 60
        ];
    }
}
