<!DOCTYPE html>
<html>
<head>
    <title>Invoice Example</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div style="width: 100%; padding: 40px; box-sizing: content-box">
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
                        <td class="header">
                            ПРОЕКТ
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="4" class="spacer"></td>
        </tr>
        <tr>
            <td colspan="4" style="border: 1px solid #D3D3D3; padding: 1px">
                <img style="width: 712px; height: 534px" src="{{ $details['image_url'] }}" alt="">
            </td>
        </tr>
        <tr>
            <td colspan="4" class="spacer"></td>
        </tr>
        <tr>
            <td colspan="2" valign="top">
                <table width="80%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="title">Спецификации</td>
                    </tr>
                    <tr>
                        <td class="spec-item">Ширина полотна:</td>
                        <td class="spec-item spec-value">{{ $details['width_cm'] }} см</td>
                    </tr>
                    <tr>
                        <td class="spec-item">Высота полотна:</td>
                        <td class="spec-item spec-value">{{ $details['height_cm'] }} см</td>
                    </tr>
                    <tr>
                        <td class="spec-item">Фактура:</td>
                        <td class="spec-item spec-value">{{ $details['texture_name'] }}</td>
                    </tr>
                    <tr>
                        <td class="spec-item">Количество полос:</td>
                        <td class="spec-item spec-value">{{ $details['stripes_count'] }}</td>
                    </tr>
                </table>
            </td>
            <td colspan="2" valign="top">
                <table width="80%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="title">Цена</td>
                    </tr>
                    @if(!empty($details['added_costs']))
                        @foreach($details['added_costs'] as $title => $value)
                            <tr>
                                <td class="spec-item">{{ $title }}:</td>
                                <td class="spec-item spec-value">{{ number_format($value, 0, '.', ' ') }} ₽</td>
                            </tr>
                        @endforeach
                    @endif
                    <tr>
                        <td class="spec-item">Общая стоимость, 1 шт:</td>
                        <td class="spec-item spec-value">{{ number_format($details['price'], 0, '.', ' ') }} ₽</td>
                    </tr>
                </table>
            </td>
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
    .spacer {
        padding: 10px;
    }
    .spacer-small {
        padding: 5px;
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
        font-size: 16px;
        line-height: 1;
        text-transform: uppercase;
        letter-spacing: .03em;
        color: #000000;
        padding-bottom: 5px;
    }
    .spec-item {
        font-size: 16px;
    }
    .spec-value {
        font-family: "Roboto Condensed";
        color: #000000;
    }
    .copyright {
        font-size: 10px;
    }
</style>
</body>
</html>
