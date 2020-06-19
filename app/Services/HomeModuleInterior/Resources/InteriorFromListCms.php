<?php

namespace App\Services\HomeModuleInterior\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InteriorFromListCms extends JsonResource
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
            'slides' => $this->slides,
            'order' => $this->order
        ];
    }
}
