<?php

namespace App\Services\Delivery\Resources;

use App\Services\Pickup\Resources\PickupDetails as PickupResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DeliveryClient extends JsonResource
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
            'is_pickup' => $this->is_pickup,
            $this->mergeWhen($this->is_pickup, [
                'pickups' => PickupResource::collection($this->publishedPickups()),
            ]),
            'order' => $this->order,
            'description' => $this->description
        ];
    }
}
