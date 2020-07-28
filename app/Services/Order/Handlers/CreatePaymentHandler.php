<?php


namespace App\Services\Order\Handlers;


use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\Payment\PaymentService;
use App\Services\Order\Resources\ForPaymentClient as OrderResource;

class CreatePaymentHandler
{
    private ClientOrderRepository $repository;
    private PaymentService $paymentService;

    /**
     * CreatePaymentHandler constructor.
     * @param ClientOrderRepository $repository
     * @param PaymentService $paymentService
     */
    public function __construct(
        ClientOrderRepository $repository,
        PaymentService $paymentService
    )
    {
        $this->repository = $repository;
        $this->paymentService = $paymentService;
    }

    /**
     * @param OrderResource $order
     * @return array
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function handle(OrderResource $order): array
    {
        $payment = $this->paymentService->create($order);

        $this->repository->update($order, [
            'completion_token' => $payment->getConfirmation()->getConfirmationToken()
        ]);

        return [
            'status' => 'created',
            'payment' => $payment,
        ];
    }
}
