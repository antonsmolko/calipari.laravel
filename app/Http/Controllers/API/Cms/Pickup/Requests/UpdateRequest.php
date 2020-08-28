<?php

namespace App\Http\Controllers\API\Cms\Pickup\Requests;

use App\Http\Requests\FormRequest;
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
        $id = $this->route('pickup');

        return [
            'delivery_id' => [
                'required',
                Rule::exists('deliveries', 'id')
                    ->where(fn ($query) => $query->where('pickup', 1)),
            ],
            'title' => 'bail|required|string|unique:pickups,title,' . $id . '|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'locality' => 'bail|required|string|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'address' => 'bail|required|string|min:' . config('validation.title.min') . '|max:' . config('validation.title.max'),
            'description' => 'nullable|max:' . config('validation.description.max'),
            'publish' => 'bail|required|integer',
        ];
    }
}
