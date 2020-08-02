<?php


namespace App\Services\User\Handlers;


class GetSavedCardInfoHandler
{
    /**
     * @param array $paymentMethod
     * @return array
     */
    public function handle(array $paymentMethod): array
    {
        $paymentCard = $paymentMethod['card'];

        return [
            'card_type' => $paymentCard['card_type'],
            'expiry_month' => $paymentCard['expiry_month'],
            'expiry_year' => $paymentCard['expiry_year'],
            'first6' => $paymentCard['first6'],
            'id' => $paymentMethod['id'],
            'issuer_country' => $paymentCard['issuer_country'],
            'last4' => $paymentCard['last4'],
            'title' => $paymentCard['title'],
            'type' => $paymentCard['type']
        ];
    }
}
