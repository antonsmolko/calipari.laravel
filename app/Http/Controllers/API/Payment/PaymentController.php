<?php

namespace App\Http\Controllers\API\Payment;

use App\Http\Controllers\API\Payment\Requests\CreateRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\FormRequest;
use App\Services\Payment\PaymentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use YandexCheckout\Request\Payments\PaymentResponse;

class PaymentController extends Controller
{
    private PaymentService $service;

    /**
     * PaymentController constructor.
     * @param PaymentService $service
     */
    public function __construct(PaymentService $service)
    {
        $this->service = $service;
    }

    /**
     * @param CreateRequest $request
     * @return JsonResponse
     * @throws \YandexCheckout\Common\Exceptions\ApiException
     * @throws \YandexCheckout\Common\Exceptions\BadApiRequestException
     * @throws \YandexCheckout\Common\Exceptions\ForbiddenException
     * @throws \YandexCheckout\Common\Exceptions\InternalServerError
     * @throws \YandexCheckout\Common\Exceptions\NotFoundException
     * @throws \YandexCheckout\Common\Exceptions\ResponseProcessingException
     * @throws \YandexCheckout\Common\Exceptions\TooManyRequestsException
     * @throws \YandexCheckout\Common\Exceptions\UnauthorizedException
     */
    public function create(CreateRequest $request): JsonResponse
    {
        return response()->json($this->service->create($request->all()));
    }

    /**
     * @param $response
     */
    public function notify($response)
    {
        $this->service->notify($response);
    }

    /**
     * @param string $token
     * @return int
     */
    public function confirmCompletion(string $token): int
    {
        return $this->service->confirmCompletion($token);
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
