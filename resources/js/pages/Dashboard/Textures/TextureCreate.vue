<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="{ name: 'cms.textures' }" title="К списку фактур" />
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button @click="onCreate" />
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header />
                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <v-input title="Наименование"
                                         icon="title"
                                         name="name"
                                         :module="storeModule"
                                         :vField="$v.name"
                                         :vRules="{ required: true, unique: true, minLength: true }" />
                            </div>
                            <div class="md-layout-item">
                                <v-input title="Цена"
                                         icon="attach_money"
                                         name="price"
                                         :maxlength="8"
                                         :module="storeModule"
                                         :vField="$v.price"
                                         :vRules="{ required: true, numeric: true }" />
                            </div>
                            <div class="md-layout-item">
                                <v-switch :value="seamless"
                                          title="Безшовная"
                                          name="seamless"
                                          :module="storeModule" />
                            </div>
                            <div class="md-layout-item">
                                <v-input title="Ширина"
                                         icon="straighten"
                                         name="width"
                                         :maxlength="8"
                                         :module="storeModule"
                                         :vField="$v.width"
                                         :disabled="Boolean(seamless)"
                                         :vRules="{ required: true, numeric: true }" />
                            </div>
                            <div class="md-layout-item">
                                <v-input title="Порядок"
                                         icon="sort"
                                         name="order"
                                         :value="nextOrderNumber"
                                         :maxlength="5"
                                         :vField="$v.order"
                                         :module="storeModule"
                                         :vRules="{ numeric: true }" />
                            </div>
                        </div>
                        <div class="md-layout md-gutter mt-2">
                            <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-large-size-33 md-size-25">
                                <v-image title="Образец"
                                         name="sample"
                                         :vField="$v.sample"
                                         :vRules="{ required: true }"
                                         :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-large-size-33 md-size-25">
                                <v-image title="Фон"
                                         name="background"
                                         :vField="$v.background"
                                         :vRules="{ required: true }"
                                         :module="storeModule" />
                            </div>
                        </div>
                        <div class="mt-5">
                            <text-editor :value="description"
                                         :vField="$v.description"
                                         :module="storeModule" />
                        </div>
                        <div class="mt-5">
                            <v-switch :value="publish"
                                      :module="storeModule" />
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import { required, requiredIf, numeric, minLength } from 'vuelidate/lib/validators'

import { pageTitle } from '@/mixins/base'
import { changePublish } from '@/mixins/changingFields'
import { createMethod } from '@/mixins/crudMethods'

import TextEditor from '@/custom_components/Editors/TextEditor'

export default {
    name: 'TextureCreate',
    mixins: [
        pageTitle,
        changePublish,
        createMethod
    ],
    components: { 'text-editor': TextEditor },
    data: () => ({
        storeModule: 'textures',
        responseData: false,
        redirectRoute: { name: 'cms.textures' }
    }),
    validations: {
        name: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.name.$dirty || this.isUniqueName
            }
        },
        price: {
            required,
            numeric,
            touch: false
        },
        width: {
            required: requiredIf(function () {
                return !this.seamless
            }),
            numeric,
            touch: false
        },
        sample: {
            required,
            touch: false
        },
        background: {
            required,
            touch: false
        },
        order: {
            numeric,
            required,
            touch: false
        },
        description: {
            required,
            touch: false
        }
    },
    computed: {
        ...mapState('textures', {
            name: state => state.fields.name,
            price: state => state.fields.price,
            width: state => state.fields.width,
            sample: state => state.fields.sample,
            background: state => state.fields.background,
            seamless: state => state.fields.seamless,
            publish: state => state.fields.publish,
            description: state => state.fields.description,
            order: state => state.fields.order
        }),
        ...mapGetters('textures', [
           'nextOrderNumber'
        ]),
        isUniqueName () {
            return this.$store.getters['textures/isUniqueName'](this.name);
        },
    },
    methods: {
        ...mapActions('textures', {
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearItemFields',
            setItemFieldAction: 'setItemField'
        }),
        onCreate () {
            return this.create({
                sendData: {
                    name: this.name,
                    price: this.price,
                    width: this.seamless ? 0 : this.width,
                    sample: this.sample,
                    background: this.background,
                    seamless: Number(this.seamless),
                    description: this.description,
                    publish: Number(this.publish),
                    order: Number(this.order)
                },
                title: this.name,
                successText: 'Фактура создана!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    },
    created () {
        this.clearFieldsAction();
        this.setItemFieldAction({ field: 'order', value: this.nextOrderNumber });
        this.getItemsAction()
            .then(() => {
                this.setPageTitle('Новая фактура');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    }
}
</script>
