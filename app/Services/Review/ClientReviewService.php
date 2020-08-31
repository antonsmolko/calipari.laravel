<?php


namespace App\Services\Review;


use App\Events\Models\Order\OrderFeedbackReceived;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\Review\Repositories\ClientReviewRepository;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Mail;

class ClientReviewService extends ClientBaseResourceService
{
    private ClientOrderRepository $orderRepository;
    /**
     * ClientReviewService constructor.
     * @param ClientReviewRepository $repository
     * @param ClientOrderRepository $orderRepository
     * @param CacheKeyManager $cacheKeyManager
     */
    public function __construct(
        ClientReviewRepository $repository,
        ClientOrderRepository $orderRepository,
        CacheKeyManager $cacheKeyManager
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->orderRepository = $orderRepository;
    }

    /**
     * @param array $storeData
     * @return string[]
     */
    public function store(array $storeData): array
    {
        try {
            $orderNumber = decrypt($storeData['hash']);
        } catch (DecryptException $e) {
            abort(404);
        }

        $order = $this->orderRepository->getItemByNumber($orderNumber);

        $this->orderRepository->createReview($order, [
            'order_id' => $order->id,
            'comment' => $storeData['comment'],
            'quality_rate' => $storeData['quality_rate'],
            'service_rate' => $storeData['service_rate'],
        ]);

        event(new OrderFeedbackReceived($order));

        return [
            'message' => __('common.feedback_received_successfully', ['order_number' => $order->number]),
            'status' => 'success',
            'timeout' => 10000
        ];
    }
}
