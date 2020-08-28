<?php

namespace App\Services\Delivery\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DeliveryCms extends JsonResource
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
            'alias' => $this->alias,
            'price' => $this->price,
            'pickup' => $this->pickup,
            'pickups_count' => $this->pickups->count(),
            'pickups_required' => $this->pickupsRequired(),
            'order' => $this->order,
            'description' => $this->description,
            'publish' => $this->publish
        ];
    }
}
