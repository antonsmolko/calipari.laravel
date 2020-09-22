<?php

namespace App\Http\Controllers\API\Client\Mail\Requests;


use App\Http\Requests\FormRequest;

class FeedbackFormRequest extends FormRequest
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
            'page' => 'bail|required|string|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'name' => 'bail|required|string|min:' . config('validation.name.min') . '|max:' . config('validation.name.max'),
            'phone' => 'bail|required|string|regex:' . config('validation.phone.pattern'),
            'message' => 'required|string|min:' . config('validation.message.min') . '|max:' . config('validation.message.max')
        ];
    }
}
