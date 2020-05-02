<?php


namespace App\Services\Format\Repositories;


use App\Models\Format;
use Illuminate\Database\Eloquent\Collection;

class CmsFormatRepository
{
    /**
     * @return Collection
     */
    public function index(): Collection
    {
        return Format::all();
    }
}
