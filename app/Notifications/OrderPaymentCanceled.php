<?php

namespace App\Notifications;


use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

class OrderPaymentCanceled extends Notification
{
    use Queueable;

    private array $paymentReport;

    /**
     * Create a new notification instance.
     *
     * @param array $paymentReport
     */
    public function __construct(array $paymentReport)
    {
        $this->paymentReport = $paymentReport;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['slack'];
    }

    /**
     * Get the Slack representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return SlackMessage
     */
    public function toSlack($notifiable)
    {
        $paymentReport = $this->paymentReport;

        $content = array_reduce(array_keys($paymentReport), function ($carry, $key) use ($paymentReport) {
            /** Не форматировать. Оставить так. !!! */
            return $carry . '
*' . __('yandex_kassa.payment_info.' . $key) . '* - ' . $paymentReport[$key];
        }, '');

        return (new SlackMessage)
            ->from('calipari.ru', ':x:')
            ->content('Оплата заказа № ' . $paymentReport['order_number'] . ' отменена!')
            ->attachment(function ($attachment) use ($content) {
                $attachment->content($content)->markdown(['text']);
            });
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
