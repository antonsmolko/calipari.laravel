<?php


namespace App\Services\Review\Handlers;


use Illuminate\Support\Facades\Validator;
use Intervention\Image\Facades\Image;

class ImageUploadHandler
{

    /**
     * @param array $files
     * @return array|string[]
     * @throws \Illuminate\Validation\ValidationException
     */
    public function handle(array $files)
    {
        $this->imageValidate($files);

        ini_set("memory_limit", "256M");

        return array_map(function ($file) {
            $tmpName = $file->getPath() . '/' . $file->getFilename();
            $img = Image::make($tmpName)
                ->resize(1600, 1600, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })
                ->save($file->getClientOriginalName(), 75);

            return interventionUploader()->upload($img);
        }, $files);
    }

    /**
     * @param array $files
     * @throws \Illuminate\Validation\ValidationException
     */
    private function imageValidate(array $files)
    {
        $rules = [
            'file' => 'required|file|image|mimes:' . config('validation.upload.mimes') . '|max:' . config('validation.upload.max_size'),
        ];

        array_walk($files, function ($file) use ($rules) {
            $validator = Validator::make(['file' => $file], $rules, [
                'file' => __('image_validation.wrong_file_format', [
                    'file_name' => $file->getClientOriginalName()
                ])
            ]);
            $validator->validate();
        });

    }

}
