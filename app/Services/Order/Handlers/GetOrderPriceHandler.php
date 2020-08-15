<?php


namespace App\Services\Order\Handlers;


use Illuminate\Support\Collection;

class GetOrderPriceHandler
{
    /**
     * @param Collection $orderItems
     * @param int $deliveryPrice
     * @return int
     */
    public function handle(Collection $orderItems, int $deliveryPrice): int
    {
        return $orderItems->reduce(function ($carry, $item) {
            $carry += $item->price * $item->qty + getAddedCostsAmount(json_decode(json_encode($item), true));

            return $carry;
        }, $deliveryPrice);
    }
}
