<!DOCTYPE html>
<html>
<head>
    <title>Invoice Example</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="padding: 30px 4%;">
<div style="margin: 0 auto; width: 100%; box-sizing: border-box">
    <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td colspan="4" valign="top">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="padding-top: 2px; padding-right: 10px; border-right: 1px solid #D3D3D3">
                            <img style="width: 60px" src="{{ env('APP_URL') }}/img/svg/calipari.svg" alt="">
                        </td>
                        <td class="header text-emphasis" style="border-right: 1px solid #D3D3D3; padding-right: 3px">
                            ФОТОПАННО
                        </td>
                        <td class="header" style="border-right: 1px solid #D3D3D3; padding-right: 3px">
                            ЗАКАЗ
                        </td>
                        <td class="header" style="border-right: 1px solid #D3D3D3; padding-right: 3px">
                            № {{ $details['number'] }}
                        </td>
                        <td class="header">
                            {{ $details['date'] }}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="4" class="spacer-small"></td>
        </tr>
        <tr>
            <td class="title">{{ $details['goodsQty'] }}</td>
        </tr>
        <tr>
            <td colspan="4" class="spacer-small"></td>
        </tr>
        @foreach($details['items'] as $item)
        <tr>
            <td class="column" colspan="2" valign="top" style="padding-right: 30px; box-sizing: border-box">
                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="border: 1px solid #B3B3B3; padding: 1px">
                            <img style="display: block; width: 350px" src="{{ $item['image_url'] }}" alt="">
                        </td>
                    </tr>
                </table>
            </td>
            <td class="column" colspan="2" valign="top">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="spec-item">Артикул изображения:</td>
                        <td class="spec-item spec-value">{{ $item['article'] }}</td>
                    </tr>
                    <tr>
                        <td class="spec-item">Размеры полотна:</td>
                        <td class="spec-item spec-value">{{ $item['dimensions'] }}</td>
                    </tr>
                    <tr>
                        <td class="spec-item">Материал:</td>
                        <td class="spec-item spec-value">{{ $item['texture'] }} / {{ $item['stripes_count'] }} пол.</td>
                    </tr>
                    @if(!empty($item['filter']))
                    <tr>
                        <td class="spec-item">Эффекты:</td>
                        <td class="spec-item spec-value">{{ $item['filter'] }}</td>
                    </tr>
                    @endif
                    <tr>
                        <td class="spec-item">Количество:</td>
                        <td class="spec-item spec-value">{{ $item['qty'] }}</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="spacer"></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="title">Цена</td>
                    </tr>
                    @if(!empty($item['added_costs']) && is_array($item['added_costs']))
                        @foreach($item['added_costs'] as $title => $value)
                            <tr>
                                <td class="spec-item">{{ $title }}:</td>
                                <td class="spec-item spec-value">{{ number_format($value, 0, '.', ' ') }} ₽</td>
                            </tr>
                        @endforeach
                    @endif
                    <tr>
                        <td class="spec-item">За единицу товара:</td>
                        <td class="spec-item spec-value">{{ number_format($item['price'], 0, '.', ' ') }} ₽</td>
                    </tr>
                    <tr>
                        <td class="spec-item">Итого за позицию:</td>
                        <td class="spec-value total-price">{{ number_format($item['price'] * $item['qty'] + $item['added_costs_amount'], 0, '.', ' ') }} ₽</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="4" class="spacer"></td>
        </tr>
        @endforeach
        @if(!empty($details['comment']))
        <tr>
            <td colspan="1" valign="top" class="spec-item">Комментарий к заказу:</td>
            <td colspan="3" valign="top" class="spec-item spec-value">{{ $details['comment'] }}</td>
        </tr>
        <tr>
            <td colspan="4" class="spacer"></td>
        </tr>
        @endif
        <tr>
            <td colspan="2" class="title">Детали доставки</td>
        </tr>
        <tr>
            <td colspan="1" valign="top" class="spec-item">Способ доставки:</td>
            <td colspan="3" valign="top" class="spec-item spec-value">{{ $details['delivery']['title'] }}</td>
        </tr>
        <tr>
            <td colspan="1" valign="top" class="spec-item">Адрес доставки:</td>
            <td colspan="3" valign="top" class="spec-item spec-value">{{ $details['delivery']['locality'] }}, {{ $details['delivery']['address'] }}</td>
        </tr>
        <tr>
            <td colspan="1" valign="top" class="spec-item">Получатель:</td>
            <td colspan="3" valign="top" class="spec-item spec-value">{{ $details['customer']['name'] }}, {{ $details['customer']['phone'] }}</td>
        </tr>
        <tr>
            <td colspan="1" valign="top" class="spec-item">Стоимость доставки:</td>
            <td colspan="3" valign="top" class="spec-item spec-value">{{ number_format($details['delivery']['price'], 0, '.', ' ') }} ₽</td>
        </tr>
        <tr>
            <td colspan="4" class="spacer"></td>
        </tr>
        <tr>
            <td colspan="1" valign="top" class="title">ЦЕНА ЗАКАЗА:</td>
            <td colspan="3" valign="top" class="spec-value total-price">{{ number_format($details['price'], 0, '.', ' ') }} ₽</td>
        </tr>
        <tr>
            <td colspan="4" class="spacer"></td>
        </tr>
        <tr>
            <td colspan="4" class="spacer"></td>
        </tr>
        <tr>
            <td colspan="4">
                <span class="text-bolder">Calipari</span>. Студия печати и дизайна. Россия.
            </td>
        </tr>
        <tr>
            <td colspan="4" class="text-emphasis">www.calipari.ru</td>
        </tr>
        <tr>
            <td colspan="4" class="spacer-small"></td>
        </tr>
        <tr>
            <td colspan="4" class="copyright">© Calipari, {{ date('Y') }}. Все права защищены.</td>
        </tr>
    </table>
</div>
<style>
    @font-face {
        font-family: "Oswald";
        src: url({{ env('APP_URL') }}/fonts/Oswald-ExtraLight.ttf) format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto Condensed Light";
        src: url({{ env('APP_URL') }}/fonts/RobotoCondensed-Light.ttf) format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: "Roboto Condensed";
        src: url({{ env('APP_URL') }}/fonts/RobotoCondensed-Regular.ttf) format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    html, body {
        padding: 0;
        margin: 0;
        font-family: "Roboto Condensed Light";
        font-size: 14px;
        color: #666666;
    }
    table {
        border-collapse: collapse;
    }
    .column {
        width: 46%;
    }
    .spacer {
        padding: 10px;
    }
    .divider {
        border-top: 1px solid #DDDDDD;
    }
    .spacer-small {
        padding: 3px;
    }
    .text-emphasis {
        color: #000000;
    }
    .text-bolder {
        font-family: "Roboto Condensed";
    }
    .header {
        font-family: "Oswald";
        font-size: 16px;
        line-height: 0.9;
        text-transform: uppercase;
        letter-spacing: .03em;
        padding-left: 10px;
    }
    .title {
        font-family: "Oswald";
        font-size: 18px;
        line-height: 1 !important;
        text-transform: uppercase;
        letter-spacing: .03em;
        color: #000000;
        padding-bottom: 5px;
    }
    .spec-item {
        vertical-align: top;
        font-size: 16px;
    }
    .total-price {
        font-family: "Roboto Condensed";
        font-size: 20px;
        color: #000000;
        line-height: 1.13 !important;
    }
    .spec-value {
        font-family: "Roboto Condensed";
        color: #000000;
        padding-left: 15px;
        line-height: 1.25;
    }
    .copyright {
        font-size: 10px;
    }
</style>
</body>
</html>
