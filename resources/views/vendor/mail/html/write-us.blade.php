<table class="write-us" width="100%" align="center" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center">
            <b class="text-muted">НАПИШИТЕ НАМ ИЛИ РАССКАЖИТЕ О НАС ДРУЗЬЯМ</b><br>
            @component('components.emails.space')
            @endcomponent
            <a class="write-us__social-link" href="{{ $facebookUrl }}" target=_blank>FACEBOOK</a>
            <a class="write-us__social-link" href="{{ $vkUrl }}" target=_blank>VKONTAKTE</a>
            <a class="write-us__social-link" href="{{ $instagramUrl }}" target=_blank>INSTAGRAM</a>
            @component('components.emails.space-large')
            @endcomponent
            <span class="text-center">С уважением,</span>
            <a class="write-us__logo" href="{{ env('CLIENT_BASE_URL') }}" target=_blank>
                <img src="{{ env('APP_URL') }}/img/email/calipari-gray.jpg" alt="">
            </a>
        </td>
    </tr>
</table>
