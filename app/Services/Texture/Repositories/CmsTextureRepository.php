<?php


namespace App\Services\Texture\Repositories;

use App\Models\Texture;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;
use Illuminate\Support\Collection;

class CmsTextureRepository extends CmsBaseResourceRepository
{
    /**
     * TextureRepository constructor.
     * @param Texture $model
     */
    public function __construct(Texture $model)
    {
        $this->model = $model;
    }

    /**
     * @return Collection
     */
    public function index(): Collection
    {
        return $this->model::orderBy('order')
            ->withCount('orders')
            ->get();
    }
}
