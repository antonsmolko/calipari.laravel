<?php


namespace App\Services\PurchaseStep\Handlers;


use App\Models\PurchaseStep;
use App\Services\PurchaseStep\Repositories\CmsPurchaseStepRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsPurchaseStepRepository $repository;

    /**
     * UpdateHandler constructor.
     * @param CmsPurchaseStepRepository $repository
     */
    public function __construct(CmsPurchaseStepRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param PurchaseStep $item
     * @param array $updateData
     * @return PurchaseStep
     */
    public function handle(PurchaseStep $item, array $updateData): PurchaseStep
    {
        if(array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $uploadAttributes = uploader()->change($updateData['image'], $item->image_path);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadAttributes['path']);
        }

        return $this->repository->update($item, Arr::except($updateData, ['image']));
    }
}
