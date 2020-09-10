<?php

namespace App\Services\Order\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class ByHashClient extends JsonResource
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
            'number' => $this->number,
            'price' => $this->full_price,
            'paid' => $this->paid,
            'review' => $this->review
        ];
    }
}
