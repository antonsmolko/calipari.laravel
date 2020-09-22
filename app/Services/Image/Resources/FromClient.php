<?php

namespace App\Services\Image\Resources;


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
            'article' => $this->article,
            'path' => $this->path,
            'likesCount' => $this->likes_count,
            'ratio' => $this->ratio,
            'colorCollection' => $this->publishedColorCollection,
            'artCollection' => $this->publishedArtCollection,
            'examples' => $this->getExamples()
        ];
    }
}
