<?php


namespace App\Services\PurchaseStep\Handlers;


use App\Models\PurchaseStep;
use App\Services\PurchaseStep\Repositories\CmsPurchaseStepRepository;

class DeleteHandler
{
    private CmsPurchaseStepRepository $repository;

    /**
     * DeleteHandler constructor.
     * @param CmsPurchaseStepRepository $repository
     */
    public function __construct(CmsPurchaseStepRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param PurchaseStep $item
     * @return int
     * @throws \Exception
     */
    public function handle(PurchaseStep $item): int
    {
        uploader()->remove($item['image_path']);

        return $this->repository->destroy($item);
    }
}
