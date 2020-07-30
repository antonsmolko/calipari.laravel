<?php


namespace App\Services\Payment;


use App\Notifications\PaymentNotification;
use App\Notifications\PaymentUnknownStatus;
use App\Services\Order\ClientOrderService;
use App\Services\Order\Repositories\CmsOrderRepository;
use App\Services\Payment\Handlers\GetPaymentReportHandler;
use Illuminate\Support\Facades\Notification;

class PaymentNotificationService
{
    private GetPaymentReportHandler $getPaymentReportHandler;
    private ClientOrderService $clientOrderService;
    private CmsOrderRepository $cmsOrderRepository;

    /**
     * PaymentNotificationService constructor.
     * @param GetPaymentReportHandler $getPaymentReportHandler
     * @param ClientOrderService $clientOrderService
     * @param CmsOrderRepository $cmsOrderRepository
     */
    public function __construct(
        GetPaymentReportHandler $getPaymentReportHandler,
        ClientOrderService $clientOrderService,
        CmsOrderRepository $cmsOrderRepository
    )
    {
        $this->getPaymentReportHandler = $getPaymentReportHandler;
        $this->clientOrderService = $clientOrderService;
        $this->cmsOrderRepository = $cmsOrderRepository;
    }

    /**
     * @param array $paymentRequest
     */
    public function notify(array $paymentRequest)
    {
        $paymentInfo = $paymentRequest['object'];
        $event = $paymentRequest['event'];
        $paymentReport = $this->getPaymentReportHandler->handle($paymentInfo);

        switch ($event) {
            case 'payment.succeeded':
                $orderId = $paymentInfo['metadata']['order_id'];
                $this->clientOrderService->makePaid($orderId, $paymentInfo['id']);

                $title = 'Заказ № ' . $paymentInfo['metadata']['order_number'] . ' оплачен!';
                $notify = new PaymentNotification($paymentReport, $title);
                break;

            case 'payment.canceled':
                $title = 'Оплата заказа № ' . $paymentInfo['metadata']['order_number'] . ' отменена!';
                $notify = new PaymentNotification($paymentReport, $title, 'x');
                break;

            case 'refund.succeeded':
                $order = $this->cmsOrderRepository->getItemByPaymentId($paymentInfo['payment_id']);
                $titlePrefix = $order->price - $order->refund_amount > 0
                    ? ' частично возмещен!'
                    : ' полностью возмещен!';

                $title = 'Заказ № ' . $order->number . $titlePrefix;

                $notify = new PaymentNotification($paymentReport, $title, 'money_with_wings');
                break;

            default:
                $notify = new PaymentUnknownStatus($paymentInfo);
        }

        Notification::route('slack', env('SLACK_WEBHOOK_URL_PAYMENT'))
            ->notify($notify);
    }
}
