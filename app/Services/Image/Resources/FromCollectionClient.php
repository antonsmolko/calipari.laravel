<?php

namespace App\Services\Image\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class FromCollectionClient extends JsonResource
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
            'path' => $this->path,
            'width' => $this->width,
            'height' => $this->height,
            'likesCount' => $this->likes()->count(),
            'colorCollection' => $this->publishedColorCollection ? $this->publishedColorCollection->alias : null,
            'artCollection' => $this->publishedArtCollection ? $this->publishedArtCollection->alias : null
        ];
    }
}
