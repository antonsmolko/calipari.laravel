<?php


namespace App\Services\Card\Handlers;


use Illuminate\Database\Eloquent\Collection;

class GetInfoCardsHandler
{
    /**
     * @param Collection $cards
     * @return mixed
     */
    public function handle(Collection $cards)
    {
        return $cards->pluck('info')->map(fn($card) => json_decode($card, true));
    }
}
