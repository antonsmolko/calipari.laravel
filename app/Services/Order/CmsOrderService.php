<?php


namespace App\Services\Order;


use App\Events\Models\Order\OrderUpdated;
use App\Models\Order;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Key;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Order\Handlers\GetMailFormatOrderHandler;
use App\Services\Order\Repositories\CmsOrderRepository;
use App\Services\Order\Resources\CmsOrder as OrderResource;
use App\Services\Order\Resources\CmsOrderFromList as OrderFromListResource;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

class CmsOrderService extends CmsBaseResourceService
{
    private GetMailFormatOrderHandler $getMailFormatOrderHandler;

    /**
     * CmsOrderService constructor.
     * @param CmsOrderRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param GetMailFormatOrderHandler $getMailFormatOrderHandler
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        CmsOrderRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        GetMailFormatOrderHandler $getMailFormatOrderHandler,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->getMailFormatOrderHandler = $getMailFormatOrderHandler;
        $this->cacheTag = Tag::ORDERS_TAG;
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getItems()
    {
        return $this->repository->getItems();
    }

    /**
     * @param array $requestData
     * @return Resources\CmsOrderFromListCollection
     */
    public function getCurrentItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ORDERS_PREFIX, ['cms', 'current'], $requestData);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getCurrentItems($requestData));
    }

    /**
     * @param array $requestData
     * @return Resources\CmsOrderFromListCollection
     */
    public function getCompletedItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ORDERS_PREFIX, ['cms', 'completed'], $requestData);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getItemsByStatus($requestData, 'completed'));
    }

    /**
     * @param array $requestData
     * @return Resources\CmsOrderFromListCollection
     */
    public function getCanceledItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ORDERS_PREFIX, ['cms', 'canceled'], $requestData);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getItemsByStatus($requestData, 'canceled'));
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ORDERS_PREFIX, ['cms', 'id_' . $id]);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getItem($id));
    }

    /**
     * @param int $id
     * @return Resources\CmsOrder
     */
    public function getItemDetails(int $id)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ORDERS_PREFIX, ['cms', 'details', 'id_' . $id]);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getItemDetails($id));
    }

    /**
     * @param int $id
     * @param array $requestData
     * @return Resources\CmsOrder|Resources\CmsOrderFromList
     */
    public function changeStatus(int $id, array $requestData)
    {
        $order = $this->repository->getItem($id);

        $changeStatusOrder = $this->repository
            ->changeStatus($order, $requestData['status']);

        $this->sendMail(\App\Mail\ChangeOrderStatus::class, $changeStatusOrder);

        event(new OrderUpdated());

        return $requestData['list']
            ? new OrderFromListResource($changeStatusOrder)
            : new OrderResource($changeStatusOrder);
    }

    /**
     * @param $mailClass
     * @param Order $order
     */
    public function sendMail($mailClass, Order $order)
    {
        $orderData = $this->getMailFormatOrderHandler->handle($order);

        $email = $order->user ? $order->user->email : $order['customer']['email'];
        $mail = app()->makeWith($mailClass, ['order' => $orderData]);
        Mail::to($email)->queue($mail);
    }
}
