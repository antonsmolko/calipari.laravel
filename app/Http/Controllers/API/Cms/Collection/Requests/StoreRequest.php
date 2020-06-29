<?php

namespace App\Http\Controllers\API\Cms\Collection\Requests;

use App\Http\Requests\FormRequest;
use Illuminate\Validation\Rule;

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
            'title' => 'bail|required|unique:collections,title|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'alias' => 'bail|required|unique:collections,alias|min:' . config('validation.alias.min') . '|max:' . config('validation.alias.max') . '|regex:' . config('validation.alias.pattern'),
            'image_id' => [
                'bail',
                'integer',
                'nullable',
                'max:' . config('validation.images.max_id_number'),
                Rule::exists('images', 'id')
                    ->where('collection_id', null),
            ],
            'topics' => 'bail|array|nullable',
            'interiors' => 'bail|array|nullable',
            'tags' => 'bail|array|nullable',
            'owner_id' => 'bail|integer|exists:owners,id|nullable',
            'meta_title' => 'bail|max:' . config('validation.meta_title.max'),
            'description' => 'bail|max:' . config('validation.description.max'),
            'keywords' => 'max:' . config('validation.keywords.max')
        ];
    }
}
