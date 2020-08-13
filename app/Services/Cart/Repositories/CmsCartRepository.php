<?php


namespace App\Services\Cart\Repositories;


use App\Models\Cart;
use App\Models\User;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsCartRepository extends CmsBaseResourceRepository
{
    /**
     * CmsCartRepository constructor.
     * @param Cart $model
     */
    public function __construct(Cart $model)
    {
        $this->model = $model;
    }

    /**
     * @param string $email
     * @return mixed
     */
    public function getItemByEmail(string $email)
    {
        return $this->model::where('email', $email)->first();
    }

    /**
     * @param User $user
     * @param array $storeData
     * @return mixed
     */
    public function updateByUser(User $user, array $storeData)
    {
        return $this->model::updateOrCreate(['user_id' => $user->id], $storeData);
    }

    /**
     * @param string $email
     * @param array $storeData
     * @return mixed
     */
    public function updateOrCreate(string $email, array $storeData)
    {
        return $this->model::updateOrCreate(['email' => $email], $storeData);
    }
}
