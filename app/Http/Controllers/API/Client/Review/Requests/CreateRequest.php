<?php

namespace App\Http\Controllers\API\Client\Review\Requests;

use App\Http\Requests\FormRequest;

class CreateRequest extends FormRequest
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
            'hash' => 'bail|required|string',
            'comment' => 'bail|required|max:' . config('validation.text.max'),
            'quality_rate' => 'bail|integer|between:1,5',
            'service_rate' => 'bail|integer|between:1,5'
        ];
    }
}
