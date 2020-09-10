<?php

namespace App\Services\Order\Resources;

use App\Services\OrderItem\Resources\ClientOrderItem as OrderItemResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientOrder extends JsonResource
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
            'date' => $this->created_at->format('d.m.Y'),
            'number' => $this->number,
            'hash_number' => $this->hash_number,
            'user_id' => $this->user_id,
            'items' => OrderItemResource::collection($this->items),
            'delivery' => $this->getDelivery(),
            'customer' => $this->getCustomer(),
            'price' => $this->price,
            'comment' => $this->comment,
            'status' => $this->getCurrentStatus(),
            'paid' => $this->paid,
            'has_review' => $this->has_review
        ];
    }
}
