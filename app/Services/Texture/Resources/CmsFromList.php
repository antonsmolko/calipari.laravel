<?php

namespace App\Services\Texture\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class CmsFromList extends JsonResource
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
            'name' => $this->name,
            'sample_path' => $this->sample_path,
            'orders_count' => $this->orders_count,
            'publish' => $this->publish,
            'order' => $this->order
        ];
    }
}
