<?php

namespace App\Services\Review\Resources;

use Creativeorange\Gravatar\Facades\Gravatar;
use Illuminate\Http\Resources\Json\JsonResource;

class ForListClient extends JsonResource
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
            'gravatar' => $this->user ? Gravatar::get($this->user->email, ['size'=>150]) : null,
            'customer_name' => $this->customer_name,
            'quality_rate' => $this->quality_rate,
            'service_rate' => $this->service_rate,
            'comment' => $this->comment,
            'publish' => $this->publish,
            'images' => $this->getImages(),
            'date' => $this->created_at->format('d F Y')
        ];
    }
}
