<?php

namespace App\Mail\Order;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PartiallyRefunded extends Mailable
{
    use Queueable, SerializesModels;

    public array $order;
    public string $title;
    public string $subTitlePostfix;

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
            ->subject('Заказ № ' . $this->order['number'] . ' частично возмещен')
            ->markdown('mail.order.refunded')
            ->with($this->title, 'ЗАКАЗ ЧАСТИЧНО ВОЗМЕЩЕН')
            ->with($this->subTitlePostfix, 'частично возмещен.')
            ->with($this->order);
    }
}
