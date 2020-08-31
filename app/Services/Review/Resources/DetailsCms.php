<?php

namespace App\Services\Review\Resources;

use App\Services\Order\Resources\CmsOrder as OrderResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DetailsCms extends JsonResource
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
            'order' => new OrderResource($this->order),
            'quality_rate' => $this->quality_rate,
            'service_rate' => $this->service_rate,
            'comment' => $this->comment,
            'publish' => $this->publish,
            'date' => $this->created_at->format('d.m.Y - H:i:s')
        ];
    }
}
