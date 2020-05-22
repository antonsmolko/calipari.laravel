<?php

namespace App\Http\Controllers\API\Cms\Page\Requests;

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
        $id = $this->route('id');

        return [
            'title' => 'bail|required|unique:pages,title,' . $id . '|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'long_title' => 'bail|nullable|min:' . config('validation.long_title.min') . '|max:' . config('validation.long_title.max'),
            'image' => 'bail|nullable|file|image|mimes:' . config('validation.upload.mimes') . '|min:' . config('validation.upload.min_size') . '|max:' . config('validation.upload.max_size'),
            'image_to_delete' => 'bail|nullable|boolean',
            'intro' => 'bail|nullable|max:' . config('validation.description.max'),
            'description' => 'bail|nullable|max:' . config('validation.description.max'),
            'keywords' => 'nullable|max:' . config('validation.keywords.max')
        ];
    }
}
