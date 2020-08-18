@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => env('CLIENT_BASE_URL')])
<img src="{{ env('APP_URL') }}/img/svg/calipari.svg" class="logo" alt="Calipari">
@endcomponent
@endslot

{{-- Body --}}
{{ $slot }}

{{-- Subcopy --}}
@isset($subcopy)
@slot('subcopy')
@component('mail::subcopy')
{{ $subcopy }}
@endcomponent
@endslot
@endisset

{{-- Subfooter --}}
@isset($subfooter)
    @slot('subfooter')
        @component('mail::subfooter')
            {{ $subfooter }}
        @endcomponent
    @endslot
@endisset

{{-- Footer --}}
@slot('footer')
@component('mail::footer')
© {{ date('Y') }} {{ config('app.name') }}. @lang('Все права защищены.')
@endcomponent
@endslot
@endcomponent
