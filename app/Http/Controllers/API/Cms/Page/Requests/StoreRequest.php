<?php

namespace App\Http\Controllers\API\Cms\Page\Requests;

use App\Http\Requests\FormRequest;

class StoreRequest extends FormRequest
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
            'title' => 'bail|required|string|unique:pages,title|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'long_title' => 'bail|string|nullable|min:' . config('validation.long_title.min') . '|max:' . config('validation.long_title.max'),
            'image' => 'bail|file|image|nullable|mimes:' . config('validation.upload.mimes') . '|min:' . config('validation.upload.min_size') . '|max:' . config('validation.upload.max_size'),
            'intro' => 'bail|string|nullable|max:' . config('validation.description.max'),
            'description' => 'bail|string|nullable|max:' . config('validation.description.max'),
            'keywords' => 'string|nullable|max:' . config('validation.keywords.max')
        ];
    }
}
