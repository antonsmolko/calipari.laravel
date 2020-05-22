<?php


namespace App\Services\Page\Handlers;


use App\Models\Page;
use App\Services\Page\Repositories\CmsPageRepository;
use Illuminate\Support\Arr;

class UpdateHandler
{
    private CmsPageRepository $repository;

    /**
     * UpdateHandler constructor.
     * @param CmsPageRepository $repository
     */
    public function __construct(CmsPageRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param Page $page
     * @param array $updateData
     * @return mixed
     */
    public function handle(Page $page, array $updateData)
    {
        if (array_key_exists('image', $updateData) && !empty($updateData['image'])) {
            $attributes = $page->image_path
                ? uploader()->change($updateData['image'], $page->image_path)
                : uploader()->upload($updateData['image']);

            $updateData = Arr::add($updateData, 'image_path', $attributes['path']);
        }

        $updateData = Arr::except($updateData, ['image']);

        return $this->repository->update($page, $updateData);
    }
}
