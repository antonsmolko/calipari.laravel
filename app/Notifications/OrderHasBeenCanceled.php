<?php

namespace App\Notifications;


use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

class OrderHasBeenCanceled extends Notification
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

        return (new SlackMessage)
            ->from('calipari.ru', ':x:')
            ->to('#orders')
            ->content($paymentData['description'] . 'отменен')
            ->attachment(function ($attachment) use ($paymentData) {
                /** Не форматировать. Оставить так. !!! */
                $attachment
                    ->content(
                        '*ID* - ' . $paymentData['id'] . '
*Сумма* - ' . $paymentData['amount']['value'] . ' ₽
*Причина* - ' . $paymentData['payment_method']['card']['expiry_month'] . '/' . $paymentData['payment_method']['card']['expiry_year'] . '
*Карта: платежная система* - ' . $paymentData['payment_method']['card']['card_type'])
                    ->markdown(['text']);
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
