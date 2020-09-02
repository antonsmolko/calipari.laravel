<?php

namespace App\Services\Sale\Resources;


use App\Services\Texture\Resources\BasicProps as TextureResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ForListCms extends JsonResource
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
            'image_id' => $this->image_id,
            'article' => $this->article,
            'image_path' => $this->image_path,
            'width_cm' => $this->width_cm,
            'height_cm' => $this->height_cm,
            'texture_id' => $this->texture_id,
            'status' => $this->status,
            'discount' => $this->discount,
            'publish' => $this->publish
        ];
    }
}
