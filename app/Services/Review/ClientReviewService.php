<?php


namespace App\Services\Review;


use App\Events\Models\Order\OrderFeedbackReceived;
use App\Services\Base\Resource\ClientBaseResourceService;
use App\Services\Cache\Key;
use App\Services\Cache\KeyManager as CacheKeyManager;
use App\Services\Cache\Tag;
use App\Services\Cache\TTL;
use App\Services\Order\Repositories\ClientOrderRepository;
use App\Services\Review\Handlers\ImageUploadHandler;
use App\Services\Review\Repositories\ClientReviewRepository;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Cache;

class ClientReviewService extends ClientBaseResourceService
{
    private ClientOrderRepository $orderRepository;
    private ImageUploadHandler $imageUploadHandler;

    /**
     * ClientReviewService constructor.
     * @param ClientReviewRepository $repository
     * @param ClientOrderRepository $orderRepository
     * @param CacheKeyManager $cacheKeyManager
     * @param ImageUploadHandler $imageUploadHandler
     */
    public function __construct(
        ClientReviewRepository $repository,
        ClientOrderRepository $orderRepository,
        CacheKeyManager $cacheKeyManager,
        ImageUploadHandler $imageUploadHandler
    )
    {
        parent::__construct($repository, $cacheKeyManager);
        $this->orderRepository = $orderRepository;
        $this->imageUploadHandler = $imageUploadHandler;
    }

    /**
     * @param array $storeData
     * @return array
     */
    public function store(array $storeData): array
    {
        try {
            $orderNumber = decrypt($storeData['hash']);
        } catch (DecryptException $e) {
            abort(404);
        }

        $order = $this->orderRepository->getItemByNumber($orderNumber);

        $storeData['images'] = !empty($storeData['images'])
            ? json_encode($this->imageUploadHandler->handle($storeData['images']))
            : null;

        $this->orderRepository->createReview($order, [
            'order_id' => $order->id,
            'comment' => $storeData['comment'],
            'quality_rate' => $storeData['quality_rate'],
            'service_rate' => $storeData['service_rate'],
            'images' => $storeData['images']
        ]);

        event(new OrderFeedbackReceived($order));

        return [
            'message' => __('common.order_feedback_received_successfully', ['order_number' => $order->number]),
            'status' => 'success',
            'timeout' => 10000
        ];
    }

    /**
     * @param array $requestData
     * @return mixed
     */
    public function getItems(array $requestData)
    {
        $key = $this->cacheKeyManager
            ->getResourceKey(Key::REVIEWS_PREFIX, ['client', 'list'], ['pagination' => $requestData]);

        return Cache::tags(Tag::REVIEWS_TAG)
            ->remember(
                $key,
                TTL::REVIEWS_TTL,
                fn () => $this->repository->getItems($requestData));
    }
}
