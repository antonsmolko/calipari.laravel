<?php

namespace App\Notifications;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;
use Illuminate\Notifications\Notification;

class ReceivedAnOrder extends Notification
{
    use Queueable;

    private Order $order;

    /**
     * Create a new notification instance.
     *
     * @param Order $order
     */
    public function __construct(Order $order)
    {
        $this->order = $order;
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
        $order = $this->order;

        return (new SlackMessage)
            ->from('Calipari', ':package:')
            ->to('#orders')
            ->content('Поступил новый заказ № ' . $order->number)
            ->attachment(function ($attachment) use ($order) {
                $customer = json_decode($order->customer, true);
                $delivery = json_decode($order->delivery, true);
/** Не форматировать. Оставить так. !!! */
                $attachment
                    ->content(
'*Имя* - ' . $customer['name'] . '
*Email* - ' . $customer['email'] . '
*Телефон* - ' . $customer['phone'] . '
*Способ доставки* - ' . $delivery['title'] . '
*Регион* - ' . $delivery['locality'] . '
*Адрес доставки* - ' . $delivery['address'] . '
*Стоимость доставки* - ' . $delivery['price'] . ' ₽
*Комментарий* - ' . $order['comment'] . '
*Цена* - ' . $order->price . ' ₽')
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
