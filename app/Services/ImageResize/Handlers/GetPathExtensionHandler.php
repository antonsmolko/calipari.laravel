<?php


namespace App\Services\ImageResize\Handlers;

use File;

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
        $filePath = $this->storagePath . '/' . implode('/', [$path[0], $path[0] . $path[1] . $path[2], $path]);

        dump('filePath');
        dump($filePath);
        if (!File::isFile($filePath)) {
            $filePath = $this->noImagePath;
        }

        list(, $ext) = explode('.', $path);

        return [$filePath, $ext];
    }
}
