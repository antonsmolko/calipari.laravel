<?php


namespace App\Services\Cache;


use Illuminate\Foundation\Http\FormRequest;

class KeyManager
{
    /**
     * @param array $params
     * @return string
     */
    public function getCategoriesKey(array $params): string
    {
        return $this->getKey(Key::CATEGORIES_PREFIX, $this->generateParamsKeySuffix($params));
    }

    /**
     * @param array $params
     * @param array|null $query
     * @return string
     */
    public function getImagesKey(array $params, array $query = null): string
    {
        if ($query) {
            $queryString = implode('|', array_map(function ($paramKey, $paramValue) {
                return $paramKey . ':' . implode(',', array_map(function($key, $value) {
                    return $key . '_' . $value;
                }, array_keys($paramValue), array_values($paramValue)));
            }, array_keys($query), array_values($query)));


            $params = [...$params, $queryString];
        }

        return $this->getKey(Key::IMAGES_PREFIX, $this->generateParamsKeySuffix($params));
    }

    /**
     * @param string $prefix
     * @param array $params
     * @return string
     */
    public function getResourceKey(string $prefix, array $params): string
    {
        return $this->getKey($prefix, $this->generateParamsKeySuffix($params));
    }

    /**
     * @param FormRequest $request
     * @param array|null $keys
     * @return string
     */
    private function generateRequestKeySuffix(FormRequest $request, ?array $keys = null): string
    {
        return $this->generateParamsKeySuffix([
            $request->fullUrl(),
            $request->all($keys),
        ]);
    }

    /**
     * @param array $params
     * @return string
     */
    private function generateParamsKeySuffix(array $params): string
    {
        return md5(implode('|', $params));
    }

    /**
     * @param string $prefix
     * @param string|null $suffix
     * @return string
     */
    private function getKey(string $prefix, ?string $suffix = null): string
    {
        if (!$suffix) {
            return $prefix;
        }

        return sprintf('%s|%s', $prefix, $suffix);
    }
}
