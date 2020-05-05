<?php


namespace App\Services\Search\Repository;


use App\Models\Tag;

class SearchRepository
{
    public function getSearchableTags(string $search)
    {
//        $tags = Tag::all();
//        $tags->searchable();
        return Tag::search($search)
            ->where('publish', Tag::PUBLISHED)
            ->get();
    }
}
