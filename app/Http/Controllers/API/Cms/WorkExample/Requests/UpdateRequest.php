<?php

namespace App\Http\Controllers\API\Cms\WorkExample\Requests;

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
            'title' => 'bail|required|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'date' => 'bail|required|integer',
            'image' => 'bail|file|image|mimes:jpeg,png|min:' . config('validation.upload.min_size.min') . '|max:' . config('validation.upload.max_size'),
            'image_id' => 'bail|required|integer|exists:images,id|unique:work_examples,image_id,' . $id
        ];
    }
}
