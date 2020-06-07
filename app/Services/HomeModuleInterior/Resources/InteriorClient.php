<?php

namespace App\Services\HomeModuleInterior\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Services\HomeModuleInterior\Resources\InteriorSlideClient as InteriorSlideResource;

class InteriorClient extends JsonResource
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
            'slides' => InteriorSlideResource::collection($this->slides),
            'order' => $this->order
        ];
    }
}
