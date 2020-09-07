<?php

namespace App\Services\Order\Resources;

use App\Services\OrderItem\Resources\CmsOrderItem as OrderItemResource;
use App\Services\OrderStatus\Resources\OrderStatusWithPivotDate;
use App\Services\Sale\Resources\ForOrderCms as SaleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CmsOrder extends JsonResource
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
            'user' => $this->user,
            'items' => OrderItemResource::collection($this->items),
            'sales' => SaleResource::collection($this->sales),
            'delivery' => $this->getDelivery(),
            'customer' => $this->getCustomer(),
            'price' => $this->price,
            'payment_id' => $this->payment_id,
            'paid' => $this->paid,
            'refund_reason' => $this->refund_reason,
            'refund_amount' => $this->refund_amount,
            'statuses' => OrderStatusWithPivotDate::collection($this->statuses),
            'date' => $this->created_at->format('d.m.Y - H:i:s'),
        ];
    }
}
