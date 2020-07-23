<?php


namespace App\Services\ImageResize\Handlers;

use Illuminate\Support\Facades\Storage;

class GetPathExtensionHandler
{
    private string $uploadsPath;
    private string $noImagePath;

    /**
     * GetPathExtensionHandler constructor.
     */
    public function __construct()
    {
        $this->uploadsPath = config('uploads.image_upload_path');
        $this->noImagePath = config('uploads.no_image_path');
    }

    /**
     * @param string $path
     * @return array
     */
    public function handle(string $path): array
    {
        $filePath = $this->uploadsPath . '/' . implode('/', [$path[0], $path[0] . $path[1] . $path[2], $path]);

        $file = Storage::exists($filePath)
            ? $filePath
            : $this->noImagePath;

        list(, $ext) = explode('.', $path);

        return [Storage::get($file), $ext];
    }
}
