<?php


namespace App\Services\Order\Handlers;



use App\Models\Delivery;
use App\Services\CDEK\Handlers\GetPriceHandler;
use App\Services\Delivery\Repositories\CmsDeliveryRepository;
use App\Services\Pickup\Repositories\CmsPickupRepository;

class GetOrderDeliveryHandler
{
    private CmsDeliveryRepository $deliveryRepository;
    private GetPriceHandler $getPriceHandler;
    private CmsPickupRepository $pickupRepository;

    /**
     * GetOrderDeliveryHandler constructor.
     * @param CmsPickupRepository $pickupRepository
     * @param CmsDeliveryRepository $deliveryRepository
     * @param GetPriceHandler $getPriceHandler
     */
    public function __construct(
        CmsPickupRepository $pickupRepository,
        CmsDeliveryRepository $deliveryRepository,
        GetPriceHandler $getPriceHandler
    )
    {
        $this->deliveryRepository = $deliveryRepository;
        $this->getPriceHandler = $getPriceHandler;
        $this->pickupRepository = $pickupRepository;
    }

    /**
     * @param array $requestDelivery
     * @return array
     */
    public function handle(array $requestDelivery): array
    {
        $delivery = $this->deliveryRepository->getItem($requestDelivery['id']);

        return $this->getDeliveryInfo($delivery, $requestDelivery);
    }

    /**
     * @param Delivery $delivery
     * @param array $requestDelivery
     * @return array
     */
    private function getDeliveryInfo(Delivery $delivery, array $requestDelivery): array
    {
        if ($delivery->pickup) {
            return $this->getPickupInfo($delivery->title, $requestDelivery['pickup']);
        }

        if (!empty($requestDelivery['pvz'])) {
            return $this->getCDEKInfo($delivery->title, $requestDelivery);
        }

        return $this->getCDEKCourierInfo($delivery->title, $requestDelivery);
    }

    /**
     * @param int $pickupId
     * @return array
     */
    private function getPickupInfo(string $title, int $pickupId): array
    {
        $pickup = $this->pickupRepository->getItem($pickupId);

        return [
            'title' => $title,
            'locality' => $pickup->locality,
            'address' => $pickup->address,
            'price' => 0
        ];
    }

    /**
     * @param string $title
     * @param array $requestDelivery
     * @return array
     */
    private function getCDEKInfo(string $title, array $requestDelivery): array
    {
        return [
            'title' => $title,
            'locality' => $this->getLocalityString($requestDelivery['locality']),
            'address' => ucfirst($requestDelivery['pvz']['address']),
            'price' => $this->getPrice($requestDelivery['pvz']['postal_code']) ?? $requestDelivery['price']
        ];
    }

    /**
     * @param string $title
     * @param array $requestDelivery
     * @return array
     */
    private function getCDEKCourierInfo(string $title, array $requestDelivery): array
    {
        return [
            'title' => $title,
            'locality' => $this->getLocalityString($requestDelivery['locality']),
            'address' => $requestDelivery['address'],
            'price' => $this->getPrice($requestDelivery['locality']['postCodeArray']) ?? $requestDelivery['price']
        ];
    }

    /**
     * @param string|array $query
     * @return int
     */
    private function getPrice($query): int
    {
        return $this->getPriceHandler->handle($query);
    }

    /**
     * @param array $locality
     * @return string
     */
    private function getLocalityString (array $locality): string
    {
        return $locality['countryName'] . ', ' . $locality['regionName'] . ', ' . $locality['cityName'];
    }
}
