<template>
    <div>
        <h4 class="card-title">{{ title }}</h4>
        <div class="form-group">
            <md-datepicker
                :class="[{ 'md-error': vField.$error }, { 'md-valid': !vField.$invalid }]"
                v-model="selectedDate"
                :md-model-type="mdType"
                md-immediately
                :md-debounce="0" />
            <div class="under-input-notice" v-if="vRules && vField.$error">
                <input-notification-require v-if="!vField.required && vRules.required" :name="title" />
                <input-notification-num v-else-if="!vField.numeric && vRules.numeric" :name="title"/>
            </div>
        </div>
    </div>
</template>

<script>
import debounce from 'lodash/debounce'
import {
    InputNotificationRequire,
    InputNotificationNum,
} from '@/custom_components/InputNotifications'
const _debounce = debounce(value => value(), 300)

export default {
    name: "VDatepicker",
    components: {
        InputNotificationRequire,
        InputNotificationNum
    },
    props: {
        name: {
            type: String,
            default: 'date'
        },
        title: {
            type: String,
            default: 'Дата'
        },
        vField: {
            type: Object,
            required: true
        },
        vRules: {
            type: Object,
            default: null
        },
        value: {
            type: [ String, Number ],
            default: null
        },
        module: {
            type: String,
            default: null
        },
        differ: {
            type: Boolean,
            default: false
        },
        modelType: {
            type: String,
            default: 'date'
        }
    },
    data: () => ({
        selectedDate: null,
        referenceValue: null
    }),
    computed: {
        storeModule() {
            return this.module ? `${this.module}/` : '';
        },
        mdType () {
            switch (this.modelType) {
                case 'date':
                    return Date
                case 'string':
                    return String
                case 'number':
                    return Number
            }
        }
    },
    watch: {
        selectedDate () {
            _debounce(this.changeDate)
        }
    },
    created () {
        if (this.value) {
            this.referenceValue = this.value;
            this.selectedDate = this.value;
        }
        this.$material.locale.firstDayOfAWeek = 1;
        this.$material.locale.dateFormat = 'dd.MM.yyyy';
    },
    methods: {
        changeDate() {
            const value = this.selectedDate;

            this.$store.dispatch(`${this.storeModule}setItemField`, {
                field: this.name,
                value
            })
                .then(() => {
                    if (this.vField) {
                        this.touched(this.vField, value);
                    }
                });
        },
        touched(v, value) {
            this.differ ? this.touchedDifferent(v, value) : v.$touch();
        },
        touchedDifferent(v, value) {
            this.isDiffer(value, this.referenceValue)
                ? v.$touch()
                : v.$reset()
        },
        isDiffer(a, b) {
            return a != b;
        }
    }

}
</script>
