<?php

namespace App\Services\Order\Resources;

use App\Services\OrderItem\Resources\ClientOrderItem as OrderItemResource;
use App\Services\Sale\Resources\ForOrderListClient as SaleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ForListClient extends JsonResource
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
            'items' => OrderItemResource::collection($this->items),
            'sales' => SaleResource::collection($this->sales),
            'delivery' => $this->getDelivery(),
            'price' => $this->price,
            'status' => $this->getCurrentStatus(),
            'paid' => $this->paid,
            'has_review' => $this->has_review
        ];
    }
}
