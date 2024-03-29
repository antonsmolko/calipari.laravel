<?php

use App\Services\Uploader\ImageValidationBuilder;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\File;
use Illuminate\Http\UploadedFile;
use App\Services\Uploader\Uploader;
use Faker\Generator as Faker;
use Tymon\JWTAuth\JWTAuth;

if (! function_exists('getUploadedFileFromPath')) {
    function getUploadedFileFromPath(string $path, bool $public = false)
    {
        $name = File::name($path);
        $extension = File::extension($path);
        $originalName = $name . '.' . $extension;
        $mimeType = File::mimeType($path);
        $error = null;
        $test = $public;

        return new UploadedFile($path, $originalName, $mimeType, $error, $test);
    }
}

if (! function_exists('uploader')) {
    function uploader()
    {
        return app()->make(Uploader::class);
    }
}

if (! function_exists('interventionUploader')) {
    function interventionUploader()
    {
        return app()->make(\App\Services\Uploader\InterventionImageUploader::class);
    }
}

if (! function_exists('imageValidationBuilder')) {
    function imageValidationBuilder()
    {
        return app()->make(ImageValidationBuilder::class);
    }
}

if (! function_exists('isImageValid')) {
    function isImageValid($upload, array $uploadRules = null)
    {
        if (!$upload) {
            return false;
        }
        $rules = $uploadRules ?? config('uploads.image_upload_rules');
        $fileProps = [
            "original_name" => File::name($upload),
            "extension" => File::extension($upload),
            "mime" => File::mimeType($upload),
            "size" => File::size($upload)
        ];

        return imageValidationBuilder()
            ->init($fileProps, $rules, false)
            ->isAllowExtension()
            ->isAllowMime()
            ->isAllowMinSize()
//            ->isAllowMaxSize()
            ->isAllow();
    }
}

if (! function_exists('faker')) {
    function faker()
    {
        return app()->make(Faker::class);
    }
}

if (! function_exists('getFakerImage')) {
    /**
     * @param int $with
     * @param int $height
     * @param string|null $category
     * @return UploadedFile|null
     */
    function getFakerImage(int $with = 600, int $height = 480, string $category = null)
    {
        $uploadedImage = null;

        while (!isImageValid($uploadedImage)) {
            $uploadedImage = getUploadedFileFromPath(faker()->image(null, $with, $height, $category), true);
        }

        return $uploadedImage;
    }
}

if (! function_exists('getFakerImageFromLocal')) {
    /**
     * @param array $images
     * @param string $seedsUploadImageDir
     * @param string $seedsImageDir
     * @return UploadedFile|null
     */
    function getFakerImageFromLocal(array $images, string $seedsUploadImageDir, string $seedsImageDir)
    {
        $firstImagesIndex = key($images);

        $randIndex = rand($firstImagesIndex, count($images) - 1);
        $randImage = $images[$randIndex];

        $sourceImage = $seedsUploadImageDir . '/' . $randImage;
        $destImage = $seedsImageDir . $randImage;

        copy($sourceImage, $destImage);

        return isImageValid($destImage)
            ? getUploadedFileFromPath($destImage, true)
            : null;
    }
}

if (! function_exists('copyImagesToSeedStorageDir')) {
    /**
     * @param array $images
     * @param string $sourceDir
     * @param string $destDir
     */
    function copyImagesToSeedStorageDir(array $images, string $sourceDir, string $destDir)
    {
        array_walk($images, function ($image) use ($sourceDir, $destDir) {
            $sourceImage = $sourceDir . $image;
            $destImage = $destDir . $image;
            ImageOptimizer::optimize($sourceImage);

            copy($sourceImage, $destImage);
        });
    }
}

if (! function_exists('getImageByNameFromLocal')) {
    /**
     * @param array $images
     * @param string $name
     * @param string $subDir
     * @param string $seedsImageDir
     * @return UploadedFile|null
     */
    function getImageByNameFromLocal(array $images, string $name, string $subDir, string $seedsImageDir)
    {
//        list($targetName) = explode('.', $name);

        $image = Arr::first($images, function ($value, $key) use ($name) {
            list($baseName) = explode( '.', $value);

            return $baseName === $name;
        });

        if (!$image) {
            abort(404, 'SeedsException: Image with name "' . $name . '" not found');
        }

        $sourceImage = config('seed_settings.seeds_data_path') . $subDir . '/' . $image;
        $destImage = $seedsImageDir . $image;

        ImageOptimizer::optimize($destImage);

        copy($sourceImage, $destImage);

        return isImageValid($destImage)
            ? getUploadedFileFromPath($destImage, true)
            : null;
    }
}

if (! function_exists('getImagesFromLocal')) {
    /**
     * @param string $dir
     * @return array
     */
    function getImagesFromLocal(string $dir): array
    {
        $files = scandir($dir);

        return array_filter($files, function ($file) use ($dir) {
            return isImageValid(($dir . '/' . $file));
        });
    }
}

if (! function_exists('jwtAuth')) {
    function jwtAuth()
    {
        return app()->make(JWTAuth::class);
    }
}

if (! function_exists('getImageArticle')) {
    function getImageArticle(int $id)
    {
        return str_pad($id, config('settings.image_article_length'), "0", STR_PAD_LEFT);
    }
}

if (! function_exists('wordsDeclension')) {
    function wordsDeclension(int $n, array $words)
    {
        return ( $words[($n = ($n = $n % 100) > 19 ? ($n % 10) : $n) == 1 ? 0 : (($n > 1 && $n <= 4) ? 1 : 2 )]);
    }
}

if (! function_exists('phoneFormat')) {
//    function phoneFormat($phone, $format, $mask = '#')
    function phoneFormat($input)
    {
//        $phone = preg_replace('/[^0-9]/', '', $phone);
//
//        if (is_array($format)) {
//            if (array_key_exists(strlen($phone), $format)) {
//                $format = $format[strlen($phone)];
//            } else {
//                return false;
//            }
//        }
//
//        $pattern = '/' . str_repeat('([0-9])?', substr_count($format, $mask)) . '(.*)/';
//
//        $format = preg_replace_callback(
//            str_replace('#', $mask, '/([#])/'),
//            function () use (&$counter) {
//                return '${' . (++$counter) . '}';
//            },
//            $format
//        );
//
//        return ($phone) ? trim(preg_replace($pattern, $format, $phone, 1)) : false;
        $trimInput = trim($input); // обрезаем пробелы
        $patterns = [];
        $patterns[0] = '/^\+7/'; // заменяем +7 на 8
        $patterns[1] = '/[^\d]/'; // удаляем все символы кроме цифр - '(', ')', '-', ' '
        $replacements = [];
        $replacements[0] = '8';
        $replacements[1] = '';

        return preg_replace($patterns, $replacements, $trimInput);
    }
}

if (! function_exists('addImagesFromResource')) {
    function addImagesFromResource(\App\Models\Model $item, array $files)
    {
        $images = json_decode($item->images, true) ?? [];
        $lastIndex = !empty($images) ? last($images)['index'] : 0;

        foreach ($files as $file) {
            $imageAttributes = uploader()->upload($file);

            array_push($images, [
                'index' => ++$lastIndex,
                'path' => $imageAttributes['path']
            ]);
        }

        return $images;
    }
}

if (! function_exists('getCartItemPath')) {
    /**
     * @param $item
     * @param array|null $filter
     * @return string
     */
    function getCartItemPath($item, array $filter)
    {
        $filterData = $filter;
        $w = $item['width_px'];
        $h = $item['height_px'];
        $x = $item['x'];
        $y = $item['y'];
        $flipH = (int) $filterData['flipH'];
        $flipV = (int) $filterData['flipV'];
        $colorize = (bool) $filterData['colorize'] ? $filterData['colorize'] : 0;
        $imagePath = $item['image_path'];

        return  '/' . $w .
            '/' . $h .
            '/' . $x .
            '/' . $y .
            '/' . $flipH .
            '/' . $flipV .
            '/' . $colorize .
            '/' . $imagePath;
    }
}

if (! function_exists('getOrderItemPath')) {
    /**
     * @param $item
     * @return string
     */
    function getOrderItemPath($item)
    {
        $filterData = $item->getFilter();
        $w = $item->width_px;
        $h = $item->height_px;
        $x = $item->x;
        $y = $item->y;
        $flipH = (int) $filterData['flipH'];
        $flipV = (int) $filterData['flipV'];
        $colorize = (bool) $filterData['colorize'] ? $filterData['colorize'] : 0;
        $imagePath = $item->image ? $item->image->path : 'placeholder.jpg';

        return  '/' . $w .
                '/' . $h .
                '/' . $x .
                '/' . $y .
                '/' . $flipH .
                '/' . $flipV .
                '/' . $colorize .
                '/' . $imagePath;
    }
}

if (! function_exists('getRandomEmoji')) {
    /**
     * @param array $emoji
     * @return string
     */
    function getRandomEmoji(array $emoji): string
    {
        $randIndex = array_rand($emoji);

        return $emoji[$randIndex];
    }
}

if (! function_exists('getS3Path')) {
    /**
     * @param string $name
     * @return string
     */
    function getImagePath(string $name): string
    {
        return getBaseImagePath($name) . '/' . $name;
    }
}

if (! function_exists('getBaseImagePath')) {
    /**
     * @param string $name
     * @return string
     */
    function getBaseImagePath(string $name): string
    {
        return substr($name, 0, 1) . '/' . substr($name, 0, 3);
    }
}

if (! function_exists('getItemPrice')) {
    /**
     * @param int $width
     * @param int $height
     * @param int $texturePrice
     * @param int $discount
     * @return int
     */
    function getItemPrice(int $width, int $height, int $texturePrice, int $discount = 0): int
    {
        return ceil($width * $height / 1e6 * $texturePrice) * (100 - $discount);
    }
}

if (! function_exists('getFilterString')) {
    /**
     * @param array $filter
     * @return string
     */
    function getFilterString(array $filter): string
    {
        $activeKeys = array_keys(array_filter($filter, fn ($item) => $item));
        $filterSet = config('settings.filter_set');

        $filtersMap = array_reduce($activeKeys, function ($carry, $key) use ($filterSet, $filter) {
            if (!Arr::exists($filterSet, $key)) {
                return $carry;
            }

            if (is_array($filterSet[$key])) {
                if (in_array($filter[$key], $filterSet[$key])) {
                    $carry[] = $filterSet[$filter[$key]];
                }
            } else {
                $carry[] = $filterSet[$key];
            }

            return $carry;
        }, []);

        return implode(', ', $filtersMap);
    }
}

if (! function_exists('getAddedCostsAmount')) {
    /**
     * @param array $cartItemDetails
     * @return float|int
     */
    function getAddedCostsAmount(array $cartItemDetails)
    {
        return !empty($cartItemDetails['added_costs'])
            ? array_sum($cartItemDetails['added_costs'])
            : 0;
    }
}

if (! function_exists('getStripesCount')) {
    /**
     * @param int $projectWidth
     * @param int $textureWidth
     * @param bool $seamless
     * @return int
     */
    function getStripesCount(int $projectWidth, int $textureWidth, bool $seamless = false): int
    {
        return $seamless ? 1 : ceil($projectWidth / $textureWidth);
    }
}

if (! function_exists('getOrderItemDimensions')) {
    /**
     * @param int $width
     * @param int $height
     * @return string
     */
    function getOrderItemDimensions(int $width, int $height): string
    {
        return $width . ' см × ' . $height . ' см';
    }
}

if (! function_exists('parseCsv')) {
    /**
     * @param string $filePath
     * @return array|null
     */
    function parseCsv(string $filePath)
    {
        if (File::exists($filePath) && File::isReadable($filePath) && File::isFile($filePath)) {
            $csv = array_map('str_getcsv', file($filePath));
            array_walk($csv, function(&$a) use ($csv) {
                $a = array_combine($csv[0], $a);
            });
            array_shift($csv);

            return $csv;
        }

        return null;
    }
}

if (! function_exists('seedProcessOfLoadingImages')) {
    /**
     * @param string $seedImagesDir
     * @param string $csvFileName
     * @param \Illuminate\Database\Seeder $seeder
     * @param string $callback
     */
    function seedProcessOfLoadingImages(
        string $seedImagesDir,
        string $csvFileName,
        \Illuminate\Database\Seeder $seeder,
        string $callback)
    {
        // Донорская директория с изображениями
        $seedsUploadImageDir = config('seed_settings.seeds_data_path') . $seedImagesDir. '/';

        // Временная донорская директория в storage
        // (заполняется перед загрузкой изображений в storage/uploads)
        $seedsImagePath = config('seed_settings.seeds_uploads_path');
        Storage::deleteDirectory($seedsImagePath);
        Storage::makeDirectory($seedsImagePath);

        // Информация о всех изображениях в seeds_data в виде ['1' => '72.jpg']
        $seedImagesData = getImagesFromLocal($seedsUploadImageDir);

        // Абсолютный путь до временной донорской директории в storage
        // (заполняется перед загрузкой изображений в storage/uploads)
        $storageSeedsImageDir = storage_path("app/" . $seedsImagePath);

        // Копирование изображений из app/seed_data/images в app/storage/app/seed_uploads
        copyImagesToSeedStorageDir($seedImagesData, $seedsUploadImageDir, $storageSeedsImageDir);

        $csvPath = base_path(config('seed_settings.seeds_data_path')) . 'csv/' . $csvFileName . '.csv';
        $csv = parseCsv($csvPath);

        array_walk(
            $csv,
            fn ($item) => call_user_func_array(
                [$seeder, $callback], [$item, $seedImagesData, $storageSeedsImageDir])
        );

        Storage::deleteDirectory($seedsImagePath);
    }
}

if (! function_exists('getSeedCsv')) {
    /**
     * @param string $fileName
     * @return array|null
     */
    function getSeedCsv(string $fileName)
    {
        $seedDataPath = base_path(config('seed_settings.seeds_data_path'));
        $csvPath = $seedDataPath . 'csv/' . $fileName . '.csv';

        return parseCsv($csvPath);
    }
}
