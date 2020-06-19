<?php

namespace App\Http\Controllers\API\Cms\Collection\Requests;

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
        $id = $this->route('collection');

        return [
            'title' => 'bail|required|unique:collections,title,' . $id . '|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'alias' => 'bail|required|unique:collections,alias,' . $id . '|min:' . config('validation.alias.min') . '|max:' . config('validation.alias.max') . '|regex:' . config('validation.alias.pattern'),
            'max_print_width' => 'bail|integer|max:' . config('validation.images.max_print_width') . '|nullable',
            'image_description' => 'max:' . config('validation.description.max'),
            'topics' => 'bail|array|nullable',
            'interiors' => 'bail|array|nullable',
            'tags' => 'bail|array|nullable',
            'owner_id' => 'bail|integer|exists:owners,id|nullable',
            'publish' => 'bail|required|integer',
            'meta_title' => 'bail|max:' . config('validation.meta_title.max'),
            'description' => 'bail|max:' . config('validation.description.max'),
            'keywords' => 'max:' . config('validation.keywords.max')
        ];
    }
}
