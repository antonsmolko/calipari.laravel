<?php

namespace App\Services\ArtCollection\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromSearchClient extends JsonResource
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
            'image_path' => $this->backgroundImage ? $this->backgroundImage->path : null,
            'type' => 'art_collection',
        ];
    }
}
