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
            'image_id' => $this->image_id,
            'article' => getImageArticle($this->image_id),
            'width' => $this->width_cm,
            'height' => $this->height_cm,
            'texture' => $this->texture->name,
            'filter' => $this->filter_details,
            'qty' => $this->qty,
            'price' => $this->price,
            'added_costs' => $this->getAddedCosts(),
            'image_path' => config('settings.base_image_url') .
                config('settings.order_item_full_url') .
                getOrderItemPath($this),
            'thumb_path' => config('settings.base_image_url') .
                config('settings.order_item_thumb_url') .
                getOrderItemPath($this)
        ];
    }
}
