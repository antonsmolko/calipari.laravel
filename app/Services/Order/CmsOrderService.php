<?php


namespace App\Services\Order;


use App\Models\Order;
use App\Models\User;
use App\Services\Base\Resource\CmsBaseResourceService;
use App\Services\Base\Resource\Handlers\ClearCacheHandler;
use App\Services\Cache\Key;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Order\Handlers\GetFormattedOrderDetailsHandler;
use App\Services\Order\Handlers\GetMailClassByOrderStatusHandler;
use App\Services\Order\Handlers\RefundHandler;
use App\Services\Order\Repositories\CmsOrderRepository;
use App\Services\OrderStatus\Repositories\OrderStatusRepository;
use App\Services\Payment\PaymentService;
use App\Services\Pdf\PdfService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use App\Services\Order\Resources\CmsOrder as OrderResource;
use App\Services\Order\Resources\CmsOrderForList as OrderFromListResource;

class CmsOrderService extends CmsBaseResourceService
{
    private GetFormattedOrderDetailsHandler $getFormattedOrderDetailsHandler;
    private RefundHandler $refundHandler;
    private PaymentService $paymentService;
    private OrderStatusRepository $orderStatusRepository;
    private PdfService $pdfService;
    private GetMailClassByOrderStatusHandler $getMailClassByOrderStatusHandler;

    /**
     * CmsOrderService constructor.
     * @param CmsOrderRepository $repository
     * @param ClearCacheHandler $clearCacheByTagHandler
     * @param GetFormattedOrderDetailsHandler $getFormattedOrderDetailsHandler
     * @param RefundHandler $refundHandler
     * @param PaymentService $paymentService
     * @param CacheKeyManager $cacheKeyManager
     * @param OrderStatusRepository $orderStatusRepository
     * @param PdfService $pdfService
     * @param GetMailClassByOrderStatusHandler $getMailClassByOrderStatusHandler
     */
    public function __construct(
        CmsOrderRepository $repository,
        ClearCacheHandler $clearCacheByTagHandler,
        GetFormattedOrderDetailsHandler $getFormattedOrderDetailsHandler,
        RefundHandler $refundHandler,
        PaymentService $paymentService,
        CacheKeyManager $cacheKeyManager,
        OrderStatusRepository $orderStatusRepository,
        PdfService $pdfService,
        GetMailClassByOrderStatusHandler $getMailClassByOrderStatusHandler
    )
    {
        parent::__construct($repository, $clearCacheByTagHandler, $cacheKeyManager);
        $this->getFormattedOrderDetailsHandler = $getFormattedOrderDetailsHandler;
        $this->refundHandler = $refundHandler;
        $this->paymentService = $paymentService;
        $this->orderStatusRepository = $orderStatusRepository;
        $this->pdfService = $pdfService;
        $this->getMailClassByOrderStatusHandler = $getMailClassByOrderStatusHandler;
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
     * @return Resources\CmsOrderForListCollection
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
     * @return Resources\CmsOrderForListCollection
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
     * @return Resources\CmsOrderForListCollection
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

        return !empty($requestData['list'])
            ? new OrderFromListResource($changeStatusOrder)
            : new OrderResource($changeStatusOrder);
    }

    public function sendByStatusMail(Order $order)
    {
        $mailClass = $this->getMailClassByOrderStatusHandler
            ->handle($order->getCurrentStatusAlias());

        if ($mailClass) {
            $this->sendMail($mailClass, $order);
        }
    }

    /**
     * @param $mailClass
     * @param Order $order
     */
    public function sendMail($mailClass, Order $order)
    {
        $orderData = $this->getFormattedOrderDetailsHandler->handle($order);

        $email = $order->user ? $order->user->email : $order->getCustomerField('email');

        $mail = app()->makeWith($mailClass, [
            'order' => $orderData,
            'pdf' => $this->pdfService->getOrderDetails($orderData)
        ]);

        Mail::to($email)->send($mail);
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
        $refundedOrder = $this->refundHandler->handle($order, $refundData);

        $statusAlias = $refundedOrder->fullyRefunded()
            ? Order::REFUNDED_STATUS
            : Order::PARTIALLY_REFUNDED_STATUS;

        $status = $this->orderStatusRepository->getItemByAlias($statusAlias);
        $this->repository->changeStatus($refundedOrder, $status->id);

        return $this->repository->getItemDetails($order->id);
    }

    /**
     * @param User $user
     */
    public function syncWithoutRegistrationItemsWithUser(User $user)
    {
        $orders = $this->repository->getWithoutRegistrationItemsByEmail($user->email);
        $orders->each(function($order) use ($user) {
            $order->user()->associate($user);
            $order->save();
        });
    }

    /**
     * @param User $user
     */
    public function refreshCustomerEmail(User $user)
    {
        $orders = $user->orders;
        $orders->each(function ($order) use ($user) {
            $customer = $order->getCustomer();
            $customer['email'] = $user->email;
            $order->update([
                'customer' => json_encode($customer, true)
            ]);
        });
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function getPdfItemDetails(int $id)
    {
        $order = $this->repository->getItem($id);
        $orderDetails = $this->getFormattedOrderDetailsHandler->handle($order);

        return $this->pdfService->getDownloadResponse(
            $orderDetails,
            'order-details',
            $order->number
        );
    }
}
