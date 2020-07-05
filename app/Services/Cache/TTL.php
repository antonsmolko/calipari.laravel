<?php


namespace App\Services\Cache;


class TTL
{
    const LATEST_TTL_HOUR = 3600;
    const CATEGORIES_TTL = self::LATEST_TTL_HOUR * 120;
    const COLOR_COLLECTIONS_TTL = self::LATEST_TTL_HOUR * 120;
    const ART_COLLECTIONS_TTL = self::LATEST_TTL_HOUR * 120;
    const SEARCH_TTL = self::LATEST_TTL_HOUR * 1200;
    const IMAGES_TTL = self::LATEST_TTL_HOUR * 120;
    const DELIVERY_TTL = self::LATEST_TTL_HOUR * 120;
    const SETTINGS_TTL = self::LATEST_TTL_HOUR * 120;
    const ORDERS_TTL = self::LATEST_TTL_HOUR * 120;
    const CDEK_TTL = self::LATEST_TTL_HOUR * 120;
}
