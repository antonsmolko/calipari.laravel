<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <h4 class="card-title">{{ title }}</h4>
            <md-field>
                <md-icon v-if="icon">{{ icon }}</md-icon>
                <md-input
                    :name="name"
                    :value="value"
                    :type="type"
                    :placeholder="`Заполните поле ${title}`"
                    @input="onInputChange"
                />
            </md-field>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import debounce from 'lodash/debounce'
const _debounce = debounce(fn => fn(), 500)
export default {
    name: 'setting-input',
    props: {
        title: String,
        name: String,
        value: String,
        onSave: Function,
        timeout: {
            type: Number,
            default: 500,
        },
        type: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String,
            default: null
        }
    },
    data () {
        return {
            inputValue: '',
            onEdit: false,
            updateTimeout: null
        }
    },
    methods: {
        ...mapActions({
            updateAction: 'settings/setTextValue',
        }),
        onInputChange(value) {
            this.inputValue = value.trim();
            _debounce(this.onUpdate);
        },
        onUpdate() {
            this.updateAction({
                key_name: this.name,
                value: this.inputValue
            })
        }
    },
    created() {
        this.inputValue = this.value;
    }
}
</script>
