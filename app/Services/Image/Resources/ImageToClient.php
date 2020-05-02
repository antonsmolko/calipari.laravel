<?php

namespace App\Services\Image\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ImageToClient extends JsonResource
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
            'format' => $this->format->title,
            'views' => $this->views,
            'likes' => $this->likes->count(),
            'ratio' => $this->ratio
        ];
    }
}
