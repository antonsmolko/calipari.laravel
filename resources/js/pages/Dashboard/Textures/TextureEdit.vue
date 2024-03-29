<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="{ name: 'cms.textures' }" title="К списку материалов"/>
                        <div>
                            <slide-y-down-transition v-show="$v.$anyDirty && !$v.$invalid">
                                <control-button @click="onUpdate"/>
                            </slide-y-down-transition>
                            <control-button title="Удалить" icon="delete" color="md-danger" @click="onDelete"/>
                        </div>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header/>
                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <v-input title="Наименование"
                                         icon="title"
                                         name="name"
                                         :value="name"
                                         :vField="$v.name"
                                         :differ="true"
                                         :module="storeModule"
                                         :vRules="{ required: true, unique: true, minLength: true }"/>
                            </div>
                            <div class="md-layout-item">
                                <v-input title="Цена"
                                         icon="attach_money"
                                         name="price"
                                         :value="price"
                                         :maxlength="8"
                                         :vField="$v.price"
                                         :differ="true"
                                         :module="storeModule"
                                         :vRules="{ required: true, numeric: true }"/>
                            </div>
                            <div class="md-layout-item">
                                <v-switch :value="seamless"
                                          title="Безшовная"
                                          name="seamless"
                                          :vField="$v.seamless"
                                          :differ="true"
                                          :module="storeModule"/>
                            </div>
                            <div class="md-layout-item">
                                <v-input title="Ширина"
                                         icon="straighten"
                                         name="width"
                                         :value="width"
                                         :maxlength="8"
                                         :vField="$v.width"
                                         :disabled="Boolean(seamless)"
                                         :differ="true"
                                         :module="storeModule"
                                         :vRules="{ required: true, numeric: true }"/>
                            </div>
                            <div class="md-layout-item">
                                <v-input title="Порядок"
                                         icon="sort"
                                         name="order"
                                         :value="order"
                                         :maxlength="5"
                                         :vField="$v.order"
                                         :module="storeModule"
                                         :vRules="{ numeric: true }"/>
                            </div>
                        </div>
                        <div class="md-layout md-gutter mt-2">
                            <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-large-size-33 md-size-25">
                                <v-image title="Образец"
                                         name="sample"
                                         :imgDefault="samplePath"
                                         :vField="$v.sample"
                                         :differ="true"
                                         :module="storeModule"/>
                            </div>
                            <div class="md-layout-item md-xsmall-size-100 md-small-size-50 md-large-size-33 md-size-25">
                                <v-image title="Фон"
                                         name="background"
                                         :imgDefault="backgroundPath"
                                         :vField="$v.background"
                                         :differ="true"
                                         :module="storeModule"/>
                            </div>
                        </div>
                        <div class="mt-5">
                            <div class="mt-5">
                                <text-editor :value="description"
                                             :vField="$v.description"
                                             :differ="true"
                                             :module="storeModule"/>
                            </div>
                        </div>
                        <div class="mt-5">
                            <v-switch :value="publish"
                                      :vField="$v.publish"
                                      :differ="true"
                                      :module="storeModule"/>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, requiredIf, numeric, minLength } from 'vuelidate/lib/validators'

import { pageTitle } from '@/mixins/base'
import { changePublishEdit } from '@/mixins/changingFields'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

import TextEditor from '@/custom_components/Editors/TextEditor'

export default {
    name: 'TextureEdit',
    components: {'text-editor': TextEditor},
    mixins: [
        pageTitle,
        changePublishEdit,
        updateMethod,
        deleteMethod
    ],
    props: {
        id: {
            type: [Number, String],
            required: true
        },
        result: [],
    },
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
            isUnique(value) {
                return (value.trim() === '') && !this.$v.name.$dirty || this.isUniqueNameEdit
            }
        },
        price: {
            required,
            numeric,
            touch: false
        },
        seamless: {
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
            touch: false
        },
        background: {
            touch: false
        },
        description: {
            required,
            touch: false
        },
        publish: {
            touch: false
        },
        order: {
            numeric,
            touch: false
        },
    },
    computed: {
        ...mapState('textures', {
            name: state => state.fields.name,
            price: state => state.fields.price,
            width: state => state.fields.width,
            samplePath: state => state.fields.sample_path,
            backgroundPath: state => state.fields.background_path,
            sample: state => state.fields.sample,
            background: state => state.fields.background,
            seamless: state => state.fields.seamless,
            description: state => state.fields.description,
            publish: state => state.fields.publish,
            order: state => state.fields.order
        }),
        isUniqueNameEdit () {
            return this.$store.getters['textures/isUniqueNameEdit'](this.name, this.id);
        },
    },
    created () {
        Promise.all([
            this.getItemsAction(),
            this.getItemAction(this.id)
        ])
            .then(() => {
                this.setPageTitle(`Фактура «${this.name}»`);
                this.responseData = true;
            })
            .then(() => this.$v.$reset())
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions('textures', {
            getItemAction: 'getItem',
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearItemFields'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    formData: {
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
                    id: this.id
                },
                title: this.name,
                successText: 'Фактура обновлена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            this.delete({
                payload: this.id,
                title: this.name,
                alertText: `фактура «${this.name}»`,
                successText: 'Фактура удалена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>
