<template>
    <div>
        <div class="md-layout" v-if="responseData">
            <div class="md-layout-item md-size-100">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <control-button icon="arrow_back"
                                        title="Назад"
                                        direction="right"
                                        @click="goBack"/>
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button title="Создать" @click="onCreate" />
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item md-medium-size-100 md-large-size-33 md-xlarge-size-25">
                <product-card headerAnimation="false">
                    <template slot="imageHeader">
                        <resource-image :name="image.path" :width="300"/>
                    </template>
                    <template slot="footer">
                        <span>ID:</span><h3 class="m-0">{{ image.id }}</h3>
                    </template>
                </product-card>
                <slide-y-down-transition v-show="price">
                    <md-card>
                        <card-icon-header title="Цена" icon="attach_money"/>
                        <md-card-content>
                            <div class="md-flex md-between">
                                <h4 class="md-card-title m-0">Цена:</h4>
                                <span class="md-title">{{ formatPrice }}</span>
                            </div>
                        </md-card-content>
                    </md-card>
                </slide-y-down-transition>
            </div>
            <div class="md-layout-item md-medium-size-100 md-large-size-66 md-xlarge-size-75">
                <md-card>
                    <card-icon-header/>
                    <md-card-content>

                        <v-input
                            title="Email покупателя"
                            icon="email"
                            name="email"
                            :vField="$v.email"
                            :vRules="{ required: true, email: true }"
                            :module="storeModule"
                            :delay="true"
                            action="setProjectField"/>

                        <v-input
                            title="Имя покупателя"
                            icon="face"
                            name="name"
                            :vField="$v.name"
                            :maxlength="50"
                            :module="storeModule"
                            action="setProjectField"/>

                        <v-input
                            class="icon-rotate-90"
                            title="Ширина полотна, см"
                            icon="height"
                            name="width"
                            :vField="$v.width"
                            :vRules="{ required: true, numeric: true }"
                            :maxlength="4"
                            :module="storeModule"
                            action="setProjectField"/>

                        <v-input
                            title="Высота полотна, см"
                            icon="height"
                            name="height"
                            :value="getRelativeHeight(width, image)"
                            :vField="$v.height"
                            :vRules="{ required: true, numeric: true }"
                            :maxlength="4"
                            :module="storeModule"
                            action="setProjectField"/>

                        <v-select
                            title="Фактуры"
                            icon="texture"
                            name="texture"
                            :options="textures"
                            :value="defaultTextureId"
                            :vField="$v.texture"
                            :vRule="{ required: true, numeric: true }"
                            :module="storeModule"
                            nameField="name"
                            action="setProjectField"/>

                    </md-card-content>
                </md-card>
                <md-card>
                    <card-icon-header class="mt-3" title="Дополнительная оплата" icon="attach_money"/>
                    <md-card-content>
                        <div class="order-added-costs-item md-flex md-flex-middle">
                            <md-checkbox v-model="selectedAddedCosts" value="imageProcessing">
                                <h4 class="card-title mt-0">Обработка изображения, ₽</h4>
                            </md-checkbox>
                            <slide-y-down-transition>
                                <v-input
                                    v-if="selectedAddedCosts.includes('imageProcessing')"
                                    class="md-flex-grow-1"
                                    title="Обработка изображения"
                                    :hiddenTitle="true"
                                    icon="tune"
                                    name="imageProcessing"
                                    :value="settings.image_processing"
                                    :vField="$v.addedCosts.imageProcessing"
                                    :vRules="{ numeric: true }"
                                    :maxlength="4"
                                    :module="storeModule"
                                    action="setProjectAddedCostsField"/>
                            </slide-y-down-transition>
                        </div>

                        <div class="order-added-costs-item md-flex md-flex-middle">
                            <md-checkbox v-model="selectedAddedCosts" value="imageSearch">
                                <h4 class="card-title mt-0">Поиск изображения, ₽</h4>
                            </md-checkbox>
                            <slide-y-down-transition>
                                <v-input
                                    v-if="selectedAddedCosts.includes('imageSearch')"
                                    class="md-flex-grow-1"
                                    title="Поиск изображения"
                                    :hiddenTitle="true"
                                    icon="image_search"
                                    name="imageSearch"
                                    :value="settings.image_search"
                                    :vField="$v.addedCosts.imageSearch"
                                    :vRules="{ numeric: true }"
                                    :maxlength="4"
                                    :module="storeModule"
                                    action="setProjectAddedCostsField"/>
                            </slide-y-down-transition>
                        </div>

                        <div class="order-added-costs-item md-flex md-flex-middle">
                            <md-checkbox v-model="selectedAddedCosts" value="imageCosts">
                                <h4 class="card-title mt-0">Покупка изображения, ₽</h4>
                            </md-checkbox>
                            <slide-y-down-transition>
                                <v-input
                                    v-if="selectedAddedCosts.includes('imageCosts')"
                                    class="md-flex-grow-1"
                                    title="Покупка изображения"
                                    :hiddenTitle="true"
                                    icon="payment"
                                    name="imageCosts"
                                    :vField="$v.addedCosts.imageCosts"
                                    :vRules="{ numeric: true }"
                                    :maxlength="4"
                                    :module="storeModule"
                                    action="setProjectAddedCostsField"/>
                            </slide-y-down-transition>
                        </div>

                        <div class="space-20"></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import isEmpty from 'lodash/isEmpty'
import ProductCard from "@/components/Cards/ProductCard";
import ResourceImage from "@/custom_components/Images/ResourceImage";
import VSelect from "@/custom_components/VForm/VSelect"
import { createMethod } from '@/mixins/crudMethods'
import { pageTitle } from '@/mixins/base';
import { required, requiredIf, email, numeric } from "vuelidate/lib/validators"
import { getHash, getPrice, getFormatPrice } from '@/helpers'

export default {
    name: "ProjectCreate",
    components: {
        ProductCard,
        ResourceImage,
        VSelect
    },
    mixins: [createMethod, pageTitle],
    props: {
        imageId: {
            type: [String, Number],
            required: true
        }
    },
    data: () => ({
        responseData: false,
        storeModule: 'orders',
        selectedAddedCosts: [],
        redirectRoute: { name: 'cms.images' }
    }),
    validations: {
        email: {
            email,
            required,
            touch: false
        },
        name: {
            touch: false
        },
        width: {
            numeric,
            required,
            touch: false
        },
        height: {
            numeric,
            required,
            touch: false
        },
        texture: {
            required,
            numeric,
            touch: false
        },
        addedCosts: {
            imageProcessing: {
                required: requiredIf(function () {
                    return this.selectedAddedCosts.includes('imageProcessing');
                }),
                numeric,
                touch: false
            },
            imageSearch: {
                required: requiredIf(function () {
                    return this.selectedAddedCosts.includes('imageSearch');
                }),
                numeric,
                touch: false
            },
            imageCosts: {
                required: requiredIf(function () {
                    return this.selectedAddedCosts.includes('imageCosts');
                }),
                numeric,
                touch: false
            }
        }
    },
    computed: {
        ...mapState({
            image: state => state.images.item,
            email: state => state.orders.project.email,
            name: state => state.orders.project.name,
            width: state => state.orders.project.width,
            height: state => state.orders.project.height,
            texture: state => state.orders.project.texture,
            textures: state => state.textures.items,
            addedCosts: state => state.orders.project.addedCosts,
            settings: state => state.settings.entries
        }),
        price () {
            const panePrice = getPrice(this.width, this.height, this.texturePrice);

            return panePrice ? panePrice + this.addedCostsAmount : 0;
        },
        addedCostsAmount () {
            return this.selectedAddedCosts.reduce((acc, item) => acc + Number(this.addedCosts[item]), 0);
        },
        texturePrice () {
            const texture = this.$store.getters['textures/getById'](this.texture);

            return texture ? texture.price : null;
        },
        formatPrice () {
            return getFormatPrice(this.price);
        },
        ...mapGetters({
            defaultTextureId: 'textures/defaultItemId'
        })
    },
    created () {
        Promise.all([
            this.getImageAction(this.imageId),
            this.getTexturesAction(),
            this.getSettingsByGroupsAction({ groups: ['order-added-costs'] })
        ])
            .then(() => {
                if (!this.textures.length) {
                    this.addNotificationAction({
                        message: 'У Вас не создано не одной фактуры! Наличие фактур обязательно для данной страницы!'
                    });
                    this.goBack();
                }
                this.setPageTitle('Новый проект');
                this.setProjectFieldAction({ field: 'texture', value: this.defaultTextureId });
                this.setProjectAddedCostsFieldAction({ field: 'imageProcessing', value: this.settings.image_processing });
                this.setProjectAddedCostsFieldAction({ field: 'imageSearch', value: this.settings.image_search });
                this.responseData = true;
            });
    },
    beforeDestroy() {
        this.clearProjectFieldsAction();
    },
    methods: {
        ...mapActions({
            getTexturesAction: 'textures/getItems',
            getImageAction: 'images/getRawItem',
            setProjectFieldAction: 'orders/setProjectField',
            setProjectAddedCostsFieldAction: 'orders/setProjectAddedCostsField',
            addNotificationAction: 'addNotification',
            getSettingsByGroupsAction: 'settings/getItemsByGroups',
            clearProjectFieldsAction: 'orders/clearProjectFields'
        }),
        goBack () {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push({ name: 'cms.images' });
        },
        getRelativeHeight (width, image) {
            const ratio = image.width / image.height;

            return Number(width) ? `${Math.round(Number(width) / ratio)}` : '';
        },
        onCreate () {
            const data = {
                id: getHash(),
                email: this.email,
                name: this.name,
                image_id: this.image.id,
                width_cm: Number(this.width),
                height_cm: Number(this.height),
                image_path: this.image.path,
                texture_id: this.texture
            };

            const addedCostsJson = this.getAddedCostsJson()

            if (addedCostsJson) {
                Object.assign(data, {
                    added_costs: addedCostsJson
                })
            }

            const fileName = `project-${data.id}.pdf`;

            return this.create({
                sendData: { data, fileName },
                title: `отправлен на ${this.email}`,
                successText: 'Заказ сформирован!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute,
                action: 'createCartItem'
            })
        },
        getAddedCostsJson () {
            const addedCostsResult = this.selectedAddedCosts.reduce((acc, item) => {
                acc[this.$config.addedCosts[item]] = Number(this.addedCosts[item]);

                return acc;
            }, {});

            return isEmpty(addedCostsResult) ? null : JSON.stringify(addedCostsResult);
        }
    }
}
</script>

<style lang="scss" scoped>
.order-added-costs-item {
    height: 60px;
    .md-checkbox {
        width: 270px;
    }
}
</style>
