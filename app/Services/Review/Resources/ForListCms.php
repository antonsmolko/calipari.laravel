<?php

namespace App\Services\Review\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class ForListCms extends JsonResource
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
            'order_number' => $this->order->number,
            'customer' => $this->getOrderCustomer(),
            'comment' => $this->comment,
            'quality_rate' => $this->quality_rate,
            'service_rate' => $this->service_rate,
            'publish' => $this->publish,
            'date' => $this->created_at->format('d.m.Y - H:i:s')
        ];
    }
}
