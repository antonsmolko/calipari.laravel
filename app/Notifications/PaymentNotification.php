<?php

namespace App\Notifications;


use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;
use Illuminate\Notifications\Notification;

class PaymentNotification extends Notification
{
    use Queueable;

    private array $paymentReport;
    private string $title;
    private string $emoji;

    /**
     * PaymentNotification constructor.
     * @param array $paymentReport
     * @param string $title
     * @param string $emoji
     */
    public function __construct(array $paymentReport, string $title, string $emoji = 'moneybag')
    {
        $this->paymentReport = $paymentReport;
        $this->title = $title;
        $this->emoji = $emoji;
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
        $title = $this->title;
        $emoji = $this->emoji;

        $content = array_reduce(array_keys($paymentReport), function ($carry, $key) use ($paymentReport, $title, $emoji) {
            /** Не форматировать. Оставить так. !!! */
            return $carry . '
*' . __('yandex_kassa.payment_info.' . $key) . '* - ' . $paymentReport[$key];
        }, '');

        return (new SlackMessage)
            ->from('calipari.ru', ':' . $emoji . ':')
            ->content($title)
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
