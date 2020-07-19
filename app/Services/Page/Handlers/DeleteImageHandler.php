<?php


namespace App\Services\Page\Handlers;


use App\Models\Page;
use App\Services\Page\Repositories\CmsPageRepository;

class DeleteImageHandler
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
     * @return mixed
     */
    public function handle(Page $page)
    {
        if ($page->image_path) {
            uploader()->remove($page->image_path, true);
        }

        return $this->repository->update($page, ['image_path' => null]);
    }
}
