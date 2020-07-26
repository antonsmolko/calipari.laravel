<?php

namespace App\Notifications;


use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

class OrderHasBeenPaid extends Notification
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
            ->from('calipari.ru', ':moneybag:')
            ->to('#orders')
            ->content('Заказ оплачен')
//            ->content($paymentData['description'] . ' - оплачен')
            ->attachment(function ($attachment) use ($paymentData) {
                $attachment
                    ->content(json_encode($paymentData, true))
//                $cardRegExp = '/[0-9*]{4}/';
//                $cardNumber = $paymentData['payment_method']['card']['first6'] . '******' . $paymentData['payment_method']['card']['last4'];
//                $formattedCardNumber = Str::of($cardNumber)
//                    ->matchAll($cardRegExp)
//                    ->join(' ');
//                /** Не форматировать. Оставить так. !!! */
//                $attachment
//                    ->content(
//                        '*ID* - ' . $paymentData['id'] . '
//*Сумма* - ' . $paymentData['amount']['value'] . ' ₽
//*Карта: номер* - ' . $formattedCardNumber . '
//*Карта: месяц/год* - ' . $paymentData['payment_method']['card']['expiry_month'] . '/' . $paymentData['payment_method']['card']['expiry_year'] . '
//*Карта: платежная система* - ' . $paymentData['payment_method']['card']['card_type'])
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
