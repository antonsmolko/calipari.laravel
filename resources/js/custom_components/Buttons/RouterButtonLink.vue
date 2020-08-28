<template>
    <router-link :to="to">
        <md-button :class="`${color} md-just-icon`">
            <md-icon>{{ icon }}</md-icon>
            <md-tooltip :md-direction="direction">{{ title }}</md-tooltip>
        </md-button>
    </router-link>
</template>

<script>
export default {
    name: "RouterButtonLink",
    props: {
        to: {
            type: [String, Object],
            default: () => ({ name: 'cms.dashboard' })
        },
        icon: {
            type: String,
            default: 'arrow_back'
        },
        color: {
            type: String,
            default: 'md-info'
        },
        title: {
            type: String,
            default: 'Назад'
        },
        direction: {
            type: String,
            default: 'right'
        }
    }
}
</script>
