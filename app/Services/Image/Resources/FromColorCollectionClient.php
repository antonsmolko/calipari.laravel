<?php

namespace App\Services\Image\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class FromColorCollectionClient extends JsonResource
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
            'likes' => $this->likes->count()
        ];
    }
}
