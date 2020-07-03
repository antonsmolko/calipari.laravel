<?php


namespace App\Services\Image\Handlers;


class GetSyncDataHandler
{
    /**
     * @param array $rawData
     * @return array
     */
    public function handle(array $rawData): array
    {
        $syncData = [];

        foreach($rawData as $type => $keys) {
            if ($keys !== null) {
                $syncData = array_replace(
                    $syncData,
                    array_fill_keys(array_values($keys), ['category_type' => $type])
                );
            }
        }

        return $syncData;
    }
}
