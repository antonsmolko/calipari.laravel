<?php


namespace App\Services\Post\Handlers;


use App\Models\Post;
use App\Services\Post\Repositories\CmsPostRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsPostRepository $repository;

    /**
     * UpdateHandler constructor.
     * @param CmsPostRepository $repository
     */
    public function __construct(CmsPostRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Post $item
     * @param array $updateData
     * @return Post
     */
    public function handle(Post $item, array $updateData)
    {
        if(array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $uploadAttributes = uploader()->change($updateData['image'], $item->image_path);
            $updateData = Arr::add(Arr::except($updateData, ['image']), 'image_path', $uploadAttributes['path']);
        }

        return $this->repository->update($item, Arr::except($updateData, ['image']));
    }
}
