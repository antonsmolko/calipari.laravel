<?php


namespace App\Services\User\Repositories;


use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\User;
use App\Services\Order\Resources\ClientOrder as OrderResource;
use App\Services\Order\Resources\ForListClient as OrderListResource;
use App\Services\User\Resources\User as UserResource;

class ClientUserRepository
{
    private User $model;

    /**
     * ClientUserRepository constructor.
     * @param User $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
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
     * @return UserResource
     */
    public function getResourceItem(int $id): UserResource
    {
        return new UserResource($this->model::where('id', $id)
            ->with('roles:id,name,display_name')
            ->withCount('orders')
            ->firstOrFail());
    }

    /**
     * @param array $data
     * @param int $role
     * @return User
     */
    public function store(array $data, int $role): User
    {
        $user = $this->model::create($data)
            ->attachRole($role);
        $user->details()->create();

        return $user;
    }

    /**
     * @param string $value
     * @return mixed
     */
    public function updateName(string $value)
    {
        $user = auth()->user();

        return $user->update(['name' => $value]);
    }

    /**
     * @param \Illuminate\Contracts\Auth\Authenticatable|User $user
     * @param string $email
     */
    public function setConfirmToken($user, string $email)
    {
        $user->emailConfirmation()->updateOrCreate(
            ['user_id' => $user->id],
            ['email' => $email, 'token' => sha1(time())]
        );
    }

    /**
     * @param User $user
     * @return bool
     */
    public function emailConfirm(User $user)
    {
        $verifiedEmail = $user->emailConfirmation->email;
        $currentEmail = $user->email;

        if ($verifiedEmail === $currentEmail && $user->confirmed) {
            return false;
        }

        return (bool) $user->update([
            'email' => $verifiedEmail,
            'confirmed' => 1
        ]);
    }

    /**
     * @param string $token
     * @return mixed
     */
    public function getEmailConfirmation(string $token)
    {
        return $this->model::getEmailConfirmation($token)->first();
    }

    /**
     * @param string $email
     * @return mixed
     */
    public function getUserByEmail(string $email)
    {
        return $this->model::where('email', $email)->first();
    }

    /**
     * @param User $user
     * @param string $socialId
     * @param string $service
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function storeUserSocial(User $user, string $socialId, string $service)
    {
        return $user->socials()->create([
            'social_id' => $socialId,
            'service' => $service
        ]);
    }

    /**
     * @param string $id
     * @return mixed
     */
    public function getUserBySocialId(string $id)
    {
        return $this->model::getUserBySocialId($id)->first();
    }

    /**
     * @param \Illuminate\Contracts\Auth\Authenticatable|User $user
     * @return mixed
     */
    public function getOrders($user)
    {
        return OrderListResource::collection($user->orders()
            ->with(['items', 'statuses', 'review'])
            ->orderBy('id', 'desc')
            ->get());
    }

    /**
     * @param $user
     * @param string $number
     * @return OrderResource
     */
    public function getOrderResource($user, string $number)
    {
        return new OrderResource($user->orders()
            ->where('number', $number)
            ->with(['items', 'statuses', 'review'])
            ->firstOrFail());
    }

    /**
     * @param $user
     * @param string $number
     * @return mixed
     */
    public function getOrder($user, string $number)
    {
        return $user->orders()
            ->where('number', $number)
            ->firstOrFail();
    }

    /**
     * @param $user
     * @param string $number
     * @return OrderResource
     */
    public function cancelOrder($user, string $number)
    {
        /** @var OrderStatus $canceledStatus */
        $canceledStatus = OrderStatus::where('alias', Order::CANCELED_STATUS)->firstOrFail();

        /** @var Order $order */
        $order = $user->orders()->where('number', $number)->firstOrFail();

        $order->statuses()->syncWithoutDetaching([$canceledStatus->id]);

        return new OrderResource($order);
    }

    /**
     * @param $user
     * @param array $likes
     * @return mixed
     */
    public function syncWishlist($user, array $likes)
    {
        $user->likes()->sync($likes);

        return $user->likes->modelKeys();
    }

    /**
     * @param \Illuminate\Contracts\Auth\Authenticatable|User $user
     * @param int $imageId
     * @return mixed
     */
    public function toggleLike($user, int $imageId)
    {
        $user->likes()->toggle([$imageId]);

        return $user->likes->pluck('id');
    }
}
