<template>
    <div>
        <h4 class="card-title">{{ title }}</h4>
        <div class="md-field mt-0" :class="[{'md-valid': !vField.$invalid}]">
            <div class="form-group width-100">
                <md-icon v-if="icon">{{ icon }}</md-icon>
                <md-field class="mt-0" :class="[{'md-valid': !vField.$invalid}]">
                    <md-textarea @input="onInput" :value="value" :maxlength="maxlength" />
                    <slide-y-down-transition v-show="vField.$dirty && !vField.$invalid">
                        <md-icon class="success">done</md-icon>
                    </slide-y-down-transition>
                </md-field>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VTextarea",
    props: {
        vField: {
            type: Object,
            require: true
        },
        title: {
            type: String,
            default: 'Описание'
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: ''
        },
        maxlength: {
            type: Number,
            default: 500
        },
        module: {
            type: String,
            default: null
        },
        differ: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: null
        }
    },
    data: () => ({
        valueReference: ''
    }),
    computed: {
        storeModule () {
            return this.module ? `${this.module}/` : '';
        }
    },
    methods: {
        onInput (value) {
            if (this.vField)
                this.touched(this.vField, value);

            this.$store.dispatch(`${this.storeModule}setItemField`, {
                field: this.name,
                value: value.trim()
            });
        },
        touched (v, value) {
            this.differ ? this.touchedDifferent(v, value) : v.$touch();
        },
        touchedDifferent (v, value) {
            this.isDiffer(value, this.valueReference)
                ? v.$touch()
                : v.$reset()
        },
        isDiffer (a, b) {
            return a != b;
        }
    },
    created () {
        this.valueReference = this.value;
    }
}
</script>
