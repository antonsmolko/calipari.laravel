<table class="write-us" width="100%" align="center" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center">
            <b class="text-muted">НАПИШИТЕ НАМ ИЛИ РАССКАЖИТЕ О НАС ДРУЗЬЯМ</b><br>
            @component('components.mail.space')
            @endcomponent
            @if(!empty($config['facebook_account']))
                <a class="write-us__social-link" href="{{ $config['facebook_account'] }}" target=_blank>FACEBOOK</a>
            @endif
            @if(!empty($config['vk_account']))
                <a class="write-us__social-link" href="{{ $config['vk_account'] }}" target=_blank>VKONTAKTE</a>
            @endif
            @if(!empty($config['instagram_account']))
                <a class="write-us__social-link" href="{{ $config['instagram_account'] }}" target=_blank>INSTAGRAM</a>
            @endif
        </td>
    </tr>
    <tr>
        <td>
            @component('components.mail.regards')
            @endcomponent
        </td>
    </tr>
</table>
