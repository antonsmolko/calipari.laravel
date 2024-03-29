<?php

namespace App\Http\Controllers\API\Cms\Texture\Requests;

use App\Http\Requests\FormRequest;

class CreateTextureRequest extends FormRequest
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
            'name' => 'bail|required|unique:textures,name|min:' . config('validation.name.min') . '|max:' . config('validation.name.max'),
            'price' => 'bail|required|integer',
            'seamless' => 'bail|nullable|integer',
            'width' => 'bail|required_without:seamless|integer|nullable',
            'sample' => 'bail|required|file|image|mimes:jpeg,png|min:' . config('validation.upload.min_size.min') . '|max:' . config('validation.upload.max_size'),
            'order' => 'bail|integer|required',
            'background' => 'bail|required|file|image|mimes:jpeg,png|min:' . config('validation.upload.min_size.min') . '|max:' . config('validation.upload.max_size'),
            'description' => 'required|string|max:' . config('validation.text.max'),
        ];
    }
}
