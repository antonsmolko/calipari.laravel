<?php


namespace App\Services\User\Handlers;


use App\Models\Image;
use App\Services\User\Repositories\ClientUserRepository;

class SyncWishlistHandler
{
    private ClientUserRepository $repository;

    /**
     * SyncWishlistHandler constructor.
     * @param ClientUserRepository $repository
     */
    public function __construct(ClientUserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $likes
     * @return array
     */
    public function handle(array $likes)
    {
        $user = auth()->user();
        $likesSync = $likes;

        if ($user && $user->likes->count()) {
            $userLikes = $user->likes->modelKeys();

            $likesSync = array_unique([...$likes, ...$userLikes]);
        }

        $likesSync = array_values(
            array_filter($likesSync, fn ($like) => Image::where('publish', 1)
                ->where('id', $like)
                ->exists()));


        return $user
            ? $this->repository->syncWishlist($user, $likesSync)
            : $likesSync;
    }
}
