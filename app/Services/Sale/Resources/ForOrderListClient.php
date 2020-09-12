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
            'image_path' => config('settings.base_image_url') . '/show/' . $this->image_path,
            'thumb_path' => config('settings.base_image_url') . '/resize/600/340/' . $this->image_path,
            'width' => $this->width_cm,
            'height' => $this->height_cm,
            'texture' => $this->texture->name,
            'filter' => '—',
            'qty' => 1,
            'price' => $this->pivot->selling_price
        ];
    }
}
