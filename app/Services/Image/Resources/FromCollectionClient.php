<?php

namespace App\Services\Image\Resources;

use App\Services\Collection\Resources\FromImageClient as FromImageClientResource;
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
            'views' => $this->views,
            'likes' => $this->likes->count()
        ];
    }
}
