<?php

namespace App\Services\OrderItem\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MailOrderItem extends JsonResource
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
            'article' => getImageArticle($this->image_id),
            'dimensions' => $this->width_cm . ' см × ' . $this->height_cm . ' см',
            'texture' => $this->texture->name,
            'filter' => $this->filter_details,
            'qty' => $this->qty,
            'price' => $this->price,
            'thumb' => env('APP_URL') . '/image/' .
                config('settings.mail_order_item_thumb_url') .
                getOrderItemThumbPath($this)
        ];
    }
}
