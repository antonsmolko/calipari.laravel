<?php

namespace App\Mail\Order;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Refunded extends Mailable
{
    use Queueable, SerializesModels;

    public array $order;
    public string $titlePostfix;

    /**
     * Processing constructor.
     * @param array $order
     */
    public function __construct(array $order)
    {
        $this->order = $order;
        $this->titlePostfix = 'возмещен';
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
            ->subject('Заказ № ' . $this->order['number'] . ' ' . $this->titlePostfix)
            ->markdown('mail.order.refunded')
            ->with($this->titlePostfix)
            ->with($this->order);
    }
}
