<template>
    <div>
        <h4 class="card-title" v-if="title">{{ title }}</h4>
        <slider
            :start="start"
            :range="range"
            :step="step"
            :disabled="disabled"
            @input="onInput"/>
    </div>
</template>

<script>
import Slider from '@/components/Slider';

export default {
    name: "VSlider",
    components: {
        Slider
    },
    props: {
        title: {
            type: String,
            default: null
        },
        name: {
            type: String,
            required: true
        },
        vField: {
            type: Object,
            required: true
        },
        start: {
            type: Number,
            default: 0
        },
        step: {
            type: Number,
            default: 1
        },
        module: {
            type: String,
            default: null
        },
        action: {
            type: String,
            default: 'setItemField'
        },
        differ: {
            type: Boolean,
            default: false
        },
        range: {
            type: Object,
            default: () => {
                return {
                    min: 0,
                    max: 100
                };
            }
        },
        options: {
            type: Object,
            default: () => {
                return {};
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        referenceValue: ''
    }),
    computed: {
        storeModule () {
            return this.module ? `${this.module}/` : '';
        }
    },
    created () {
        this.referenceValue = this.start;
    },
    methods: {
        onInput (value) {
            const roundValue = Math.round(value);

            this.touched(this.vField, roundValue);

            this.$store.dispatch(`${this.storeModule}${this.action}`, {
                field: this.name,
                value: roundValue
            });
        },
        touched (v, value) {
            this.differ ? this.touchedDifferent(v, value) : v.$touch();
        },
        touchedDifferent (v, value) {
            this.isDiffer(value, this.referenceValue)
                ? v.$touch()
                : v.$reset()
        },
        isDiffer (a, b) {
            return Number(a) !== Number(b);
        }
    }
}
</script>
