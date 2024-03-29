<?php

namespace App\Mail\Order;

use App\Services\Setting\CmsSettingService;
use Barryvdh\DomPDF\PDF;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Processing extends Mailable
{
    use Queueable, SerializesModels;

    public array $order;
    public PDF $pdf;
    public string $companyEmail;

    /**
     * Processing constructor.
     * @param array $order
     * @param PDF $pdf
     * @param CmsSettingService $settingService
     */
    public function __construct(array $order, PDF $pdf, CmsSettingService $settingService)
    {
        $this->order = $order;
        $this->pdf = $pdf;
        $this->companyEmail = $settingService->getItemValueByKey('company_email');
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
            ->subject('Заказ № ' . $this->order['number'] . ' размещен')
            ->markdown('mail.order.processing')
            ->attachData($this->pdf->output(), $fileName)
            ->with($this->companyEmail)
            ->with($this->order);
    }
}
