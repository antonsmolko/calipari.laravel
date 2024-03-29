<template>
    <div>
        <h4 class="card-title" v-if="!hiddenTitle">{{ title }}</h4>
        <div class="form-group">
            <md-field :class="[
                { 'md-error': vField.$error && !disabled },
                { 'md-valid': !vField.$invalid && !disabled },
                { 'md-disabled': disabled }
                ]">
                <md-icon v-if="icon" class="input-icon-left">{{ icon }}</md-icon>
                <label v-if="placeholder">{{ placeholder }}</label>
                <md-input
                    :type="type"
                    :name="name"
                    @input="onInput"
                    :value="value"
                    :min="min"
                    :maxlength="maxlength"
                    :disabled="disabled" />
                <slide-y-down-transition v-show="vField.$error">
                    <md-icon class="error">close</md-icon>
                </slide-y-down-transition>
                <slide-y-down-transition v-show="vField.$dirty && !vField.$invalid">
                    <md-icon class="success">done</md-icon>
                </slide-y-down-transition>
            </md-field>
            <div class="under-input-notice" v-if="vRules && vField.$error">
                <input-notification-require v-if="!vField.required && vRules.required" :name="title" />
                <input-notification-unique v-else-if="!vField.isUnique && vRules.unique" :name="title"/>
                <input-notification-min-string v-else-if="!vField.minLength && vRules.minLength" :name="title" :min="min"/>
                <input-notification-alias v-else-if="!vField.testAlias && vRules.alias" :name="title"/>
                <input-notification-article v-else-if="!vField.testArticle && vRules.article" :name="title"/>
                <input-notification-key v-else-if="!vField.testKey && vRules.key" :name="title"/>
                <input-notification-num v-else-if="!vField.numeric && vRules.numeric" :name="title"/>
                <input-notification-alpha-num v-else-if="!vField.alphaNum && vRules.alphaNum" :name="title"/>
                <input-notification-email v-else-if="!vField.email && vRules.email"/>
                <input-notification-same-as-password v-else-if="!vField.sameAsPassword && vRules.sameAsPassword"/>
                <input-notification-same-as v-else-if="!vField.sameAs && vRules.sameAs" :name="title" :sameName="sameName"/>
                <input-notification-between v-else-if="!vField.between && vRules.between" :name="title" :min="rangeMin" :max="rangeMax"/>
            </div>
        </div>
    </div>
</template>

<script>
const touchMap = new WeakMap();

import {
    InputNotificationRequire,
    InputNotificationUnique,
    InputNotificationMinString,
    InputNotificationAlias,
    InputNotificationArticle,
    InputNotificationKey,
    InputNotificationAlphaNum,
    InputNotificationNum,
    InputNotificationSameAsPassword,
    InputNotificationSameAs,
    InputNotificationEmail,
    InputNotificationBetween
} from '@/custom_components/InputNotifications'

export default {
    name: "VInput",
    components: {
        InputNotificationRequire,
        InputNotificationUnique,
        InputNotificationMinString,
        InputNotificationAlias,
        InputNotificationArticle,
        InputNotificationNum,
        InputNotificationSameAsPassword,
        InputNotificationSameAs,
        InputNotificationAlphaNum,
        InputNotificationEmail,
        InputNotificationKey,
        InputNotificationBetween
    },
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        vField: {
            type: Object,
            required: true
        },
        vDelay: {
            type: Boolean,
            default: false
        },
        vRules: {
            type: Object,
            default: null
        },
        value: {
            type: [ String, Number ],
            default: ''
        },
        min: {
            type: Number,
            default: 2
        },
        maxlength: {
            type: Number,
            default: 100
        },
        icon: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'text'
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
        sameName: {
            type: String,
            default: null
        },
        rangeMin: {
            type: Number,
            default: 0
        },
        rangeMax: {
            type: Number,
            default: 100
        },
        placeholder: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        hiddenTitle: {
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
        this.referenceValue = this.value;
    },
    methods: {
        onInput (value) {
            if (this.vField && this.vDelay) {
                this.setValidationDelay(this.vField, value);
            } else if (this.vField) {
                this.touched(this.vField, value);
            }

            this.$store.dispatch(`${this.storeModule}${this.action}`, {
                field: this.name,
                value: value.trim()
            });
        },
        setValidationDelay (v, value) {
            v.$reset();
            if (touchMap.has(v)) {
                clearTimeout(touchMap.get(v));
            }
            touchMap.set(v, setTimeout(() => this.touched(this.vField, value), 500));
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
            return a != b;
        }
    }
}
</script>
