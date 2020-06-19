<?php

namespace App\Http\Controllers\API\Cms\HomeModuleInterior\Requests;

use App\Http\Requests\FormRequest;
use Illuminate\Validation\Rule;

class InteriorSlideStoreRequest extends FormRequest
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
            'image_id' => 'bail|required|integer|exists:images,id',
            'image' => 'required|file|image|mimes:' . config('validation.upload.mimes') . '|min:' . config('validation.upload.min_size') . '|max:' . config('validation.upload.max_size'),
        ];
    }
}
