<?php

namespace App\Http\Controllers\API\Payment;

use App\Http\Controllers\Controller;
use App\Http\Requests\FormRequest;
use App\Models\Order;
use App\Notifications\OrderHasBeenPaid;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Notification;
use YandexCheckout\Client;

class PaymentController extends Controller
{
    public function create(string $hashNumber)
    {
        try {
            $orderNumber = decrypt($hashNumber);
        } catch (DecryptException $e) {
            //
        }

        $order = Order::where('number', $orderNumber)->firstOrFail();
        $client = new Client();
        $client->setAuth('701629', 'test_1Qi2WQ4f0vD8EgDvJUMZqs8CqFFLWSxIea4ZM5-SpV8');

        $payment = $client->createPayment(
            array(
                'amount' => array(
                    'value' => $order->price,
                    'currency' => 'RUB',
                ),
                'confirmation' => array(
                    'type' => 'embedded'
                ),
                'capture' => true,
                'description' => 'Заказ № ' . $orderNumber,
                'metadata' => array(
                    'order_id' => $order->id,
                )
            ),
            uniqid('', true)
        );

        return response()->json($payment);
    }

    public function notify(FormRequest $request)
    {
        if ($request->event === 'payment.succeeded') {
            Notification::route('slack', env('ORDERS_SLACK_WEBHOOK_URL'))
                ->notify(new OrderHasBeenPaid($request->object));
        }
    }
}
