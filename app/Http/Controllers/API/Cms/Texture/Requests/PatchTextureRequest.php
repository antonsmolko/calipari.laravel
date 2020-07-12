<?php

namespace App\Http\Controllers\API\Cms\Texture\Requests;

use App\Http\Requests\FormRequest;

class PatchTextureRequest extends FormRequest
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
            'name' => 'bail|unique:textures,name|min:' . config('validation.name.min') . '|max:' . config('validation.name.max'),
            'price' => 'bail|integer',
            'width' => 'bail|integer',
            'order' => 'bail|integer|required',
            'description' => 'max:' . config('validation.text.max'),
        ];
    }
}
