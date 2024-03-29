<?php

namespace App\Services\Texture\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class CmsForEdit extends JsonResource
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
            'price' => $this->price,
            'width' => $this->width,
            'order' => $this->order,
            'sample_path' => $this->sample_path,
            'background_path' => $this->background_path,
            'seamless' => $this->seamless,
            'publish' => $this->publish,
            'description' => $this->description
        ];
    }
}
