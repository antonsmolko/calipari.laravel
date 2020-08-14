<?php

namespace App\Services\Base\Resource\Repositories;


use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

abstract class ClientBaseResourceRepository
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * @return Collection|\Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return $this->model::published()->orderBy('id', 'acs')->get();
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getItem(int $id)
    {
        return $this->model::findOrFail($id);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function getWithTrashed(int $id)
    {
        return $this->model::withTrashed()
            ->where('id', $id)
            ->firstOrFail();
    }
}
