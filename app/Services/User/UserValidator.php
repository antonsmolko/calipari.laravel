<?php declare(strict_types=1);


namespace App\Services\User;


use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserValidator
{
    /**
     * @var User|null
     */
    private $user;

    /**
     * @var JsonResponse|null
     */
    private $statusResponse = null;

    private bool $isValid = true;

    /**
     * @param Request $request
     * @return bool
     */
    public function validateRequest(Request $request) {
        $this->isAuth($request);
        $this->isActive();
        $this->isConfirmed();

        return $this->isValid();
    }

    /**
     * @param Request $request
     */
    private function isAuth(Request $request)
    {
        $credentials = $request->only('email', 'password');

        auth()->attempt($credentials);

        $this->user = $request->user();

        $this->user
            ? $this->handleSuccess()
            : $this->handleFailAuthResponse();
    }

    private function isActive()
    {
        if (! $this->isValid) {
            return;
        }

        $this->user->publish
            ? $this->handleSuccess()
            : $this->handleFailActiveResponse();
    }

    private function isConfirmed()
    {
        if (! $this->isValid) {
            return;
        }

        $this->user->confirmed
            ? $this->handleSuccess()
            : $this->handleFailConfirmedResponse();
    }

    private function handleFailAuthResponse()
    {
        $this->statusResponse = response()->json([
            'message' => __('auth.wrong_login_pass'),
            'status' => 'danger'
        ], 401);

        $this->isValid = false;
    }

    private function handleFailActiveResponse()
    {
        $this->statusResponse = response()->json([
            'message' => __('auth.locked_out'),
            'status' => 'danger'
        ], 403);

        $this->isValid = false;
    }

    private function handleFailConfirmedResponse()
    {
        $this->user->sendEmailConfirmationNotification();

        $this->statusResponse = response()->json([
            'message' => __('auth.send_activation_code', ['email' => $this->user->email]),
            'status' => 'warning'
        ], 401);

        $this->isValid = false;
    }

    private function handleSuccess()
    {
        $this->isValid = true;
    }

    /**
     * @return bool
     */
    private function isValid(): bool
    {
        return $this->isValid;
    }

    /**
     * @return JsonResponse|null
     */
    public function getStatus()
    {
        return $this->statusResponse ?? response()->json([
                'message' => __('auth.wrong_auth'),
                'status' => 'danger'
            ], 401);
    }
}
