<?php

namespace App\Http\Controllers\API\Client\Order;

use App\Http\Controllers\API\Client\Order\Requests\PayRequest;
use App\Http\Controllers\API\Client\Order\Requests\StoreRequest;
use App\Services\Order\ClientOrderService;
use Illuminate\Http\JsonResponse;
use Psy\Util\Json;

class OrderController
{
    private ClientOrderService $service;

    /**
     * OrderController constructor.
     * @param ClientOrderService $service
     */
    public function __construct(ClientOrderService $service)
    {
        $this->service = $service;
    }

    /**
     * @param StoreRequest $request
     * @return int
     */
    public function store(StoreRequest $request): int
    {
        return $this->service->store($request->all());
    }

    /**
     * @param string $hash
     * @return JsonResponse
     */
    public function getItemByHashForPayment(string $hash): JsonResponse
    {
        return response()->json($this->service->getItemByHashForPayment($hash));
    }

    /**
     * @param string $number
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
    public function paymentCreate(string $number): JsonResponse
    {
        return response()->json($this->service->paymentCreate($number));
    }

    /**
     * @param string $number
     * @param string $paymentId
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
    public function payWithId(string $number, string $paymentId): JsonResponse
    {
        return response()->json($this->service->payWithId($number, $paymentId));
    }

    /**
     * @param string $token
     * @return int
     */
    public function confirmPaymentCompletion(string $token): int
    {
        return $this->service->confirmPaymentCompletion($token);
    }
}
