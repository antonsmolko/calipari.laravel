<?php

namespace App\Http\Controllers\API\Client\Mail;

use App\Http\Controllers\API\Client\Mail\Requests\BackCallFormRequest;
use App\Http\Controllers\API\Client\Mail\Requests\FeedbackFormRequest;
use App\Http\Controllers\Controller;
use App\Services\MailReceiving\MailReceivingService;
use Illuminate\Http\JsonResponse;

class MailController extends Controller
{
    private MailReceivingService $service;

    /**
     * @param MailReceivingService $service
     */
    public function __construct(MailReceivingService $service)
    {
        $this->service = $service;
    }

    /**
     * @param FeedbackFormRequest $request
     * @return JsonResponse
     */
    public function receiveFeedbackForm(FeedbackFormRequest $request): JsonResponse
    {
        return response()->json($this->service->receiveFeedBackForm($request->all()));
    }

    /**
     * @param BackCallFormRequest $request
     * @return JsonResponse
     */
    public function receiveBackCallForm(BackCallFormRequest $request): JsonResponse
    {
        return response()->json($this->service->receiveBackCallForm($request->all()));
    }
}
