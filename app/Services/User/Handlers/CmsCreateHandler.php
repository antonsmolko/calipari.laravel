<?php


namespace App\Services\User\Handlers;


use App\Models\User;
use App\Services\User\Repositories\CmsUserRepository;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CmsCreateHandler
{
    private CmsUserRepository $repository;

    /**
     * StoreUserHandler constructor.
     * @param CmsUserRepository $repository
     */
    public function __construct(CmsUserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return mixed
     */
    public function handle(array $storeData)
    {
        $storeData['password'] = Hash::make($storeData['password']);

        $user = $this->repository->store(Arr::except($storeData, 'role'));

        if (!Auth::user()->canSetRole()) {
            $storeData['role'] = User::DEFAULT_ROLE;
        }

        return $this->repository->syncRole($user, $storeData['role']);
    }
}
