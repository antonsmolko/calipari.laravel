<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ChangeOrderStatus extends Mailable
{
    use Queueable, SerializesModels;

    public array $order;

    /**
     * OrderInProcess constructor.
     * @param array $order
     */
    public function __construct(array $order)
    {
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from(['address' => env('MAIL_FROM_ADDRESS'), 'name' => env('APP_NAME')])
            ->subject('Смена статуса заказа # ' . $this->order['number'])
            ->view('emails.orders.status')
            ->with($this->order);
    }
}
