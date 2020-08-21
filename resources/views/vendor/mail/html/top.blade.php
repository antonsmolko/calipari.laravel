<table class="top" width="100%" align="center" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td align="center">
<img class="top-icon" src="{{ env('APP_URL') }}/img/email/{{ $icon }}.png" alt="">
{{ Illuminate\Mail\Markdown::parse($slot) }}
</td>
</tr>
</table>
