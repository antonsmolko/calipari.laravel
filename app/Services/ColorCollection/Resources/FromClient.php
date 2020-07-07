<?php

namespace App\Services\ColorCollection\Resources;

use App\Services\Image\Resources\FromCollectionClient as FromCollectionResource;
use Illuminate\Http\Resources\Json\JsonResource;

class FromClient extends JsonResource
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
            'title' => $this->title,
            'alias' => $this->alias,
            'images' => FromCollectionResource::collection($this->publishedImages),
            'main_image_id' => $this->main_image_id,
            'meta_title' => $this->meta_title,
            'description' => $this->description,
            'keywords' => $this->keywords
        ];
    }
}
