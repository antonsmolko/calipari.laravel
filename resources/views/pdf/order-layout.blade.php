<!DOCTYPE html>
<html>
<head>
    <title>Invoice Example</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div style="width: 100%; padding: 15px 25px 0 25px; box-sizing: content-box">
    <table width="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td valign="top">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="padding-top: 4px; padding-right: 10px; border-right: 1px solid #D3D3D3">
                            <img style="width: 60px" src="{{ env('APP_URL') }}/img/svg/calipari.svg" alt="">
                        </td>
                        <td class="header text-emphasis" style="border-right: 1px solid #D3D3D3; padding-right: 3px">
                            ФОТОПАННО
                        </td>
                        <td class="header">
                            МАКЕТ
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="5" class="spacer"></td>
        </tr>
        <tr>
            <td colspan="5" style="border: 1px solid #D3D3D3; padding: 1px">
                <img style="width: 741px; height: auto" src="{{ $details->image_url }}" alt="">
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
    html, body {
        padding: 0;
        margin: 0;
        color: #666666;
    }
    table {
        border-collapse: collapse;
    }
    .spacer {
        padding: 5px;
    }
    .text-emphasis {
        color: #000000;
    }
    .header {
        font-family: "Oswald";
        font-size: 16px;
        line-height: 0.9;
        text-transform: uppercase;
        letter-spacing: .03em;
        padding-left: 10px;
    }
</style>
</body>
</html>
