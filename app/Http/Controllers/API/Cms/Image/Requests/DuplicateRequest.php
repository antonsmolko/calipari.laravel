<?php

namespace App\Http\Controllers\API\Cms\Image\Requests;

use App\Http\Requests\FormRequest;

class DuplicateRequest extends FormRequest
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
            'category_id' => 'bail|integer|nullable',
            'image' => 'bail|file|image|nullable|mimes:' . config('validation.upload.mimes') . '|min:' . config('validation.upload.min_size') . '|max:' . config('validation.upload.max_size'),
            'difference' => 'bail|integer|required'
        ];
    }
}
