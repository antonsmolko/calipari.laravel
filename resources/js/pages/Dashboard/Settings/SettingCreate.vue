<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link
                            title="В администрирование"
                            :to="{ name: 'cms.settings.administration' }" />
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button @click="onCreate" />
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header />
                    <md-card-content>

                        <v-input title="Наименование"
                                 icon="title"
                                 name="display_name"
                                 :vField="$v.displayName"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true }" />

                        <v-input title="Ключ"
                                 icon="code"
                                 name="key_name"
                                 :vDelay="true"
                                 :vField="$v.keyName"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, key: true, minLength: true }" />

                        <v-select v-if="types.length" title="Тип" placeholder="Выберите тип настройки"
                                  name="type"
                                  :vField="$v.type"
                                  :value="type"
                                  :options="types"
                                  nameField="display_name"
                                  indexName="name"
                                  :module="storeModule" />

                        <v-select v-if="settingGroups.length" title="Группа" placeholder="Выберите группу настройки"
                                  name="group_id"
                                  :vField="$v.group"
                                  :options="settingGroups"
                                  :value="defaultGroup.value"
                                  :defaultTitle="defaultGroup.title"
                                  :defaultValue="defaultGroup.value"
                                  :module="storeModule" />
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { required, minLength } from 'vuelidate/lib/validators'

import VSelect from "@/custom_components/VForm/VSelect";
import { pageTitle } from '@/mixins/base'
import { createMethod } from '@/mixins/crudMethods'

export default {
    name: 'SettingCreate',
    components: { VSelect },
    mixins: [ pageTitle, createMethod ],
    data: () => ({
        defaultGroup: {
            title: 'Нет группы',
            value: 0
        },
        storeModule: 'settings',
        responseData: false,
        redirectRoute: { name: 'cms.settings.administration' }
    }),
    validations: {
        displayName: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.displayName.$dirty || this.isUniqueDisplayName
            }
        },
        keyName: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.keyName.$dirty || this.isUniqueKeyName
            },
            testKey (value) {
                return value.trim() === '' || (this.$config.SNAKE_CASE_REGEXP).test(value);
            }
        },
        type: {
            required,
            touch: false
        },
        group: {
            touch: false
        }
    },
    computed: {
        ...mapState({
            keyName: state => state.settings.fields.key_name,
            displayName: state => state.settings.fields.display_name,
            type: state => state.settings.fields.type,
            group: state => state.settings.fields.group_id,
            types: state => state.settings.types,
            settingGroups: state => state.settingGroups.items
        }),
        isUniqueKeyName () {
            return this.$store.getters['settings/isUniqueKeyName'](this.keyName);
        },
        isUniqueDisplayName () {
            return this.$store.getters['settings/isUniqueDisplayName'](this.displayName);
        }
    },
    methods: {
        ...mapActions({
            getItemsWithTypesAction: 'settings/getItemsWithTypes',
            clearFieldsAction: 'settings/clearItemFields',
            getGroupsAction: 'settingGroups/getItems'
        }),
        onCreate () {
            return this.create({
                sendData: {
                    key_name : this.keyName,
                    display_name : this.displayName,
                    type : this.type,
                    group_id : +this.group
                },
                title: this.displayName,
                successText: 'Настройка создана!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    },
    created () {
        this.clearFieldsAction();
        Promise.all([
            this.getItemsWithTypesAction(),
            this.getGroupsAction()
        ])
            .then(() => {
                if(!this.settingGroups.length) this.$router.push(this.redirectRoute);
                this.setPageTitle('Новая настройка');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    }
}
</script>
