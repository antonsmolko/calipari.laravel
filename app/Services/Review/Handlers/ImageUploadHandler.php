<?php


namespace App\Services\Review\Handlers;


use Illuminate\Support\Arr;

class ImageUploadHandler
{
    /**
     * @param array $files
     * @return array
     */
    public function handle(array $files): array
    {
        $uploadsData = uploader()->multipleUpload($files);

        return Arr::pluck($uploadsData, 'path');
    }

}
