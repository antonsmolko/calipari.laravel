<?php


namespace App\Services\ColorCollection\Handlers;


use App\Models\ColorCollection;
use App\Services\ColorCollection\Repositories\CmsColorCollectionRepository;

class UpdateHandler
{
    private CmsColorCollectionRepository $repository;

    /**
     * StoreHandler constructor.
     * @param CmsColorCollectionRepository $repository
     */
    public function __construct(CmsColorCollectionRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param ColorCollection $colorCollection
     * @param array $updateData
     * @return mixed
     */
    public function handle(ColorCollection $colorCollection, array $updateData)
    {
        if (!$colorCollection->images()->count()) {
            $updateData['publish'] = 0;
        }

        return $this->repository->update($colorCollection, $updateData);
    }
}
