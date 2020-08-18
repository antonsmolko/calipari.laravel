<table class="write-us" width="100%" align="center" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center">
            <b class="text-muted">НАПИШИТЕ НАМ ИЛИ РАССКАЖИТЕ О НАС ДРУЗЬЯМ</b><br>
            @component('components.emails.space')
            @endcomponent
            <a class="write-us__social-link" href="{{ $facebookUrl }}">FACEBOOK</a>
            <a class="write-us__social-link" href="{{ $vkUrl }}">VKONTAKTE</a>
            <a class="write-us__social-link" href="{{ $instagramUrl }}">INSTAGRAM</a>
            @component('components.emails.space-large')
            @endcomponent
            <span class="text-center">С уважением,</span>
            <a class="write-us__logo" href="{{ env('CLIENT_BASE_URL') }}">
                <img src="{{ env('APP_URL') }}/img/svg/calipari-gray.svg" alt="">
            </a>
        </td>
    </tr>
</table>
