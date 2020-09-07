<?php


namespace App\Services\Order\Handlers;


use Illuminate\Support\Collection;

class GetOrderPriceHandler
{
    /**
     * @param Collection $orderItems
     * @param int $deliveryPrice
     * @param Collection|null $sales
     * @return int
     */
    public function handle(Collection $orderItems, int $deliveryPrice, Collection $sales = null): int
    {
        $itemsPrice = $orderItems->reduce(function ($carry, $item) {
            $carry += $item['price'] * $item['qty'] + getAddedCostsAmount(json_decode(json_encode($item), true));

            return $carry;
        }, 0);

        $salesPrice = !empty($sales)
            ? $sales->reduce(function ($carry, $sale) {
                $carry += $sale->selling_price;

                return $carry;
            })
            : 0;

        return $itemsPrice + $salesPrice + $deliveryPrice;
    }
}
