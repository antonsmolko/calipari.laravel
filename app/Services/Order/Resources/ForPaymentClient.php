<?php

namespace App\Services\Order\Resources;

use App\Services\OrderItem\Resources\ClientOrderItem as OrderItemResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ForPaymentClient extends JsonResource
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
            'price' => $this->price,
            'paid' => $this->paid
        ];
    }
}
