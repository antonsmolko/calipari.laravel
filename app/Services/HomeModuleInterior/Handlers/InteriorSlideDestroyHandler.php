<?php


namespace App\Services\HomeModuleInterior\Handlers;


use App\Models\HomeModuleInteriorSlide;
use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorSlideRepository;

class InteriorSlideDestroyHandler
{
    private CmsHomeModuleInteriorSlideRepository $repository;

    /**
     * InteriorSlideDestroyHandler constructor.
     * @param CmsHomeModuleInteriorSlideRepository $repository
     */
    public function __construct(CmsHomeModuleInteriorSlideRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param HomeModuleInteriorSlide $item
     * @return int
     */
    public function handle(HomeModuleInteriorSlide $item)
    {
        uploader()->remove($item->image_path);

        return $this->repository->destroy($item);
    }
}
