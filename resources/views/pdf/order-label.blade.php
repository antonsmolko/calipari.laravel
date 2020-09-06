<!DOCTYPE html>
<html>
<head>
    <title>Invoice Example</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div style="width:100%; padding: 30px 30px 0 30px; box-sizing: content-box">
    <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td class="column" valign="top">
                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td colspan="5">
                            <table cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="padding-top: 4px; padding-right: 10px; border-right: 1px solid #D3D3D3">
                                        <img style="width: 60px" src="{{ env('APP_URL') }}/img/svg/calipari.svg" alt="">
                                    </td>
                                    <td class="header text-emphasis" style="border-right: 1px solid #D3D3D3; padding-right: 3px">
                                        ФОТОПАННО
                                    </td>
                                    <td style="text-align: right; padding-left: 13px">
                                        @if($details->texture->seamless)
                                            <img style="width: 30px; height: auto" src="{{ env('APP_URL') }}/img/svg/pdf/label/landscape.svg" alt="">
                                        @else
                                            <img style="width: 30px; height: auto" src="{{ env('APP_URL') }}/img/svg/pdf/label/stripes.svg" alt="">
                                        @endif
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5" class="spacer"></td>
                    </tr>
                    <tr>
                        <td colspan="5" style="border: 1px solid #B3B3B3; padding: 1px">
                            <img style="width: 320px" src="{{ $details->image_url }}" alt="">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5" class="spacer"></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="spec-item spec-title">Артикул изображения:</td>
                        @if(!empty($details->image))
                            <td colspan="2" class="spec-item spec-value text-emphasis">{{ $details->image->getArticle() }}</td>
                        @else
                            <td colspan="2" class="spec-item spec-value text-emphasis">{{ getImageArticle($details->image_id) }}</td>
                        @endif
                    </tr>
                    <tr>
                        <td colspan="3" class="spec-item spec-title">Ширина полотна:</td>
                        <td colspan="2" class="spec-item spec-value text-emphasis">{{ $details->width_cm }} см</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="spec-item spec-title">Высота полотна:</td>
                        <td colspan="2" class="spec-item spec-value text-emphasis">{{ $details->height_cm }} см</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="spec-item spec-title">Фактура:</td>
                        <td colspan="2" class="spec-item spec-value text-emphasis">{{ $details->texture->name }}</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="spec-item spec-title">Количество полос:</td>
                        <td colspan="2" class="spec-item spec-value text-emphasis">{{ $details->stripes_count }}</td>
                    </tr>
                </table>
            </td>
            <td>
                <p>&nbsp;</p>
            </td>
            <td class="column" valign="top">
                <table width="100%">
                    <tr>
                        <td>
                            <p>Фотопанно изготовлено на виниловой фактуре двойного горячего тиснения на флизелиновой основе.</p>
                            <p>После того, как поверхность стен очищена, выровнена и просушена, нанесите на нее клей, предварительно разведенный чуть гуще нормы. Слой клея на поверхность необходимо нанести так, чтобы его было достаточно для приклеивания фотопанно. Флизелиновую основу фотопанно смазывать клеем не нужно.</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="spacer"></td>
                    </tr>
                    <tr>
                        <td class="divider"></td>
                    </tr>
                    <tr>
                        <td class="spacer-small"></td>
                    </tr>
                    <tr>
                        <td class="header">Условные обозначения</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="100%">
                                <tr>
                                    <td valign="top">
                                        <img style="width: 24px; height: 16px; padding-top: 5px" src="{{ env('APP_URL') }}/img/svg/pdf/label/stripes.svg" alt="">
                                    </td>
                                    <td valign="top">—</td>
                                    <td valign="top" class="text-small">фотопанно шовное, состоит из нескольких полос (количество полос указано в спецификации заказа)</td>
                                </tr>
                                <tr>
                                    <td valign="top">
                                        <img style="width: 24px; height: 16px; padding-top: 5px" src="{{ env('APP_URL') }}/img/svg/pdf/label/seamless.svg" alt="">
                                    </td>
                                    <td valign="top">—</td>
                                    <td valign="top" class="text-small">фотопанно бесшовное, выполнено одним полотном</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="spacer-small"></td>
                    </tr>
                    <tr>
                        <td class="divider"></td>
                    </tr>
                    <tr>
                        <td class="spacer"></td>
                    </tr>
                    <tr>
                        <td>
                            <span class="text-bolder">Calipari</span>. Студия печати и дизайна. Россия.
                        </td>
                    </tr>
                    <tr>
                        <td class="text-emphasis">www.calipari.ru</td>
                    </tr>
                    <tr>
                        <td class="spacer"></td>
                    </tr>
                    <tr>
                        <td class="copyright">© Calipari, {{ date('Y') }}. Все права защищены.</td>
                    </tr>
                </table>
            </td>
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
    html {
        padding: 0;
        margin: 0
    }
    body {
        font-family: "Roboto Condensed Light";
        font-size: 14px;
        color: #666666;
        padding: 0;
        margin: 0;
    }
    table {
        border-collapse: collapse;
    }
    p:first-child {
        margin-top: 0;
    }
    p:last-child {
        margin-bottom: 0;
    }
    .column {
        width: 44%;
    }
    .text-emphasis {
        color: #000000;
    }
    .text-bolder {
        font-family: "Roboto Condensed";
    }
    .spec-item {
        font-family: "Oswald";
        font-size: 20px;
        line-height: 1.2;
        letter-spacing: .03em;
    }
    .spec-title {
        color: #666666;
    }
    .spec-value {
        text-align: right;
    }
    .spacer {
        padding: 8px;
    }
    .spacer-small {
        padding: 4px;
    }
    .divider {
        border-bottom: 1px solid #AAAAAA;
    }
    .header {
        font-family: "Oswald";
        font-size: 16px;
        line-height: 0.9;
        text-transform: uppercase;
        letter-spacing: .03em;
        padding-left: 10px;
    }
    .text-small {
        font-size: 12px;
    }
    .copyright {
        font-size: 10px;
    }
</style>
</body>
</html>
