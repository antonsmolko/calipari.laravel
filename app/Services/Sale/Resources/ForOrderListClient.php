<?php

namespace App\Services\Sale\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class ForOrderListClient extends JsonResource
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
            'article' => $this->article,
            'image_id' => $this->image_id,
            'image_path' => $this->image_path,
            'thumb_path' => $this->image_path,
            'width' => $this->width_cm,
            'height' => $this->height_cm,
            'texture' => $this->texture->name,
            'filter' => '—',
            'qty' => 1,
            'sale' => true,
            'price' => $this->pivot->selling_price
        ];
    }
}
