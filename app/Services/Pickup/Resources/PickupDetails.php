<?php

namespace App\Services\Pickup\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PickupDetails extends JsonResource
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
            'title' => $this->title,
            'locality' => $this->locality,
            'address' => $this->address
        ];
    }
}
