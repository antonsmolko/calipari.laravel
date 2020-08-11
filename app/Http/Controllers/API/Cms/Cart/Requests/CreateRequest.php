<?php

namespace App\Http\Controllers\API\Cms\Cart\Requests;

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
            'id' => 'bail|required|integer',
            'email' => 'bail|required|email|max:' . config('validation.email.max',''),
            'name' => 'bail|string|max:' . config('validation.name.max',''),
            'image_id' => 'bail|required|integer|exists:images,id',
            'width_cm' => 'bail|required|integer',
            'height_cm' => 'bail|required|integer',
            'image_path' => 'bail|required|string',
            'texture_id' => 'bail|required|integer|exists:textures,id',
            'added_costs' => 'JSON|nullable'
        ];
    }
}
