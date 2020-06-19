<?php

namespace App\Http\Controllers\API\Cms\Post\Requests;

use App\Http\Requests\FormRequest;
use App\Models\Post;
use Illuminate\Validation\Rule;

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
            'title' => 'bail|required|string|min:' . config('validation.title.min'),
            'alias' => 'bail|required|unique:categories,alias,' . $id . '|min:' . config('validation.alias.min') . '|max:' . config('validation.alias.max') . '|regex:' . config('validation.alias.pattern'),
            'date' => 'bail|required|integer',
            'intro' => 'bail|nullable|string',
            'image' => 'bail|nullable|file|image|mimes:jpeg,png|min:' . config('validation.upload.min_size.min') . '|max:' . config('validation.upload.max_size'),
            'content' => 'bail|nullable|string',
            'type' => [
                'required',
                'string',
                Rule::in(Post::TYPES),
            ],
            'meta_title' => 'bail|string|nullable|max:' . config('validation.meta_title.max'),
            'description' => 'bail|string|nullable|max:' . config('validation.description.max'),
            'keywords' => 'string|nullable|max:' . config('validation.keywords.max')
        ];
    }
}
