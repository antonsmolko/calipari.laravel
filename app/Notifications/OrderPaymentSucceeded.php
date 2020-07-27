<?php

namespace App\Notifications;


use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

class OrderPaymentSucceeded extends Notification
{
    use Queueable;

    private array $paymentData;

    /**
     * Create a new notification instance.
     *
     * @param array $paymentData
     */
    public function __construct(array $paymentData)
    {
        $this->paymentData = $paymentData;
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
        $paymentData = $this->paymentData;
        $content = array_reduce($paymentData, function ($carry, $key) use ($paymentData) {
            /** Не форматировать. Оставить так. !!! */
            return $carry . '
*' . __('yandex_kassa.payment_info.' . $key) . '* - ' .$paymentData[$key];
        }, '');

        return (new SlackMessage)
            ->from('calipari.ru', ':moneybag:')
            ->to('#payment')
            ->content($paymentData['description'] . ' оплачен!')
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
