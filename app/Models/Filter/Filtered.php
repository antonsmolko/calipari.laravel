<?php


namespace App\Models\Filter;


use Illuminate\Database\Eloquent\Builder;

trait Filtered
{
    public function scopeWhereImageKeysIn($query, array $keys)
    {
        return $query
            ->whereHas('images', fn (Builder $query) => $query
                ->whereIn('id', $keys));
    }

    public function scopeWithImagesCountIn($query, array $keys)
    {
        return $query
            ->withCount(['images' => fn (Builder $query) => $query
                ->whereIn('id', $keys)]);
    }
}
