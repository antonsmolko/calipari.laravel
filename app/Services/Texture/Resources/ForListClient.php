<?php

namespace App\Services\Texture\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class ForListClient extends JsonResource
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
            'sample_path' => $this->sample_path,
            'background_path' => $this->background_path,
            'price' => $this->price,
            'width' => $this->width,
            'seamless' => $this->seamless,
            'description' => $this->description
        ];
    }
}
