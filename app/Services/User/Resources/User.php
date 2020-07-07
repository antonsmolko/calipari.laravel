<?php

namespace App\Services\User\Resources;

use Creativeorange\Gravatar\Facades\Gravatar;
use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'role' => $this->roles[0],
            'orders_count' => $this->orders_count,
            'publish' => $this->publish,
            'gravatar_small' => Gravatar::get($this->email, 'small-secure'),
            'gravatar_medium' => Gravatar::get($this->email, 'medium'),
            'created_at' => $this->created_at->format('d.m.Y')
        ];
    }
}
