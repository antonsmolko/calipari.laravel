<?php

namespace App\Http\Controllers\API\Cms\Owner\Requests;

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
        $id = $this->route('owner');

        return [
            'title' => 'bail|required|unique:owners,title,' . $id . '|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'description' => 'max:' . config('validation.description.max')
        ];
    }
}
