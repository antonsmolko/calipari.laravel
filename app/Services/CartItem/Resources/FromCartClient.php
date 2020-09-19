<?php

namespace App\Services\CartItem\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class FromCartClient extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $details = $this->getDetails();

        return [
            'id' => $this->id,
            'image_id' => $details['image_id'],
            'article' => getImageArticle($details['image_id']),
            'width' => $details['width_cm'],
            'height' => $details['height_cm'],
            'texture_id' => $details['texture_id'],
            'filter' => getFilterString($details['filter']),
            'qty' => $details['qty'],
            'added_costs' => !empty($details['added_costs']) ? $details['added_costs'] : [],
            'image_path' => config('settings.base_image_url') .
                config('settings.order_item_full_url') .
                getCartItemPath($details, $details['filter']),
            'thumb_path' => config('settings.base_image_url') .
                config('settings.order_item_thumb_url') .
                getCartItemPath($details, $details['filter'])
        ];
    }
}
