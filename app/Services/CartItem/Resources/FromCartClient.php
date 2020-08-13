<?php

namespace App\Services\CartItem\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class FromCartClient extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'details' => $this->getDetails(),
        ];
    }
}
