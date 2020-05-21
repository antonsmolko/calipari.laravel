<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <md-button class="md-info md-just-icon"
                                   @click="$router.go(-1) ? $router.go(-1) : $router.push(redirectRoute)">
                            <md-icon>arrow_back</md-icon>
                            <md-tooltip md-direction="right">Назад</md-tooltip>
                        </md-button>
                        <div>
                            <slide-y-down-transition v-show="controlSaveVisibilities && $v.$anyDirty">
                                <control-button @click="onUpdate"/>
                            </slide-y-down-transition>
                            <control-button
                                :disabled="isCollectionMainImage"
                                title="Удалить"
                                icon="delete"
                                color="md-danger"
                                @click="onDelete"/>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <md-card>
                    <card-icon-header title="Информация и настройки" icon="info"/>
                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-25 md-medium-size-50 md-small-size-100">
                                <h4 class="card-title">Информация</h4>
                                <div class="info-item">
                                    <h4 class="card-title">Артикул</h4>
                                    <h3 class="info-value"><small>{{ item.article }}</small></h3>
                                </div>
                                <div class="info-item">
                                    <h4 class="card-title">Форма</h4>
                                    <h3 class="info-value"><small>{{ item.format }}</small></h3>
                                </div>
                                <div class="info-item">
                                    <h4 class="card-title">Просмотры</h4>
                                    <h3 class="info-value"><small>{{ item.views }}</small></h3>
                                </div>
                                <div class="info-item">
                                    <h4 class="card-title">Лайки</h4>
                                    <h3 class="info-value"><small>{{ item.likes }}</small></h3>
                                </div>
                                <div class="info-item">
                                    <h4 class="card-title">Заказы</h4>
                                    <h3 class="info-value"><small>{{ item.orders }}</small></h3>
                                </div>
                                <div class="info-item">
                                    <h4 class="card-title">Ширина</h4>
                                    <h3 class="info-value"><small>{{ item.width }} px</small></h3>
                                </div>
                                <div class="info-item">
                                    <h4 class="card-title">Высота</h4>
                                    <h3 class="info-value"><small>{{ item.height }} px</small></h3>
                                </div>
                            </div>
                            <div class="md-layout-item md-size-25 md-medium-size-50 md-small-size-100">
                                <v-image name="image"
                                         :vField="$v.image"
                                         :imgDefault="item.path"
                                         :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-input title="Максимальная ширина печати"
                                         icon="straighten"
                                         name="max_print_width"
                                         :value="maxPrintWidth"
                                         :maxlength="4"
                                         :vField="$v.maxPrintWidth"
                                         :differ="true"
                                         :module="storeModule"
                                         :vRules="{ numeric: true }" />

                                <v-input title="Описание"
                                         icon="comment"
                                         name="description"
                                         :value="description"
                                         :maxlength="250"
                                         :vField="$v.description"
                                         :differ="true"
                                         :module="storeModule" />

                                <v-switch :vField="$v.publish"
                                          :disabled="isCollectionMainImage"
                                          :differ="true"
                                          :value="publish"
                                          :module="storeModule">
                                    <template>
                                        <span v-if="isCollectionMainImage">Главное изображение коллекции нельзя снять с публикации!</span>
                                    </template>
                                </v-switch>
                            </div>
                        </div>


                    </md-card-content>
                </md-card>
            </div>

            <div class="md-layout-item md-size-100">
                <md-card v-if="item.collection">
                    <card-icon-header icon="view_module" color="md-card-header-cyan" title="Коллекция"/>
                    <md-card-content>
                        <h4 v-if="isCollectionMainImage" class="card-title mb-0">Основное изображение</h4>
                        <h3 class="mt-0"><small>{{ item.collection.title }}</small></h3>
                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-size-100">
                <md-card>
                    <md-card-header class="md-card-header-icon md-card-header-green">
                        <div class="card-icon">
                            <md-icon>category</md-icon>
                        </div>
                        <h3 class="title">Категории</h3>
                    </md-card-header>
                    <md-card-content>

                        <v-select v-if="!item.collection && topicList.length" title="Темы" placeholder="Выберите темы"
                                  :multiple="true"
                                  name="topics"
                                  :vField="$v.topics"
                                  :differ="true"
                                  :value="topics"
                                  :options="topicList"
                                  :module="storeModule" />

                        <v-select v-if="colorList.length" title="Цвета" placeholder="Выберите цвета"
                                  :multiple="true"
                                  name="colors"
                                  :vField="$v.colors"
                                  :differ="true"
                                  :value="colors"
                                  :options="colorList"
                                  :module="storeModule" />

                        <v-select v-if="!item.collection && interiorList.length" title="Интерьеры" placeholder="Выберите интерьеры"
                                  :multiple="true"
                                  name="interiors"
                                  :vField="$v.interiors"
                                  :differ="true"
                                  :value="interiors"
                                  :options="interiorList"
                                  :module="storeModule" />

                        <v-select v-if="!item.collection && tagList.length" title="Теги" placeholder="Выберите теги"
                                  :multiple="true"
                                  name="tags"
                                  :vField="$v.tags"
                                  :differ="true"
                                  :value="tags"
                                  :options="tagList"
                                  :module="storeModule" />

                        <v-select v-if="!item.collection && ownerList.length" title="Владельцы" placeholder="Выберите владельца"
                                  name="owner_id"
                                  :vField="$v.owner"
                                  :differ="true"
                                  :value="owner"
                                  :options="ownerList"
                                  defaultValue=""
                                  defaultTitle="Свое"
                                  :module="storeModule" />

                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    import { pageTitle } from '@/mixins/base'
    import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

    import VSelect from "@/custom_components/VForm/VSelect"
    import { numeric } from "vuelidate/lib/validators"

    export default {
        name: 'ImageEdit',
        components: { VSelect },
        mixins: [
            pageTitle,
            updateMethod,
            deleteMethod
        ],
        props: {
            id: {
                type: [ Number, String ],
                required: true
            },
            result: []
        },
        data() {
            return {
                storeModule: 'images',
                responseData: false,
                controlSaveVisibilities: false,
                redirectRoute: { name: 'manager.images' }
            }
        },
        validations: {
            image: {
                touch: false
            },
            publish: {
                touch: false
            },
            topics: {
                touch: false
            },
            colors: {
                touch: false
            },
            interiors: {
                touch: false
            },
            tags: {
                touch: false
            },
            owner: {
                touch: false
            },
            maxPrintWidth: {
                numeric,
                touch: false
            },
            description: {
                touch: false
            }
        },
        computed: {
            ...mapState({
                item: state => state.images.item,
                image: state => state.images.fields.image,
                publish: state => state.images.fields.publish,
                topics: state => state.images.fields.topics,
                colors: state => state.images.fields.colors,
                interiors: state => state.images.fields.interiors,
                owner: state => state.images.fields.owner_id,
                tags: state => state.images.fields.tags,
                maxPrintWidth: state => state.images.fields.max_print_width,
                description: state => state.images.fields.description,
                ownerList: state => state.subCategories.itemsByType.owners
            }),
            topicList () {
                return this.$store.getters['categories/getItemsByType']('topics');
            },
            colorList () {
                return this.$store.getters['categories/getItemsByType']('colors');
            },
            interiorList () {
                return this.$store.getters['categories/getItemsByType']('interiors');
            },
            tagList () {
                return this.$store.getters['categories/getItemsByType']('tags');
            },
            isCollectionMainImage () {
                return this.item.collection && this.item.id === this.item.collection.main_image_id;
            }
        },
        async created() {
            await this.clearFieldsAction();
            await Promise.all([
                this.getItemAction(this.id),
                this.getCategoriesAction(),
                this.getSubcategoriesAction('owners')
            ])
                .then(() => {
                    this.setPageTitle(`Изображение «${this.item.article}»`);
                    this.responseData = true;
                })
                .then(() => {
                    this.$v.$reset();
                    this.controlSaveVisibilities = true;
                })
                .catch(() => {
                    window.history.length > 1
                        ? this.$router.go(-1)
                        : this.$router.push(this.redirectRoute)
                });
        },
        methods: {
            ...mapActions({
                getItemAction: 'images/getItem',
                clearFieldsAction: 'images/clearFields',
                getCategoriesAction: 'categories/getItems',
                getSubcategoriesAction: 'subCategories/getItemsWithType',
                setTableRouteDetectorFieldAction: 'table/setRouteDetectorField'
            }),
            onUpdate () {
                return this.update({
                    sendData: {
                        formData: {
                            image: this.image,
                            publish: +this.publish,
                            topics: this.topics,
                            colors: this.colors,
                            interiors: this.interiors,
                            owner_id: this.owner,
                            max_print_width: this.maxPrintWidth,
                            tags: this.tags,
                            description: this.description
                        },
                        id: this.id
                    },
                    title: this.item.article,
                    successText: 'Изображение обновлено!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                });
            },
            onDelete () {
                return this.delete({
                    payload: this.id,
                    title: this.item.article,
                    alertText: `изображение «${this.item.article}»`,
                    successText: 'Изображение удалено!',
                    storeModule: this.storeModule,
                    redirectRoute: this.redirectRoute
                })
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => vm.setTableRouteDetectorFieldAction({ field: 'to', value: from.name }));
        },
        beforeRouteLeave(to, from, next) {
            this.setTableRouteDetectorFieldAction({ field: 'from', value: from.name });
            next();
        }
    }
</script>

<style lang="scss" scoped>
    .info-item {
        display: flex;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: 10px;
        }
        .card-title {
            width: 150px;
            margin: 0;
        }
        .info-value {
            margin: 0;
        }
    }
</style>
