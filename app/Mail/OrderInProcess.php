<?php

namespace App\Mail;

use Barryvdh\DomPDF\PDF;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderInProcess extends Mailable
{
    use Queueable, SerializesModels;

    public array $order;
    public PDF $pdf;

    /**
     * OrderInProcess constructor.
     * @param array $order
     * @param PDF $pdf
     */
    public function __construct(array $order, PDF $pdf)
    {
        $this->order = $order;
        $this->pdf = $pdf;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $fileName = 'order-' . $this->order['number'] . '.pdf';

        return $this
            ->from(['address' => env('MAIL_FROM_ADDRESS'), 'name' => env('APP_NAME')])
            ->subject('Заказ # ' . $this->order['number'])
            ->view('emails.orders.process')
            ->attachData($this->pdf->output(), $fileName)
            ->with($this->order);
    }
}
