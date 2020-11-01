<template>
    <div v-if="responseData">

        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute"/>
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button @click="onCreate" :disabled="loading" />
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
            </div>
        </div>

        <div class="md-layout-item md-size-100 mt-1 mb-1 md-progress-bar__container">
            <md-progress-bar
                v-if="loading"
                class="md-info"
                md-mode="indeterminate"/>
        </div>

        <div class="md-layout">
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header icon="image" title="Изображение"/>
                    <md-card-content>

                        <v-input title="ID изображения"
                                 icon="qr_code"
                                 name="image_id"
                                 :vField="$v.imageId"
                                 :module="storeModule" />

                        <v-image name="image"
                                 :vField="$v.image"
                                 :vRules="{ required: true }"
                                 :module="storeModule"/>
                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header />
                    <md-card-content>

                        <v-input
                            class="icon-rotate-90"
                            title="Ширина полотна, см"
                            icon="height"
                            name="width_cm"
                            :vField="$v.width"
                            :vRules="{ required: true, numeric: true }"
                            :maxlength="4"
                            :module="storeModule" />

                        <v-input
                            title="Высота полотна, см"
                            icon="height"
                            name="height_cm"
                            :vField="$v.height"
                            :vRules="{ required: true, numeric: true }"
                            :maxlength="4"
                            :module="storeModule" />

                        <v-select
                            title="Фактуры"
                            icon="texture"
                            name="texture_id"
                            :options="textures"
                            :value="defaultTextureId"
                            :vField="$v.textureId"
                            :vRule="{ required: true, numeric: true }"
                            :module="storeModule"
                            nameField="name" />

                        <h4 class="card-title">Цена</h4>
                        <span class="md-title mr-10" :class="{ 'text-line-through md-caption': discount }">{{ $helpers.getFormatPrice(price) || '—' }}</span>
                        <span class="md-title" v-if="discount">{{ $helpers.getFormatPrice(discountPrice) || '—' }}</span>

                        <h4 class="card-title">Скидка</h4>
                        <span class="md-title">{{ formatDiscount }}</span>
                        <v-slider
                            name="discount"
                            :range="{ min: 0, max: 95 }"
                            :step="5"
                            :vField="$v.discount"
                            :disabled="!price"
                            :module="storeModule" />

                        <v-input
                            title="Описание"
                            icon="description"
                            name="description"
                            :maxlength="250"
                            :vField="$v.description"
                            :module="storeModule" />

                        <v-switch :value="publish"
                                  :module="storeModule" />

                    </md-card-content>
                </md-card>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import { required, minLength, numeric } from 'vuelidate/lib/validators'
import ResourceImage from '@/custom_components/Images/ResourceImage';
import VSelect from '@/custom_components/VForm/VSelect';
import VSlider from '@/custom_components/VForm/VSlider';
import { createMethod } from '@/mixins/crudMethods';
import { pageTitle } from '@/mixins/base';
import { getPrice } from '@/helpers'

export default {
    name: 'SaleCreate',
    components: {
        ResourceImage,
        VSelect,
        VSlider
    },
    mixins: [createMethod, pageTitle],
    data: () => ({
        responseData: false,
        storeModule: 'sales',
        redirectRoute: { name: 'cms.store.sales' }
    }),
    validations: {
        image: {
            required,
            touch: false
        },
        width: {
            required,
            numeric,
            touch: false
        },
        height: {
            required,
            numeric,
            touch: false
        },
        textureId: {
            required,
            numeric,
            touch: false
        },
        price: {
            required,
            numeric,
            touch: false
        },
        discount: {
            touch: false
        },
        description: {
            touch: false
        },
        publish: {
            touch: false
        }
    },
    computed: {
        ...mapState({
            textures: state => state.textures.items,
            imageId: state => state.sales.fields.image_id,
            image: state => state.sales.fields.image,
            width: state => state.sales.fields.width_cm,
            height: state => state.sales.fields.height_cm,
            textureId: state => state.sales.fields.texture_id,
            discount: state => state.sales.fields.discount,
            description: state => state.sales.fields.description,
            publish: state => state.sales.fields.publish,
            loading: state => state.loading
        }),
        ...mapGetters('textures', {
            defaultTextureId: 'defaultItemId'
        }),
        texture () {
            return this.$store.getters['textures/getById'](this.textureId);
        },
        price () {
            const texturePrice = this.texture ? this.texture.price : null;

            return getPrice(this.width, this.height, texturePrice);
        },
        formatDiscount () {
            return this.discount ? `${this.discount} %` : 0;
        },
        discountPrice () {
            return this.price / 100 * (100 - this.discount);
        }
    },
    created () {
        this.getTexturesAction()
            .then(() => {
                this.setPageTitle('Новая позиция на продажу');
                this.clearFieldsAction();
                this.setFieldAction({ field: 'texture_id', value: this.defaultTextureId });
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    beforeDestroy () {
        this.clearFieldsAction();
    },
    methods: {
        ...mapActions({
            getTexturesAction: 'textures/getItems',
            setFieldAction: 'sales/setItemField',
            clearFieldsAction: 'sales/clearItemFields'
        }),
        onCreate () {
            return this.create({
                sendData: {
                    image_id: Number(this.imageId),
                    image: this.image,
                    width_cm: Number(this.width),
                    height_cm: Number(this.height),
                    texture_id: Number(this.textureId),
                    discount: Number(this.discount),
                    description: this.description || '',
                    publish: Number(this.publish)
                },
                successText: 'Позиция на продажу создана!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        }
    }
}
</script>
