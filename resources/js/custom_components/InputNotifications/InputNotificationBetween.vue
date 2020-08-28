<template>
    <slide-y-down-transition>
        <div class="text-danger">{{ $langLib({ field_name: name, min, max }).BETWEEN }}</div>
    </slide-y-down-transition>
</template>

<script>
export default {
    name: "InputNotificationBetween",
    props: {
        name: {
            type: String,
            default: 'Поле'
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            required: true
        }
    }
}
</script>
