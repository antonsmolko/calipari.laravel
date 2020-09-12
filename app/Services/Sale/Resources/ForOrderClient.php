<?php

namespace App\Services\Sale\Resources;


use App\Services\Texture\Resources\LessDetailed as TextureResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ForOrderClient extends JsonResource
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
            'width_cm' => $this->width_cm,
            'height_cm' => $this->height_cm,
            'texture' => new TextureResource($this->texture),
            'price' => $this->pivot->selling_price
        ];
    }
}
