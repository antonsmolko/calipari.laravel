<?php


namespace App\Services\HomeModuleInterior\Handlers;


use App\Models\HomeModuleInteriorSlide;
use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorSlideRepository;
use Illuminate\Support\Arr;

class InteriorSlideUpdateHandler
{
    private CmsHomeModuleInteriorSlideRepository $repository;

    /**
     * InteriorSlideUpdateHandler constructor.
     * @param CmsHomeModuleInteriorSlideRepository $repository
     */
    public function __construct(CmsHomeModuleInteriorSlideRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param HomeModuleInteriorSlide $item
     * @param array $updateData
     * @return mixed
     */
    public function handle(HomeModuleInteriorSlide $item, array $updateData)
    {
        if(array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $uploadAttributes = uploader()->change($updateData['image'], $item->image_path);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadAttributes['path']);
        }

        return $this->repository->update($item, Arr::except($updateData, ['image']));
    }
}
