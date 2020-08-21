<table class="block-centered {{ $style ?? '' }}" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td class="block-content">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td class="block-centered-item">
{{ Illuminate\Mail\Markdown::parse($slot) }}
</td>
</tr>
</table>
</td>
</tr>
</table>
