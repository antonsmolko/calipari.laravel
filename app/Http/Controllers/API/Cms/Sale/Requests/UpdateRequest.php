<?php

namespace App\Http\Controllers\API\Cms\Sale\Requests;

use App\Http\Requests\FormRequest;

class UpdateRequest extends FormRequest
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
            'image_id' => 'bail|nullable|exists:images,id',
            'image' => 'bail|file|image|mimes:' . config('validation.upload.mimes') . '|min:' . config('validation.upload.min_size') . '|max:' . config('validation.upload.max_size'),
            'width_cm' => 'bail|required|integer|min:' . config('settings.order_min_size'),
            'height_cm' => 'bail|required|integer|min:' . config('settings.order_min_size'),
            'texture_id' => 'bail|required|integer|exists:textures,id',
            'description' => 'bail|max:' . config('validation.description.max'),
            'discount' => 'bail|required|integer|between:0,100',
            'publish' => 'required|integer',
        ];
    }
}
