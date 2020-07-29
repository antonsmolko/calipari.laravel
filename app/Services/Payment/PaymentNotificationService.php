<?php


namespace App\Services\Payment;


use App\Models\Order;
use App\Notifications\PaymentNotification;
use App\Notifications\PaymentUnknownStatus;
use App\Services\Order\ClientOrderService;
use App\Services\Payment\Handlers\GetPaymentReportHandler;
use Illuminate\Support\Facades\Notification;

class PaymentNotificationService
{
    private GetPaymentReportHandler $getPaymentReportHandler;
    private ClientOrderService $clientOrderService;

    /**
     * PaymentNotificationService constructor.
     * @param GetPaymentReportHandler $getPaymentReportHandler
     * @param ClientOrderService $clientOrderService
     */
    public function __construct(
        GetPaymentReportHandler $getPaymentReportHandler,
        ClientOrderService $clientOrderService
    )
    {
        $this->getPaymentReportHandler = $getPaymentReportHandler;
        $this->clientOrderService = $clientOrderService;
    }

    /**
     * @param array $paymentRequest
     */
    public function notify(array $paymentRequest)
    {
        $paymentInfo = $paymentRequest['object'];
        $event = $paymentRequest['event'];
        $paymentReport = $this->getPaymentReportHandler->handle($paymentInfo);
        $orderId = $paymentInfo['metadata']['order_id'];

        switch ($event) {
            case 'payment.succeeded':
                $this->clientOrderService->makePaid($orderId, $paymentInfo['id']);

                $title = 'Заказ № ' . $paymentInfo['order_number'] . ' оплачен!';
                $notify = new PaymentNotification($paymentReport, $title);
                break;

            case 'payment.canceled':
                $title = 'Оплата заказа № ' . $paymentInfo['order_number'] . ' отменена!';
                $notify = new PaymentNotification($paymentReport, $title, 'x');
                break;

            case 'refund.succeeded':
                $title = 'Заказ № ' . $paymentInfo['order_number'] . ' возмещен!';
                $notify = new PaymentUnknownStatus($paymentInfo);
                break;

            default:
                $notify = new PaymentUnknownStatus($paymentInfo);
        }

        Notification::route('slack', env('SLACK_WEBHOOK_URL_PAYMENT'))
            ->notify($notify);
    }
}
