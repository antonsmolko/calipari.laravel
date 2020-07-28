<?php


namespace App\Services\User;


use App\Models\User;
use App\Services\Auth\AuthService;
use App\Services\Cache\Key;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Order\Resources\ClientOrder as OrderResource;
use App\Services\User\Handlers\CancelOrderHandler;
use App\Services\User\Handlers\ClientCreateHandler;
use App\Services\User\Handlers\SyncWishlistHandler;
use App\Services\User\Handlers\UpdateHandler;
use App\Services\User\Repositories\ClientUserRepository;
use Illuminate\Support\Facades\Cache;

class ClientUserService
{
    private ClientUserRepository $repository;
    private AuthService $authService;
    private ClientCreateHandler $createHandler;
    private UpdateHandler $updateHandler;
    private CancelOrderHandler $cancelOrderHandler;
    private SyncWishlistHandler $syncWishlistHandler;
    private CacheKeyManager $cacheKeyManager;
    private $authUser;

    /**
     * ClientUserService constructor.
     * @param ClientUserRepository $repository
     * @param AuthService $authService
     * @param ClientCreateHandler $createHandler
     * @param CacheKeyManager $cacheKeyManager
     * @param UpdateHandler $updateHandler
     * @param CancelOrderHandler $cancelOrderHandler
     * @param SyncWishlistHandler $syncWishlistHandler
     */
    public function __construct(
        ClientUserRepository $repository,
        AuthService $authService,
        ClientCreateHandler $createHandler,
        CacheKeyManager $cacheKeyManager,
        UpdateHandler $updateHandler,
        CancelOrderHandler $cancelOrderHandler,
        SyncWishlistHandler $syncWishlistHandler
    )
    {
        $this->repository = $repository;
        $this->authService = $authService;
        $this->createHandler = $createHandler;
        $this->updateHandler = $updateHandler;
        $this->cancelOrderHandler = $cancelOrderHandler;
        $this->syncWishlistHandler = $syncWishlistHandler;
        $this->cacheKeyManager = $cacheKeyManager;
        $this->authUser = auth()->user();
    }

    /**
     * @param int $id
     * @return Resources\User
     */
    public function getItem(int $id)
    {
        return $this->repository->getResourceItem($id);
    }

    /**
     * @param array $storeData
     * @return User
     */
    public function store(array $storeData): User
    {
        return $this->createHandler->handle($storeData);
    }

    /**
     * @param array $updateData
     * @return mixed
     */
    public function updateName(array $updateData)
    {
        return $this->repository->updateName($updateData['name']);
    }

    /**
     * @param array $updateData
     * @return mixed
     */
    public function updateEmail(array $updateData)
    {
        $currentEmail = $this->authUser->email;
        $verifiedEmail = $updateData['email'];

        if ($currentEmail === $verifiedEmail) {
            return [
                'message' => __('auth.email_matches_current'),
                'status' => 'primary'
            ];
        }

        $this->authService->createNewEmailConfirmation($this->authUser, $verifiedEmail);
        $this->authService->logout();

        return response()->json($this->authService->getMessageByEmailConfirmation($verifiedEmail));
    }

    /**
     * @param array $storeData
     * @param string $service
     * @return User
     */
    public function storeWithSocial(array $storeData, string $service): User
    {
        $user = $this->store($storeData);

        if (!$user->hasSocialLinked($service)) {
            $this->storeUserSocial($user, $storeData['social_id'], $service);
        }

        return $user;
    }

    /**
     * @param User $user
     * @param string $socialId
     * @param string $service
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function storeUserSocial(User $user, string $socialId, string $service)
    {
        return $this->repository->storeUserSocial($user, $socialId, $service);
    }

    /**
     * @param string $id
     * @return mixed
     */
    public function getUserBySocialId(string $id)
    {
        return $this->repository->getUserBySocialId($id);
    }

    /**
     * @param string $email
     * @return mixed
     */
    public function getUserByEmail(string $email)
    {
        return $this->repository->getUserByEmail($email);
    }

    /**
     * @return mixed
     */
    public function getOrders()
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(
                Key::ORDERS_PREFIX,
                ['client', 'user_id_' . $this->authUser->id, 'list']);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getOrders($this->authUser));
    }

    /**
     * @param int $number
     * @return mixed
     */
    public function getOrderResource(int $number)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(
                Key::ORDERS_PREFIX,
                ['client', 'user_id_' . $this->authUser->id, 'number_' . $number]);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getOrderResource($this->authUser, $number));
    }

    /**
     * @param int $number
     * @return mixed
     */
    public function cancelOrder(int $number)
    {
        return new OrderResource($this->cancelOrderHandler->handle($number));
    }

    /**
     * @param array $likes
     * @return mixed
     */
    public function syncWishlist(array $likes)
    {
        return $this->syncWishlistHandler->handle($likes);
    }

    /**
     * @param int $imageId
     * @return mixed
     */
    public function toggleLike(int $imageId)
    {
        return $this->repository->toggleLike($this->authUser, $imageId);
    }
}
