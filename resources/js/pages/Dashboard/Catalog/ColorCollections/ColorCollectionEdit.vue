<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" title="К списку коллекций" />
                        <div>
                            <slide-y-down-transition v-show="controlSaveVisibilities && $v.$anyDirty && !$v.$invalid">
                                <control-button title="Сохранить" @click="onUpdate" />
                            </slide-y-down-transition>
                            <control-button title="Удалить" @click="onDelete" icon="delete" class="md-danger" />
                        </div>
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
                        <div class="md-layout">
                            <div class="md-layout-item md-size-50 md-small-size-100">
                                <v-input title="Заголовок"
                                         icon="title"
                                         name="title"
                                         :value="title"
                                         :vField="$v.title"
                                         :differ="true"
                                         :module="storeModule"
                                         :vRules="{ required: true, unique: true, minLength: true }" />
                            </div>
                            <div class="md-layout-item md-size-50 md-small-size-100">
                                <v-input title="Алиас"
                                         icon="code"
                                         name="alias"
                                         :value="alias"
                                         :vDelay="true"
                                         :vField="$v.alias"
                                         :differ="true"
                                         :module="storeModule"
                                         :vRules="{ required: true, unique: true, minLength: true, alias: true }" />
                            </div>
                            <template v-if="!hasImages">
                                <div class="md-layout-item md-small-size-100">
                                    <v-input title="ID Изображения"
                                             icon="image"
                                             name="image_id"
                                             :maxlength="5"
                                             :vField="$v.imageId"
                                             :module="storeModule"
                                             :vRules="{ numeric: true }" />
                                </div>
                            </template>
                            <template v-if="hasImages">
                                <div class="md-layout-item md-size-50 md-small-size-100">
                                    <v-input title="Максимальная ширина печати"
                                             icon="straighten"
                                             name="max_print_width"
                                             :value="maxPrintWidth"
                                             :maxlength="4"
                                             :vField="$v.maxPrintWidth"
                                             :differ="true"
                                             :module="storeModule"
                                             :vRules="{ numeric: true }" />
                                </div>
                                <div class="md-layout-item md-size-50 md-small-size-100">
                                    <v-input title="Описание"
                                             icon="comment"
                                             name="image_description"
                                             :maxlength="250"
                                             :vField="$v.imageDescription"
                                             :differ="true"
                                             :value="imageDescription"
                                             :module="storeModule" />
                                </div>
                            </template>
                            <div class="md-layout-item md-size-100">
                                <v-switch :vField="$v.publish"
                                          :disabled="!hasPublishedImages"
                                          :differ="true"
                                          :value="publish"
                                          :module="storeModule">
                                    <span v-if="!hasPublishedImages">Нет опубликованных изображений</span>
                                </v-switch>
                            </div>
                        </div>
                        <div class="space-20"></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header icon="category" title="Категории" />
                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-select v-if="topicList.length" title="Темы" placeholder="Выберите темы"
                                          :multiple="true"
                                          name="topics"
                                          :value="topics"
                                          :options="topicList"
                                          :vField="$v.topics"
                                          :differ="true"
                                          :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-select v-if="interiorList.length" title="Интерьеры" placeholder="Выберите интерьеры"
                                          :multiple="true"
                                          name="interiors"
                                          :value="interiors"
                                          :options="interiorList"
                                          :vField="$v.interiors"
                                          :differ="true"
                                          :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-select v-if="tagList.length" title="Теги" placeholder="Выберите теги"
                                          :multiple="true"
                                          name="tags"
                                          :value="tags"
                                          :options="tagList"
                                          :vField="$v.tags"
                                          :differ="true"
                                          :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-select v-if="ownerList.length" title="Владельцы" placeholder="Выберите владельца"
                                          name="owner_id"
                                          :value="owner"
                                          :options="ownerList"
                                          :vField="$v.owner"
                                          :differ="true"
                                          defaultValue=""
                                          defaultTitle="Свое"
                                          :module="storeModule" />
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header icon="timeline" title="SEO" />
                    <md-card-content>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-100">
                                <v-input title="Мета заголовок"
                                         name="meta_title"
                                         :value="metaTitle"
                                         :vField="$v.metaTitle"
                                         :maxlength="150"
                                         :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-textarea name="description"
                                            :value="description"
                                            :vField="$v.description"
                                            :differ="true"
                                            :module="storeModule" />
                            </div>
                            <div class="md-layout-item md-size-50 md-medium-size-100">
                                <v-textarea title="Ключевые слова"
                                            name="keywords"
                                            :value="keywords"
                                            :vField="$v.keywords"
                                            :differ="true"
                                            :module="storeModule" />
                            </div>
                        </div>
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

import VSelect from "@/custom_components/VForm/VSelect";
import { pageTitle } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'ColorCollectionEdit',
    components: { VSelect },
    mixins: [pageTitle, updateMethod, deleteMethod],
    props: {
        id: {
            type: [ String, Number ],
            required: true
        }
    },
    data: () => ({
        redirectRoute: { name: 'cms.catalog.color-collections' },
        responseData: false,
        storeModule: 'colorCollections',
        controlSaveVisibilities: false
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.title.$dirty || this.isUniqueTitleEdit
            },
        },
        alias: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return ((value.trim() === '') && !this.$v.alias.$dirty) || this.isUniqueAliasEdit
            },
            testAlias (value) {
                return value.trim() === '' || (this.$config.ALIAS_REGEXP).test(value);
            }
        },
        imageId: {
            numeric,
            touch: false
        },
        maxPrintWidth: {
            numeric,
            touch: false
        },
        imageDescription: {
            touch: false
        },
        topics: {
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
        publish: {
            touch: false
        },
        metaTitle: {
            touch: false
        },
        description: {
            touch: false
        },
        keywords: {
            touch: false
        }
    },
    computed: {
        ...mapState({
            title: state => state.colorCollections.fields.title,
            alias: state => state.colorCollections.fields.alias,
            imageId: state => state.colorCollections.fields.image_id,
            imageDescription: state => state.colorCollections.fields.image_description,
            maxPrintWidth: state => state.colorCollections.fields.max_print_width,
            topics: state => state.colorCollections.fields.topics,
            interiors: state => state.colorCollections.fields.interiors,
            tags: state => state.colorCollections.fields.tags,
            owner: state => state.colorCollections.fields.owner_id,
            publish: state => state.colorCollections.fields.publish,
            hasPublishedImages: state => state.colorCollections.fields.has_published_images,
            hasImages: state => state.colorCollections.fields.has_images,
            metaTitle: state => state.colorCollections.fields.meta_title,
            description: state => state.colorCollections.fields.description,
            keywords: state => state.colorCollections.fields.keywords,
            ownerList: state => state.subCategories.itemsByType.owners,
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
        isUniqueTitleEdit() {
            return this.$store.getters['colorCollections/isUniqueTitleEdit'](this.title, this.id);
        },
        isUniqueAliasEdit () {
            return this.$store.getters['colorCollections/isUniqueAliasEdit'](this.alias, this.id);
        }
    },
    created () {
        this.clearFieldsAction();
        Promise.all([
            this.getItemAction(this.id),
            this.getItemsAction(),
            this.getCategoriesAction(),
            this.getSubcategoriesAction('owners')
        ])
            .then(() => {
                this.setPageTitle(this.title);
                this.responseData = true;
            })
            .then(() => {
                this.$v.$reset();
                this.controlSaveVisibilities = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            clearFieldsAction: 'colorCollections/clearItemFields',
            getItemsAction: 'colorCollections/getItems',
            getItemAction: 'colorCollections/getItem',
            getCategoriesAction: 'categories/getItems',
            getSubcategoriesAction: 'subCategories/getItemsWithType'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    data: {
                        title: this.title,
                        alias: this.alias,
                        image_id: this.imageId,
                        max_print_width: this.maxPrintWidth,
                        image_description: this.imageDescription,
                        topics: this.topics,
                        interiors: this.interiors,
                        tags: this.tags,
                        owner_id: this.owner || '',
                        publish: Number(this.publish),
                        meta_title: this.metaTitle,
                        description: this.description,
                        keywords: this.keywords
                    },
                    id: this.id
                },
                title: this.title,
                successText: 'Коллекция обновлена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            return this.delete({
                payload: this.id,
                title: this.title,
                alertText: `коллекцию «${this.title}»`,
                successText: 'Коллекция удалена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>
