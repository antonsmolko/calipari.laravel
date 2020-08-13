<?php


namespace App\Services\CartItem\Repositories;


use App\Models\CartItem;
use App\Services\Base\Resource\Repositories\CmsBaseResourceRepository;

class CmsCartItemRepository extends CmsBaseResourceRepository
{
    public function __construct(CartItem $model)
    {
        $this->model = $model;
    }
}
