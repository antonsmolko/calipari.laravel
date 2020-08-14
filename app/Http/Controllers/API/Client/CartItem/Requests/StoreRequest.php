<?php

namespace App\Http\Controllers\API\Client\CartItem\Requests;

use App\Http\Requests\FormRequest;

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
            'hash' => 'bail|required|integer',
            'image_id' => 'bail|required|integer|exists:images,id',
            'width_cm' => 'bail|required|integer|min:' . config('settings.order_min_size'),
            'height_cm' => 'bail|required|integer|min:' . config('settings.order_min_size'),
            'filter' => 'bail|required',
            'x' => 'bail|required|integer',
            'y' => 'bail|required|integer',
            'texture_id' => 'bail|required|integer|exists:textures,id'
        ];
    }
}
