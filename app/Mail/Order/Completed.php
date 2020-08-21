<?php

namespace App\Mail\Order;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Completed extends Mailable
{
    use Queueable, SerializesModels;

    public array $order;
    public string $link;

    /**
     * Processing constructor.
     * @param array $order
     */
    public function __construct(array $order)
    {
        $this->order = $order;
        $this->link = '/reviews/create?hash=' . $this->order['hash_number'];
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
            ->subject('Заказ № ' . $this->order['number'] . ' выполнен')
            ->markdown('mail.order.completed')
            ->with($this->order)
            ->with($this->link);
    }
}
