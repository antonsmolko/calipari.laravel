<table class="order-items" width="100%" cellpadding="0" cellspacing="0">
    <tr>
        <td width="50%" valign="top" class="order-item__image">
            <img src="{{ $item['mail_thumb_url'] }}" alt="{{ $item['article'] }}">
        </td>
        <td width="50%" valign="top" class="order-item__specs">
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr class="order-item__specs-item">
                    <td class="order-item__specs-title"><b>Артикул:</b></td>
                    <td class="order-item__specs-value">{{ $item['article'] }}</td>
                </tr>
                <tr class="order-item__specs-item">
                    <td class="order-item__specs-title"><b>Размеры:</b></td>
                    <td class="order-item__specs-value">{{ $item['dimensions'] }}</td>
                </tr>
                <tr class="order-item__specs-item">
                    <td class="order-item__specs-title"><b>Материал:</b></td>
                    <td class="order-item__specs-value">{{ $item['texture'] }} / {{ $item['stripes_count'] }} пол.</td>
                </tr>
                @if(!empty($item['filter']))
                    <tr class="order-item__specs-item">
                        <td class="order-item__specs-title"><b>Эффекты:</b></td>
                        <td class="order-item__specs-value">{{ $item['filter'] }}</td>
                    </tr>
                @endif
                <tr class="order-item__specs-item">
                    <td class="order-item__specs-title"><b>Количество:</b></td>
                    <td class="order-item__specs-value">{{ $item['qty'] }}</td>
                </tr>
                @if(!empty($item['added_costs_amount']))
                    <tr class="order-item__specs-item">
                        <td class="order-item__specs-title"><b>Доп. услуги:</b></td>
                        <td class="order-item__specs-value">{{ number_format($item['added_costs_amount'], 0, '.', ' ') }} ₽</td>
                    </tr>
                @endif
                <tr>
                    <td class="order-item__price">
                        {{ number_format($item['price'] * $item['qty'] + $item['added_costs_amount'], 0, '.', ' ') }} ₽
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            @component('components.mail.divider')
            @endcomponent
        </td>
    </tr>
</table>
