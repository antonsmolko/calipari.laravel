<?php

namespace App\Services\Image\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromCollectionCms extends JsonResource
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
            'colors' => $this->colors,
            'owner' => $this->owner,
            'format' => $this->format,
            'views' => $this->views,
            'likesCount' => $this->likes_count,
            'ordersCount' => $this->orders_count,
            'publish' => $this->publish
        ];
    }
}
