<?php


namespace App\Services\Order;


use App\Events\Models\Order\OrderCreated;
use App\Notifications\ReceivedAnOrder;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cart\ClientCartService;
use App\Services\Order\Handlers\StoreHandler;
use App\Services\Order\Repositories\ClientOrderRepository;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Notification;

class ClientOrderService extends ClientBaseResourceService
{
    private StoreHandler $storeHandler;
    private ClientCartService $cartService;

    /**
     * OrderService constructor.
     * @param ClientOrderRepository $repository
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     * @param ClientCartService $cartService
     */
    public function __construct(
        ClientOrderRepository $repository,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler,
        ClientCartService $cartService
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
        $this->cartService = $cartService;
    }

    /**
     * @param array $requestData
     * @return int
     */
    public function store(array $requestData): int
    {
        $order = $this->storeHandler->handle($requestData);

        if (auth()->user()) {
            $this->cartService->update([]);
        }

        event(new OrderCreated($order));

        Notification::route('slack', env('ORDERS_SLACK_WEBHOOK_URL'))
            ->notify(new ReceivedAnOrder($order));

        return $order->number;
    }
}
