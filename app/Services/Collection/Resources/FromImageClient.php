<?php

namespace App\Services\Collection\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FromImageClient extends JsonResource
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
            'images_count' => $this->images->count()
        ];
    }
}
