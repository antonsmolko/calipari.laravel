<?php

namespace App\Services\Sale\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class ForOrderCms extends JsonResource
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
            'image_path' => $this->image_path,
            'width_cm' => $this->width_cm,
            'height_cm' => $this->height_cm,
            'texture' => $this->texture->name,
            'old_price' => $this->price,
            'selling_price' => $this->pivot->selling_price
        ];
    }
}
