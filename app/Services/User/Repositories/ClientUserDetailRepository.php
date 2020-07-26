<?php


namespace App\Services\User\Repositories;


class ClientUserDetailRepository
{
    public function getItem()
    {
        $user = auth()->user();

        return $user->details;
    }

    public function update(array $updateData)
    {
        $user = auth()->user();

        return $user->details()->updateOrCreate(['user_id' => $user->id], $updateData);
    }
}
