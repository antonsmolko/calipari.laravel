<?php

namespace App\Http\Controllers\API\Client\Card;

use App\Http\Controllers\Controller;
use App\Services\Card\CardService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CardController extends Controller
{
    private CardService $service;

    /**
     * CardController constructor.
     * @param CardService $service
     */
    public function __construct(CardService $service)
    {
        $this->service = $service;
    }

    /**
     * @param string $paymentId
     * @return bool|null
     * @throws \Exception
     */
    public function remove(string $paymentId)
    {
        return $this->service->remove($paymentId);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function sync(Request $request): JsonResponse
    {
        return response()->json($this->service->sync($request->all()));
    }
}
