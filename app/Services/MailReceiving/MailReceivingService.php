<?php


namespace App\Services\MailReceiving;


use App\Notifications\BackCallReceiveNotification;
use App\Notifications\FeedbackReceiveNotification;
use Illuminate\Support\Facades\Notification;

class MailReceivingService
{
    /**
     * @param array $formData
     * @return string[]
     */
    public function receiveFeedBackForm(array $formData)
    {
        Notification::route('slack', env('SLACK_WEBHOOK_URL_FEEDBACK'))
            ->notify(new FeedbackReceiveNotification($formData));

        return [
            'status' => 'success',
            'message' => __('common.message_sent_successfully')
        ];
    }

    /**
     * @param array $formData
     * @return string[]
     */
    public function receiveBackCallForm(array $formData)
    {
        Notification::route('slack', env('SLACK_WEBHOOK_URL_BACKCALL'))
            ->notify(new BackCallReceiveNotification($formData));

        return [
            'status' => 'success',
            'message' => __('common.message_sent_successfully')
        ];
    }
}
