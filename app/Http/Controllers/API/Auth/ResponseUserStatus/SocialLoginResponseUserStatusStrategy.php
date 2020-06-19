<?php

namespace App\Http\Controllers\API\Auth\ResponseUserStatus;

trait SocialLoginResponseUserStatusStrategy
{
    use ResponseUserStatusStrategy;

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function getLockedOut()
    {
        return redirect(env('CLIENT_BASE_URL')
            . '/social-callback?'
            . 'origin=login'
            . '&no_verified=true'
            . '&status=danger'
            . '&message=' . trans('auth.locked_out'));
    }

    /**
     * @param string $email
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function getNotConfirmed(string $email)
    {
        return redirect(env('CLIENT_BASE_URL')
            . '/social-callback?'
            . 'origin=login'
            . '&no_verified=true'
            . '&status=primary'
            . '&message=' . trans('auth.send_activation_code', ['email' => $email]));
    }

    /**
     * @param string $name
     * @param string $token
     * @param int $expiresIn
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function getAllRights(string $name, string $token, int $expiresIn)
    {
        return redirect(env('CLIENT_BASE_URL')
            . '/social-callback?'
            . 'origin=login'
            . '&status=success'
            . '&message=' . trans('auth.welcome_message', ['name' => $name])
            . '&access_token=' . $token
            . '&token_type=bearer'
            . '&expires_in=' . $expiresIn);
    }
}
