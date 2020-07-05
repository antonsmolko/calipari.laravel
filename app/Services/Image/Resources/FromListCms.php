<?php

namespace App\Services\Image\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromListCms extends JsonResource
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
            'path' => $this->path,
            'topics' => $this->topics,
            'colors' => $this->colors,
            'interiors' => $this->interiors,
            'owner' => $this->owner,
            'colorCollection' => $this->colorCollection,
            'likesCount' => $this->likes_count,
            'ordersCount' => $this->orders_count,
            'format' => $this->format,
            'publish' => $this->publish
        ];
    }
}
