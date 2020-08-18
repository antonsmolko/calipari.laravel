<table class="order-items" width="100%" cellpadding="0" cellspacing="0">
<tr>
<td>
@foreach($items as $item)
@component('components.emails.order.order-item', ['item' => $item])
@endcomponent
@endforeach
</td>
</tr>
</table>
