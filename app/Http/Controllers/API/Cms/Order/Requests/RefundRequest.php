<?php

namespace App\Http\Controllers\API\Cms\Order\Requests;

use App\Http\Requests\FormRequest;
use Illuminate\Support\Facades\Auth;

class RefundRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole([
            config('settings.super_admin_role_name'),
            config('settings.owner_role_name')
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'payment_id' => 'bail|required|string',
            'refund_amount' => 'bail|required|integer',
            'refund_reason' => 'string|nullable'
        ];
    }
}
