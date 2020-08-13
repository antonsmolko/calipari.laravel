<?php


namespace App\Services\Cart\Handlers;


use App\Services\Cart\Repositories\ClientCartRepository;
use App\Services\Cart\Repositories\CmsCartRepository;
use App\Services\Image\Repositories\CmsImageRepository;
use App\Services\User\Repositories\CmsUserRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CmsCartRepository $repository;
    private ClientCartRepository $clientRepository;
    private CmsUserRepository $userRepository;
    private CmsImageRepository $imageRepository;

    /**
     * StoreHandler constructor.
     * @param CmsCartRepository $repository
     * @param ClientCartRepository $clientRepository
     * @param CmsUserRepository $userRepository
     * @param CmsImageRepository $imageRepository
     */
    public function __construct(
        CmsCartRepository $repository,
        ClientCartRepository $clientRepository,
        CmsUserRepository $userRepository,
        CmsImageRepository $imageRepository
    )
    {
        $this->repository = $repository;
        $this->clientRepository = $clientRepository;
        $this->userRepository = $userRepository;
        $this->imageRepository = $imageRepository;
    }

    /**
     * @param array $requestData
     * @return array
     */
    public function handle(array $requestData): array
    {
        $requestEmail = $requestData['email'];
        $item = Arr::except($requestData, ['email', 'name']);

        if (!empty($requestData['added_costs'])) {
            $item['added_costs'] = json_decode($item['added_costs'], true);
        }

        $image = $this->imageRepository->getItem($item['image_id']);
        $item = Arr::collapse([$item, [
            'x' => 0,
            'y' => 0,
            'width_px' => $image->width,
            'height_px' => $image->height,
            'qty' => 1,
            'filter' => [
                'flipH' => false,
                'flipV' => false,
                'colorize' => false
            ]
        ]]);

        $itemsData = [$item];
        $existingCart = $this->repository->getItemByEmail($requestEmail);

        if ($existingCart) {
            $existingCartItems = $existingCart->getItems();
            $itemsData = array_values(collect([...$existingCartItems, $item])
                ->unique('id')
                ->toArray());
        }

        $items = json_encode($itemsData, true);
        $user = $this->userRepository->getItemByEmail($requestEmail);

        $cart = $user
            ? $this->repository->updateByUser($user, [
                'user_id' => $user->id,
                'email' => $requestEmail,
                'items' => $items])
            : $this->repository->updateOrCreate($requestEmail, [
                'email' => $requestEmail,
                'items' => $items]);

        return [$cart, $item];
    }
}
