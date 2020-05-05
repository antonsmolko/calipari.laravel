<?php

namespace App\Http\Controllers\API\Client\Image\Requests;

use App\Http\Requests\FormRequest;

class GetRequest extends FormRequest
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
            'filter' => 'bail|array',
            'pagination' => 'required|array'
        ];
    }
}
