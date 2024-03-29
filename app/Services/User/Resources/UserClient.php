<?php

namespace App\Services\User\Resources;


use Creativeorange\Gravatar\Facades\Gravatar;
use Illuminate\Http\Resources\Json\JsonResource;

class UserClient extends JsonResource
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
            'roles' => $this->roles->pluck('name'),
            'gravatar_small' => Gravatar::get($this->email, 'small-secure'),
            'gravatar_medium' => Gravatar::get($this->email, 'medium')
        ];
    }
}
