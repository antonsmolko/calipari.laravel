<?php


namespace App\Services\Order;


use App\Events\Models\Order\OrderCreated;
use App\Notifications\ReceivedAnOrder;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cart\ClientCartService;
use App\Services\Order\Handlers\StoreHandler;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;
use Illuminate\Support\Facades\Notification;

class ClientOrderService extends ClientBaseResourceService
{
    private StoreHandler $storeHandler;
    private ClientCartService $cartService;
    private OrderStatusRepository $orderStatusRepository;

    /**
     * ClientOrderService constructor.
     * @param ClientOrderRepository $repository
     * @param OrderStatusRepository $orderStatusRepository
     * @param CacheKeyManager $cacheKeyManager
     * @param StoreHandler $storeHandler
     * @param ClientCartService $cartService
     */
    public function __construct(
        ClientOrderRepository $repository,
        OrderStatusRepository $orderStatusRepository,
        CacheKeyManager $cacheKeyManager,
        StoreHandler $storeHandler,
        ClientCartService $cartService
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->storeHandler = $storeHandler;
        $this->cartService = $cartService;
        $this->orderStatusRepository = $orderStatusRepository;
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

    public function update(string $id, array $updateData)
    {
        $order = $this->repository->getItem($id);

        return $this->repository->update($order, $updateData);
    }

    /**
     * @param int $id
     * @param string $statusAlias
     * @return mixed
     */
    public function changeStatus(int $id, string $statusAlias)
    {
        $order = $this->repository->getItem($id);
        $status = $this->orderStatusRepository->getItemByAlias($statusAlias);

        return $this->repository->changeStatus($order, $status->id);
    }
}
