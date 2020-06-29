<?php

namespace App\Services\OrderItem\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientOrderItem extends JsonResource
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
            'image_id' => $this->image->id,
            'article' => getImageArticle($this->image_id),
            'width' => $this->width_cm,
            'height' => $this->height_cm,
            'texture' => $this->texture->name,
            'filter' => $this->filter_details,
            'qty' => $this->qty,
            'price' => $this->price,
            'image_path' => env('APP_URL') . '/image/' .
                config('settings.order_item_full_url') .
                getOrderItemPath($this),
            'thumb_path' => env('APP_URL') . '/image/' .
                config('settings.order_item_thumb_url') .
                getOrderItemPath($this)
        ];
    }
}