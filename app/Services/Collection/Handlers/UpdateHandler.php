<?php


namespace App\Services\Collection\Handlers;


use App\Models\Collection;
use App\Services\Collection\Repositories\CmsCollectionRepository;

class UpdateHandler
{
    private CmsCollectionRepository $repository;

    /**
     * StoreHandler constructor.
     * @param CmsCollectionRepository $repository
     */
    public function __construct(CmsCollectionRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Collection $collection
     * @param array $updateData
     * @return mixed
     */
    public function handle(Collection $collection, array $updateData)
    {
        if (!$collection->images()->count()) {
            $updateData['publish'] = 0;
        }

        return $this->repository->update($collection, $updateData);
    }
}
