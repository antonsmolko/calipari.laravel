<?php

namespace App\Http\Controllers\API\Auth\ResponseUserStatus;

trait LoginJsonResponseUserStatusStrategy
{
    use ResponseUserStatusStrategy;

    public function getLockedOut()
    {
        return response()->json([
            'message' => trans('auth.locked_out'),
            'status' => 'danger'
        ], 403);
    }

    public function getNotConfirmed($email)
    {
        return response()->json([
            'message' => trans('auth.send_activation_code', ['email' => $email]),
            'status' => 'warning'
        ], 401);
    }

    public function getAllRights($name, $token)
    {
        return response()->json([
            'message' => trans('auth.welcome_message', ['name' => $name]),
            'status' => 'success',
            'token' => $token
        ], 200);
    }
}
