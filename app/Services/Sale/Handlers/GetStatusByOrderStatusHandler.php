<?php


namespace App\Services\Sale\Handlers;


use App\Models\Sale;

class GetStatusByOrderStatusHandler
{
    /**
     * @param string $status
     * @return int|null
     */
    public function handle(string $status)
    {
        switch ($status) {
            case 'processing':
                return Sale::IN_ORDER;
            case 'canceled':
                return Sale::FOR_SALE;
            case 'paid':
                return Sale::SOLD;
            default:
                return null;
        }
    }
}
