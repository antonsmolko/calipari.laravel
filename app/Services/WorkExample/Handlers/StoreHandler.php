<?php


namespace App\Services\WorkExample\Handlers;


use App\Models\WorkExample;
use App\Services\WorkExample\Repositories\CmsWorkExampleRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CmsWorkExampleRepository $repository;

    public function __construct(CmsWorkExampleRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return WorkExample
     */
    public function handle(array $storeData): WorkExample
    {
        $imageAttributes = uploader()->upload($storeData['image']);

        $storeData = Arr::collapse([
            Arr::except($storeData, ['image']),
            ['image_path' => $imageAttributes['path']]
        ]);

        return $this->repository->store($storeData);
    }
}
