<?php


namespace App\Services\ImageResize\Handlers;

use File;
use Illuminate\Support\Facades\Storage;

class GetPathExtensionHandler
{
    private string $storagePath;
    private string $noImagePath;

    /**
     * GetPathExtensionHandler constructor.
     */
    public function __construct()
    {
        $this->storagePath = config('uploads.image_storage_path');
        $this->noImagePath = config('uploads.no_image_path');
    }

    /**
     * @param string $path
     * @return array
     */
    public function handle(string $path): array
    {
        $filePath = 'public/uploads/images' . '/' . implode('/', [$path[0], $path[0] . $path[1] . $path[2], $path]);

        if (!Storage::exists($filePath)) {
            $filePath = $this->noImagePath;
        }

        list(, $ext) = explode('.', $path);

        return [Storage::get($filePath), $ext];
    }
}
