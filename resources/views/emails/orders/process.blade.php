@component('mail::message')

@component('mail::order-heading', ['number' => $order['number'], 'data' => $order['date']])
@endcomponent

@component('components.emails.space')
@endcomponent

<h1 class="text-center">{{ $order['goodsQty'] }}</h1>
@component('components.emails.divider')
@endcomponent

@component('components.emails.order.order-items', ['items' => $order['items']])
@endcomponent

@component('mail::order-details-item', ['title' => 'СПОСОБ ДОСТАВКИ'])
{{ $order['delivery']['title'] }}
@endcomponent

@component('mail::order-details-item', ['title' => 'АДРЕС ДОСТАВКИ'])
{{ $order['delivery']['locality'] }},<br>
{{ $order['delivery']['address'] }}
@endcomponent

@component('mail::order-details-item', ['title' => 'ПОЛУЧАТЕЛЬ'])
{{ $order['customer']['name'] }},<br>
{{ phoneFormat($order['customer']['phone'], config('settings.order_phone_formats')) }}
@endcomponent

@component('components.emails.divider')
@endcomponent

@component('mail::order-details-item', ['title' => 'ЦЕНА ДОСТАВКИ'])
__{{ number_format($order['delivery']['price'], 0, '.', ' ') }} ₽__
@endcomponent

@component('mail::order-details-item', ['title' => 'ЦЕНА ЗАКАЗА'])
__{{ number_format($order['price'], 0, '.', ' ') }} ₽__
@endcomponent

@component('mail::order-total-price', ['price' => $order['price']])
@endcomponent

@component('components.emails.divider')
@endcomponent

@component('mail::write-us', [
'facebookUrl' => 'https://facebook.com',
'vkUrl' => 'https://vk.com',
'instagramUrl' => 'https://instagram.com'
])
@endcomponent

{{-- Subfooter --}}
@slot('subfooter')
После подтверждения заказа мы свяжемся с Вами для уточнения деталей. По любым вопросам Вы можете позвонить по номеру +7 952 967 4204 или ответить на это письмо.
@endslot
@endcomponent
