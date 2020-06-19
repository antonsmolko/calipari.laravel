<?php


namespace App\Services\Post\Handlers;


use App\Models\Post;
use App\Services\Post\Repositories\CmsPostRepository;
use Illuminate\Support\Arr;

class StoreHandler
{
    private CmsPostRepository $repository;

    public function __construct(CmsPostRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param array $storeData
     * @return Post
     */
    public function handle(array $storeData): Post
    {
        $imageAttributes = uploader()->upload($storeData['image']);

        $storeData = Arr::collapse([
            Arr::except($storeData, ['image']),
            ['image_path' => $imageAttributes['path']]
        ]);

        return $this->repository->store($storeData);
    }
}
