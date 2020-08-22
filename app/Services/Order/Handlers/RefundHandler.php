<?php


namespace App\Services\Order\Handlers;


use App\Models\Order;
use App\Services\Order\Repositories\CmsOrderRepository;
use App\Services\Payment\PaymentService;

class RefundHandler
{
    private CmsOrderRepository $repository;
    private PaymentService $paymentService;

    /**
     * RefundHandler constructor.
     * @param CmsOrderRepository $repository
     * @param PaymentService $paymentService
     */
    public function __construct(
        CmsOrderRepository $repository,
        PaymentService $paymentService
    )
    {
        $this->repository = $repository;
        $this->paymentService = $paymentService;
    }

    /**
     * @param Order $order
     * @param array $refundData
     * @return false|mixed
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function handle(Order $order, array $refundData)
    {
        if ($refundData['payment_id'] !== $order->payment_id) {
            abort(422, __('order.wrong_payment_id'));
        }

        if ((int) $refundData['refund_amount'] > $order->price) {
            abort(422, __('order.refund_cannot_be_more_than_payment'));
        }

        $refundResponse = $this->paymentService
            ->refund($order->payment_id, $refundData['refund_amount'], $refundData['refund_reason']);

        dump($refundResponse);

        if ($refundResponse->getStatus() !== 'succeeded' || $refundResponse->paymentId !== $order->payment_id) {
            return false;
        }

        return $this->repository->update($order, [
            'refund_amount' => $order->refund_amount + $refundData['refund_amount'],
            'refund_reason' => $refundData['refund_reason']
        ]);
    }
}
