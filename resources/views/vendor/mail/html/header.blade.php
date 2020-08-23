<tr>
<td class="body" width="100%" cellpadding="0" cellspacing="0">
<table align="center" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td class="header" width="570">
<a href="{{ $url }}" style="height: 40px; display: inline-block;" target=_blank>
@if (trim($slot) === 'Laravel')
<img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
</table>
</td>
</tr>
