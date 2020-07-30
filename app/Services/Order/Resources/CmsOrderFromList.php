<?php

namespace App\Services\Order\Resources;

use App\Services\OrderStatus\Resources\OrderStatusWithPivotDate;
use Illuminate\Http\Resources\Json\JsonResource;

class CmsOrderFromList extends JsonResource
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
            'email' => $this->user ? $this->user->email : null,
            'delivery' => json_decode($this->delivery, true)['title'],
            'price' => $this->price,
            'refund_amount' => $this->refund_amount,
            'paid' => $this->paid,
            'statuses' => $this->statuses,
            'date' => $this->created_at->format('d.m.Y - H:i:s')
        ];
    }
}
