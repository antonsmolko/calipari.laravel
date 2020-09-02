<?php


namespace App\Services\Sale\Handlers;


use App\Models\Sale;
use App\Services\Sale\Repositories\CmsSaleRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsSaleRepository $repository;

    /**
     * UpdateHandler constructor.
     * @param CmsSaleRepository $repository
     */
    public function __construct(CmsSaleRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Sale $item
     * @param array $updateData
     * @return mixed
     */
    public function handle(Sale $item, array $updateData)
    {
        if (array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $uploadAttributes = uploader()->change($updateData['image'], $item->image_path);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadAttributes['path']);
        }

        return $this->repository->update($item, $updateData);
    }
}
