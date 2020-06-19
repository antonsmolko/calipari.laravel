<?php

namespace App\Http\Controllers\API\Cms\Image\Requests;

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
            'topics' => 'bail|array|nullable',
            'colors' => 'bail|array|nullable',
            'interiors' => 'bail|array|nullable',
            'tags' => 'bail|array|nullable',
            'owner_id' => 'bail|integer|exists:owners,id|nullable',
            'image' => 'bail|file|image|nullable|mimes:' . config('validation.upload.mimes') . '|min:' . config('validation.upload.min_size') . '|max:' . config('validation.upload.max_size'),
            'publish' => 'bail|integer',
            'max_print_width' => 'bail|integer|max:' . config('validation.images.max_print_width') . '|nullable',
            'description' => 'string|nullable|max:' . config('validation.description.max')
        ];
    }
}
