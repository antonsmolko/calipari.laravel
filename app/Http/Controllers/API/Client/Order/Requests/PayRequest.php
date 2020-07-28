<?php

namespace App\Http\Controllers\API\Client\Order\Requests;

use App\Http\Requests\FormRequest;

class PayRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'hash' => 'bail|required|string|',
            'paymentMethodId' => 'string|nullable'
        ];
    }
}
