<table class="order-details__item" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="50%" valign="top" class="order-details__heading">
<b>{{ $title }}</b>
</td>
<td width="50%" valign="top" class="order-details__value">
    {{ Illuminate\Mail\Markdown::parse($slot) }}
</td>
</tr>
</table>
