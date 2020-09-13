<template>
    <md-button :class="`${color} md-just-icon`" @click.native="onClick" :disabled="disabled || loading">
        <md-icon>{{ icon }}</md-icon>
        <md-tooltip :md-direction="direction">{{ title }}</md-tooltip>
    </md-button>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "ControlButton",
    props: {
        title: {
            type: String,
            default: 'Создать'
        },
        icon: {
            type: String,
            default: 'check'
        },
        color: {
            type: String,
            default: 'md-success'
        },
        direction: {
            type: String,
            default: 'left'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapState({
            loading: state => state.loading
        })
    },
    methods: {
        onClick () {
            this.$emit('click')
        }
    }
}
</script>
