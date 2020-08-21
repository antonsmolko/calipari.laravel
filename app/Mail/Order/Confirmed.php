<?php

namespace App\Mail\Order;

use App\Services\Setting\CmsSettingService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Confirmed extends Mailable
{
    use Queueable, SerializesModels;

    public array $order;
    public string $companyEmail;
    public string $link;

    /**
     * Processing constructor.
     * @param array $order
     * @param CmsSettingService $settingService
     */
    public function __construct(array $order, CmsSettingService $settingService)
    {
        $this->order = $order;
        $this->companyEmail = $settingService->getItemValueByKey('company_email');
        $this->link = '/payment/?hash=' . $this->order['hash_number'];
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
            ->subject('Заказ № ' . $this->order['number'] . ' подтвержден')
            ->markdown('mail.order.confirmed')
            ->with($this->companyEmail)
            ->with($this->order)
            ->with($this->link);
    }
}
