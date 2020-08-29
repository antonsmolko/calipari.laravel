<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" title="К списку доставок"/>
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button title="Создать доставку" @click="onCreate"/>
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header/>
                    <md-card-content>

                        <v-input title="Заголовок"
                                 icon="title"
                                 name="title"
                                 :vField="$v.title"
                                 :module="storeModule"
                                 :vRules="{ required: true, minLength: true }"/>

                        <v-input title="Алиас"
                                 icon="code"
                                 name="alias"
                                 :vDelay="true"
                                 :vField="$v.alias"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true, alias: true }"/>

                        <v-input title="Порядок"
                                 icon="sort"
                                 name="order"
                                 :vField="$v.order"
                                 :maxlength="2"
                                 :module="storeModule"
                                 :vRules="{ numeric: true }"/>

                        <v-switch title="Самовывоз"
                                  name="pickup"
                                  :value="pickup"
                                  :module="storeModule"/>

                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header icon="description" title=""/>
                    <md-card-content>

                        <v-textarea name="description"
                                    :vField="$v.description"
                                    :module="storeModule"/>

                        <div class="space-30"></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import { required, minLength, numeric } from 'vuelidate/lib/validators'

import { pageTitle } from '@/mixins/base'
import { createMethod } from '@/mixins/crudMethods'

export default {
    name: 'DeliveryCreate',
    mixins: [pageTitle, createMethod],
    data: () => ({
        redirectRoute: { name: 'cms.store.deliveries' },
        responseData: false,
        storeModule: 'deliveries'
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2)
        },
        alias: {
            required,
            touch: false,
            testAlias (value) {
                return value.trim() === '' || (this.$config.ALIAS_REGEXP).test(value);
            },
            minLength: minLength(2),
            isUnique (value) {
                return ((value.trim() === '') && !this.$v.alias.$dirty) || this.isUniqueAlias
            },
        },
        order: {
            numeric,
            touch: false
        },
        description: {
            touch: false
        }
    },
    computed: {
        ...mapState('deliveries', {
            title: state => state.fields.title,
            alias: state => state.fields.alias,
            order: state => state.fields.order,
            pickup: state => state.fields.pickup,
            description: state => state.fields.description
        }),
        isUniqueAlias () {
            return this.$store.getters['deliveries/isUniqueAlias'](this.alias);
        }
    },
    methods: {
        ...mapActions('deliveries', {
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearItemFields',
        }),
        onCreate () {
            return this.create({
                sendData: {
                    title: this.title,
                    alias: this.alias,
                    order: Number(this.order),
                    pickup: Number(this.pickup),
                    description: this.description
                },
                title: this.title,
                successText: 'Способ доставки создан!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    },
    created () {
        this.clearFieldsAction();
        this.getItemsAction()
            .then(() => {
                this.setPageTitle('Новый способ доставки');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    }
}
</script>
