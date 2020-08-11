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
     * @param array $storeItemData
     * @return mixed
     */
    public function handle(array $storeItemData)
    {
        if (!empty($storeItemData['added_costs'])) {
            $storeItemData['added_costs'] = json_decode($storeItemData['added_costs'], true);
        }

        $image = $this->imageRepository->getItem($storeItemData['image_id']);
        $storeItemData = Arr::collapse([$storeItemData, [
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

        $user = $this->userRepository->getItemByEmail($storeItemData['email']);
        if ($user) {
            $storeData['user_id'] = $user->id;
            $storeItemData = Arr::except($storeItemData, ['email', 'name']);
        }

        return $user
            ? $this->clientRepository->update($user, $storeItemData)
            : $this->repository->store(['items' => json_encode($storeItemData, true)]);
    }
}
