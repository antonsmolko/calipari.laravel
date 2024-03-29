@component('mail::message')
{{-- Top --}}
@isset($top)
@slot('top')
@component('mail::top')
{{ $top }}
@endcomponent
@endslot
@endisset

{{-- Body --}}
{{ $slot }}

<x-mail.write-us />

{{-- Subfooter --}}
@slot('subfooter')
<x-mail.for-any-questions />
@endslot
@endcomponent
