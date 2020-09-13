<?php

namespace App\Http\Controllers\API\Cms\ArtCollection\Requests;

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
            'title' => 'bail|required|unique:art_collections,title|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'alias' => 'bail|required|unique:art_collections,alias|min:' . config('validation.alias.min') . '|max:' . config('validation.alias.max') . '|regex:' . config('validation.alias.pattern'),
            'image_id' => [
                'bail',
                'integer',
                'required',
                'max:' . config('validation.images.max_id_number'),
                Rule::exists('images', 'id')
                    ->where(fn ($query) => $query->orWhere('art_collection_id', null)),
            ],
            'meta_title' => 'bail|max:' . config('validation.meta_title.max'),
            'description' => 'bail|max:' . config('validation.description.max'),
            'keywords' => 'max:' . config('validation.keywords.max')
        ];
    }
}
