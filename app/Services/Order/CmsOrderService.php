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
use App\Services\Order\Handlers\RefundHandler;
use App\Services\Order\Repositories\CmsOrderRepository;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;
use App\Services\Payment\PaymentService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use App\Services\Order\Resources\CmsOrder as OrderResource;
use App\Services\Order\Resources\CmsOrderFromList as OrderFromListResource;

class CmsOrderService extends CmsBaseResourceService
{
    private GetMailFormatOrderHandler $getMailFormatOrderHandler;
    private RefundHandler $refundHandler;
    private PaymentService $paymentService;
    private OrderStatusRepository $orderStatusRepository;

    /**
     * CmsOrderService constructor.
     * @param CmsOrderRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param GetMailFormatOrderHandler $getMailFormatOrderHandler
     * @param RefundHandler $refundHandler
     * @param PaymentService $paymentService
     * @param CacheKeyManager $cacheKeyManager
     * @param OrderStatusRepository $orderStatusRepository
     */
    public function __construct(
        CmsOrderRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        GetMailFormatOrderHandler $getMailFormatOrderHandler,
        RefundHandler $refundHandler,
        PaymentService $paymentService,
        CacheKeyManager $cacheKeyManager,
        OrderStatusRepository $orderStatusRepository
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->getMailFormatOrderHandler = $getMailFormatOrderHandler;
        $this->refundHandler = $refundHandler;
        $this->paymentService = $paymentService;
        $this->orderStatusRepository = $orderStatusRepository;
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
     * @param string $status
     * @param array $requestData
     * @return array|mixed
     */
    public function getItemsByStatus(string $status, array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ORDERS_PREFIX, ['cms', $status], $requestData);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getItemsByStatus($requestData, $status));
    }

    /**
     * @param array $requestData
     * @return Resources\CmsOrderFromListCollection
     */
    public function getCanceledItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ORDERS_PREFIX, ['cms', Order::CANCELED_STATUS], $requestData);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getItemsByStatus($requestData, Order::CANCELED_STATUS));
    }

    /**
     * @param array $requestData
     * @return Resources\CmsOrderFromListCollection
     */
    public function getRefundedItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::ORDERS_PREFIX, ['cms', Order::REFUNDED_STATUS], $requestData);

        return Cache::tags(Tag::ORDERS_TAG)
            ->remember(
                $key,
                TTL::ORDERS_TTL,
                fn() => $this->repository->getItemsByStatus($requestData, Order::REFUNDED_STATUS));
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
     * @return OrderFromListResource|OrderResource
     */
    public function changeStatus(int $id, array $requestData)
    {
        $order = $this->repository->getItem($id);
        $changeStatusOrder = $this->repository->changeStatus($order, $requestData['status']);

        $this->sendMail(\App\Mail\ChangeOrderStatus::class, $changeStatusOrder);

        event(new OrderUpdated());

        return !empty($requestData['list'])
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

    /**
     * @param int $id
     * @param array $refundData
     * @return OrderResource|bool
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function makeRefund(int $id, array $refundData)
    {
        $order = $this->repository->getItem($id);

        if ($refundData['payment_id'] !== $order->payment_id) {
            abort(422, __('order.wrong_payment_id'));
        }

        if ((int) $refundData['refund_amount'] > $order->price) {
            abort(422, __('order.refund_cannot_be_more_than_payment'));
        }

        $refundResponse = $this->paymentService
            ->refund($order->payment_id, $refundData['refund_amount'], $refundData['refund_reason']);

        if ($refundResponse->getStatus() !== 'succeeded' || $refundResponse->paymentId !== $order->payment_id) {
            return false;
        }

        $refundedOrder = $this->repository->update($order, [
            'refund_amount' => $order->refund_amount + $refundData['refund_amount'],
            'refund_reason' => $refundData['refund_reason']
        ]);

        if ($refundedOrder->price === $refundedOrder->refund_amount) {
            $status = $this->orderStatusRepository->getItemByAlias(Order::REFUNDED_STATUS);
            $this->repository->changeStatus($order, $status->id);
        }

        return $this->repository->getItemDetails($order->id);
    }
}
