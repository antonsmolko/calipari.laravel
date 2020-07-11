<?php


namespace App\Services\User\Handlers;


use App\Models\User;
use App\Services\Role\Repositories\CmsRoleRepository;
use App\Services\User\Repositories\CmsUserRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsUserRepository $repository;
    private CmsRoleRepository $roleRepository;

    /**
     * UpdateHandler constructor.
     * @param CmsUserRepository $repository
     * @param CmsRoleRepository $roleRepository
     */
    public function __construct(
        CmsUserRepository $repository,
        CmsRoleRepository $roleRepository)
    {
        $this->repository = $repository;
        $this->roleRepository = $roleRepository;
    }

    /**
     * @param User $user
     * @param array $updateData
     * @return mixed
     */
    public function handle(User $user, array $updateData)
    {
        if (!$user->isEditable()) {
            abort(403);
        }

        if (Arr::has($updateData, ['old_password', 'password'])
            && !empty($updateData['old_password'])
            && !empty($updateData['password'])) {

            $user->isOwnAccount()
                ? $this->repository->setPassword($user, $updateData['old_password'], $updateData['password'])
                : abort(403);
        }

        if ((int) $updateData['role'] !== $user->roles[0]->id) {
            $user->isRoleChangeable()
                ? $this->repository->syncRole($user, $updateData['role'])
                : abort(403);
        }

        $updateData['publish'] = $updateData['publish'] ?? 0;

        return $this->repository->update($user, Arr::except($updateData, ['old_password', 'password', 'role']));
    }
}
