<?php


namespace App\Services\Order\Handlers;


class GetOrderCustomerHandler
{
    /**
     * @param array $requestCustomer
     * @return array
     */
    public function handle(array $requestCustomer): array
    {
        return [
            'name' => $this->getFullName($requestCustomer),
            'email' => $requestCustomer['email'],
            'phone' => $requestCustomer['phone']
        ];
    }

    /**
     * @param array $customer
     * @return string
     */
    private function getFullName(array $customer): string
    {
        return $customer['last_name'] . ' ' . $customer['first_name'] . ' ' . $customer['middle_name'];
    }
}
