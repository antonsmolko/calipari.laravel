<?php

namespace App\Notifications;


use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\SlackMessage;
use Illuminate\Notifications\Notification;

class FeedbackReceiveNotification extends Notification
{
    use Queueable;

    private array $formData;
    private string $emoji;

    /**
     * FeedbackReceiveNotification constructor.
     * @param array $formData
     * @param string $emoji
     */
    public function __construct(array $formData, string $emoji = 'incoming_envelope')
    {
        $this->formData = $formData;
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

        return (new SlackMessage)
            ->from('calipari.ru', ':' . $this->emoji . ':')
            ->success()
            ->content('Форма обратной связи | ' . $this->formData['page'])
            ->attachment(function ($attachment) {
                /** Не форматировать. Оставить так. !!! */
                $attachment
                    ->content(
'*Имя*  ' . $this->formData['name'] . '
*Телефон*  ' . $this->formData['phone'] . '
*Сообщение*
' .$this->formData['message'])
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
