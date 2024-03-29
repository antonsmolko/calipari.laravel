<?php


namespace App\Http\Controllers\API\Auth\ResponseUserStatus;


use App\Events\Auth\Registered;
use App\Models\User;

trait ResponseUserStatusStrategy
{
    /**
     * Determines which message to return to the user.
     *
     * @param User $user
     * @param $token
     * @param int $expiresIn
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
    public function getUserStatusResponse(User $user, $token, int $expiresIn)
    {
        if (!$user->isActive()) {
            return $this->getLockedOut();

        } else if (!$user->isConfirmed()) {
            $this->authService->createEmailConfirmation($user, $user->email);

            return $this->getNotConfirmed($user->email);
        }

        event(new Registered($user));

        return $this->getAllRights($user->name, $token, $expiresIn);
    }

    /**
     * Notifies that the user is blocked.
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    abstract public function getLockedOut();

    /**
     * Notifies that the user is not verified.
     *
     * @param string $email
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    abstract public function getNotConfirmed($email);

    /**
     * Notifies that the user is auth.
     *
     * @param string $name
     * @param string $token
     * @param int $expiresIn
     * @return mixed
     */
    abstract public function getAllRights(string $name, string $token, int $expiresIn);
}
