<?php

namespace App\Http\Controllers\API\Payment;


use App\Http\Controllers\Controller;
use App\Services\Payment\PaymentNotificationService;
use App\Services\Payment\PaymentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    private PaymentService $service;
    private PaymentNotificationService $notificationService;

    /**
     * PaymentController constructor.
     * @param PaymentService $service
     * @param PaymentNotificationService $notificationService
     */
    public function __construct(
        PaymentService $service,
        PaymentNotificationService $notificationService
    )
    {
        $this->service = $service;
        $this->notificationService = $notificationService;
    }

    /**
     * @param Request $request
     */
    public function notify(Request $request)
    {
        $this->notificationService->notify($request->all());
    }

    /**
     * @param string $paymentId
     * @return JsonResponse
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ExtensionNotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function getPaymentResponse(string $paymentId): JsonResponse
    {
        return response()->json($this->service->getPaymentResponse($paymentId));
    }
}
