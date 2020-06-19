<?php

namespace App\Services\Image\Resources;

use App\Services\Collection\Resources\FromImageClient as FromImageClientResource;
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
            'format' => $this->format->title,
            'views' => $this->views,
            'likes' => $this->likes->count(),
            'ratio' => $this->ratio,
            'collection' => new FromImageClientResource($this->collection)
        ];
    }
}
