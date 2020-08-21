<?php

namespace App\Mail\Order;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Canceled extends Mailable
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
            ->subject('Заказ № ' . $this->order['number'] . ' отменен')
            ->markdown('mail.order.canceled')
            ->with($this->order);
    }
}
