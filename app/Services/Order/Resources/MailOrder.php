<?php

namespace App\Services\Order\Resources;

use App\Services\OrderItem\Resources\MailOrderItem as MailOrderItemResource;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class MailOrder extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//        $goodQty = $this->getGoodsQtyString($this->items);

        return [
            'number' => $this->number,
            'date' => $this->created_at->format('d.m.Y'),
            'status' => $this->statuses->last()->title,
            'items' => MailOrderItemResource::collection($this->items),
            'delivery' => json_decode($this->delivery, true),
            'customer' => json_decode($this->customer, true),
            'goodsQty' => '$goodQty',
            'price' => $this->price,
            'comment' => $this->comment
        ];
    }
//
//    /**
//     * @param Collection $items
//     * @return string
//     */
//    private function getGoodsQtyString(Collection $items): string
//    {
//        $qty = $this->getGoodsQty($items);
//
//        return $qty . ' ' . wordsDeclension($qty, [
//                'ТОВАР',
//                'ТОВАРА',
//                'ТОВАРОВ'
//            ]);
//    }
//
//    /**
//     * @param Collection $items
//     * @return int
//     */
//    private function getGoodsQty(Collection $items): int
//    {
//        return $items->reduce(fn($carry, $item) => $carry + $item['qty'], 0);
//    }
}
