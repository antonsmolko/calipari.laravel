<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class MailNewEmailConfirmation extends Notification
{
    use Queueable;

//    public $user;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $link = url('api/auth/user/confirm/' . $notifiable->emailConfirmation->token);
        return ( new MailMessage )
            ->subject( 'Подтверждение смены адреса электронной почты')
            ->markdown('mail.auth.email-change-confirmation', [
                'link' => $link,
                'name' => $notifiable->name
            ]);
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
