<?php

namespace App\Services\Review\Resources;

use Creativeorange\Gravatar\Facades\Gravatar;
use Illuminate\Http\Resources\Json\JsonResource;
use Jenssegers\Date\Date;

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
        Date::setLocale('ru');

        return [
            'id' => $this->id,
            'gravatar' => $this->user ? Gravatar::get($this->user->email, ['size'=>150]) : null,
            'customer_name' => $this->customer_name,
            'quality_rate' => $this->quality_rate,
            'service_rate' => $this->service_rate,
            'comment' => $this->comment,
            'publish' => $this->publish,
            'images' => $this->getImages(),
            'date' => Date::createFromTimeString($this->created_at)->format('j F Y г.'),
        ];
    }
}
