<?php


namespace App\Services\Tag\Repositories;

use App\Models\Tag;
use App\Services\SubCategory\Repositories\SubCategoryRepository;
use App\Services\Tag\Resources\TagFromEdit as TagFromEditResource;

class CmsTagRepository extends SubCategoryRepository
{
    /**
     * TagRepository constructor.
     * @param Tag $model
     */
    public function __construct(Tag $model)
    {
        $this->model = $model;
        $this->table = 'tags';
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItemFromEdit(int $id)
    {
        return new TagFromEditResource($this->model::findOrFail($id));
    }
}
