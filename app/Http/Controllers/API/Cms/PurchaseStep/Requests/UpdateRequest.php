<?php

namespace App\Http\Controllers\API\Cms\PurchaseStep\Requests;

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
        $mimeTypes = implode(',', config('uploads.image_upload_rules.extensions'));

        return [
            'title' => 'bail|required|min:' . config('validation.long_title.min') . '|max:' . config('validation.long_title.max'),
            'image' => 'bail|file|image|mimes:' .  $mimeTypes . '|min:' . config('validation.upload.min_size.min') . '|max:' . config('validation.upload.max_size'),
            'description' => 'max:' . config('validation.text.max')
        ];
    }
}
