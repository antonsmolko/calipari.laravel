<?php


namespace App\Services\HomeModuleInterior\Handlers;


use App\Models\HomeModuleInterior;
use App\Services\HomeModuleInterior\Repositories\CmsHomeModuleInteriorRepository;
use Illuminate\Support\Arr;

class InteriorDestroyHandler
{
    private CmsHomeModuleInteriorRepository $repository;
    private InteriorSlideDestroyHandler $slideDestroyHandler;

    /**
     * InteriorDestroyHandler constructor.
     * @param CmsHomeModuleInteriorRepository $repository
     * @param InteriorSlideDestroyHandler $slideDestroyHandler
     */
    public function __construct(
        CmsHomeModuleInteriorRepository $repository,
        InteriorSlideDestroyHandler $slideDestroyHandler
    )
    {
        $this->repository = $repository;
        $this->slideDestroyHandler = $slideDestroyHandler;
    }

    /**
     * @param HomeModuleInterior $item
     * @return mixed
     */
    public function handle(HomeModuleInterior $item)
    {
        $item->slides->each(function ($slide) {
            $this->slideDestroyHandler->handle($slide);
        });

        return $this->repository->destroy($item);
    }
}
