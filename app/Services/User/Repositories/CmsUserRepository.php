<?php


namespace App\Services\User\Repositories;

use App\Models\User;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use App\Services\User\Resources\UserCollection;
use App\Services\User\Resources\UserEdit as UserEditResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;


class CmsUserRepository extends CmsBaseResourceRepository
{
    /**
     * TextureRepository constructor.
     * @param User $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }

//    /**
//     * @return Collection
//     */
//    public function index(): Collection
//    {
//        return $this->model::with('roles')
//            ->withCount('orders')
//            ->get();
//    }

    /**
     * @param array $requestData
     * @return UserCollection
     */
    public function getItems(array $requestData)
    {
        return new UserCollection(
            $this->model::when(!empty($requestData['query']), fn ($query) => $query
                ->where('name', 'like', $requestData['query'] . '%')
                ->orWhere('email', 'like', $requestData['query'] . '%'))
            ->withCount('orders')
            ->orderBy($requestData['sort_by'], $requestData['sort_order'])
            ->paginate($requestData['per_page'], ['*'], '', $requestData['current_page']));
    }

    /**
     * @param int $id
     * @return User
     */
    public function getItem(int $id): User
    {
        return $this->model::findOrFail($id);
    }

    /**
     * @param int $id
     * @return JsonResource
     */
    public function getItemWithRole(int $id): JsonResource
    {
        return new UserEditResource($this->model::findOrFail($id));
    }

    /**
     * @param array $storeData
     * @return User
     */
    public function store(array $storeData): User
    {
        return $this->model::create(Arr::except($storeData, 'role'))
            ->attachRole($storeData['role']);
    }

    /**
     * @param $item
     * @param array $updateData
     * @return User
     */
    public function update($item, array $updateData): User
    {
        $item->update(Arr::except($updateData, 'role'));
        $item->syncRoles([$updateData['role']]);

        return $item;
    }

    /**
     * @param User $user
     * @param string $oldPassword
     * @param string $newPassword
     */
    public function setPassword(User $user, string $oldPassword, string $newPassword)
    {
        password_verify($oldPassword, $user->password)
            ? $user->password = Hash::make($newPassword)
            : abort(422, trans('auth.wrong_active_password'));
    }
}
