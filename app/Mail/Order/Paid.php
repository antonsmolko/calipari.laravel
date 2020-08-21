<?php

namespace App\Mail\Order;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Paid extends Mailable
{
    use Queueable, SerializesModels;

    public array $order;

    /**
     * Processing constructor.
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
            ->subject('Заказ № ' . $this->order['number'] . ' оплачен')
            ->markdown('mail.order.paid')
            ->with($this->order);
    }
}
