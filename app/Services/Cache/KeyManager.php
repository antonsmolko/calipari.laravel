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
        return $this->getResourceKey(Key::CATEGORIES_PREFIX, $params);
    }

    /**
     * @param array $params
     * @param array|null $query
     * @return string
     */
    public function getImagesKey(array $params, array $query = null): string
    {
        return $this->getResourceKey(Key::IMAGES_PREFIX, $params, $query);
    }

    /**
     * @param string $prefix
     * @param array $params
     * @param array|null $query
     * @return string
     */
    public function getResourceKey(string $prefix, array $params, array $query = null): string
    {
        if ($query) {
            $queryString = $this->queryStringify($query);
            $params = [...$params, $queryString];
        }

        return $this->getKey($prefix, $this->generateParamsKeySuffix($params));
    }

//    /**
//     * @param FormRequest $request
//     * @param array|null $keys
//     * @return string
//     */
//    private function generateRequestKeySuffix(FormRequest $request, ?array $keys = null): string
//    {
//        return $this->generateParamsKeySuffix([
//            $request->fullUrl(),
//            $request->all($keys),
//        ]);
//    }

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

    /**
     * @param array $query
     * @return string
     */
    private function queryStringify(array $query): string
    {
        return implode('|', array_map(function ($paramKey, $paramValue) {
            $value = is_array($paramValue)
                ? implode(',', array_map(function($key, $value) {
                    return $key . '_' . $value;
                }, array_keys($paramValue), array_values($paramValue)))
                : $paramValue;

            return $paramKey . ':' . $value;
        }, array_keys($query), array_values($query)));
    }
}
