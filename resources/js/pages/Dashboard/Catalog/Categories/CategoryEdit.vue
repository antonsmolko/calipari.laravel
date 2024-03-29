<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" />
                        <div>
                            <slide-y-down-transition v-show="$v.$anyDirty && !$v.$invalid">
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
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header />
                    <md-card-content>

                        <v-input title="Заголовок"
                                 icon="title"
                                 name="title"
                                 :value="title"
                                 :differ="true"
                                 :vField="$v.title"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true }" />

                        <v-input title="Алиас"
                                 icon="code"
                                 name="alias"
                                 :value="alias"
                                 :differ="true"
                                 :vDelay="true"
                                 :vField="$v.alias"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true, alias: true }" />

                        <div v-if="isTypeColors">
                            <h4 class="card-title">Цвет</h4>
                            <div class="md-color-sample mt-2" :style="`background-color: ${alias}`"></div>
                        </div>

                        <v-image v-if="!isTypeColors"
                                 name="image"
                                 :imgDefault="imagePath"
                                 :vField="$v.image"
                                 :vRules="{ required: true }"
                                 :module="storeModule" />

                        <v-switch :vField="$v.publish"
                                  :disabled="!hasPublishedImages"
                                  :differ="true"
                                  :value="publish"
                                  :module="storeModule">
                            <span v-if="!hasPublishedImages">Нет опубликованных изображений!</span>
                        </v-switch>

                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header icon="timeline" title="SEO" />
                    <md-card-content>
                        <v-input title="Мета заголовок"
                                 name="meta_title"
                                 :value="metaTitle"
                                 :maxlength="250"
                                 :vField="$v.metaTitle"
                                 :module="storeModule" />

                        <v-textarea name="description"
                                    :value="description"
                                    :differ="true"
                                    :vField="$v.description"
                                    :module="storeModule" />

                        <v-textarea title="Ключевые слова"
                                    name="keywords"
                                    :value="keywords"
                                    :differ="true"
                                    :vField="$v.keywords"
                                    :module="storeModule" />

                        <div class="space-30"></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { required, minLength } from 'vuelidate/lib/validators'

import { categoryPage } from '@/mixins/categories'
import { pageTitle } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'CategoryEdit',
    props: {
        id: {
            type: [ Number, String ],
            required: true
        }
    },
    mixins: [
        categoryPage,
        pageTitle,
        updateMethod,
        deleteMethod
    ],
    data: () => ({
        responseData: false
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return ((value.trim() === '') && !this.$v.title.$dirty) || this.isUniqueTitleEdit
            }
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
        image: {
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
        ...mapState('categories', {
            title: state => state.fields.title,
            alias: state => state.fields.alias,
            image: state => state.fields.image,
            imagePath: state => state.fields.image_path,
            publish: state => state.fields.publish,
            metaTitle: state => state.fields.meta_title,
            description: state => state.fields.description,
            keywords: state => state.fields.keywords,
            hasPublishedImages: state => state.fields.has_published_images
        }),
        isTypeColors () {
            return this.category_type === 'colors'
        },
        isUniqueTitleEdit () {
            return this.$store.getters['categories/isUniqueTitleEdit'](this.title, this.id);
        },
        isUniqueAliasEdit () {
            return this.$store.getters['categories/isUniqueAliasEdit'](this.alias, this.id);
        }
    },
    created () {
        this.clearFieldsAction();
        Promise.all([
            this.getItemsAction(),
            this.getItemAction(this.id)
        ])
            .then(() => {
                this.setPageTitle(this.title);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    beforeDestroy () {
        this.clearFieldsAction();
    },
    methods: {
        ...mapActions('categories', {
            getItemAction: 'getItemFromEdit',
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearFields'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    category_id: this.id,
                    formData: {
                        type: this.category_type,
                        title: this.title,
                        alias: this.alias,
                        image: this.image,
                        publish: Number(this.publish),
                        meta_title: this.metaTitle || '',
                        description: this.description || '',
                        keywords: this.keywords || ''
                    }
                },
                title: this.title,
                successText: 'Категория обновлена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            return this.delete({
                payload: this.id,
                title: this.title,
                alertText: `категорию «${this.title}»`,
                successText: 'Категория удалена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>

<style lang="scss">
.md-color-sample {
    flex: none;
    width: 100%;
    height: 120px;
    border-radius: 3px;
    will-change: background-color;
    background-color: gray;
    box-shadow: 0 12px 20px -10px rgba(153, 153, 153, 0.14), 0 4px 20px 0px rgba(153, 153, 153, 0.2), 0 7px 8px -5px rgba(153, 153, 153, 0.12);
}
</style>
