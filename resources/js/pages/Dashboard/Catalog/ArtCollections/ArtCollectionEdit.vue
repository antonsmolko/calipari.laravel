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
                            <control-button
                                title="Удалить"
                                @click="onDelete"
                                icon="delete"
                                class="md-danger" />
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
                                 :vField="$v.title"
                                 :differ="true"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true }" />

                        <v-input title="Алиас"
                                 icon="code"
                                 name="alias"
                                 :value="alias"
                                 :vDelay="true"
                                 :vField="$v.alias"
                                 :differ="true"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true, alias: true }" />

                            <v-image name="image"
                                     :imgDefault="imagePath"
                                     :vField="$v.image"
                                     :vRules="{ required: true }"
                                     :module="storeModule" />

                        <v-switch :vField="$v.publish"
                                  :disabled="!hasPublishedImages"
                                  :differ="true"
                                  :value="publish"
                                  :module="storeModule">
                            <span v-if="!hasPublishedImages">Нет опубликованных изображений</span>
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
                                 :vField="$v.metaTitle"
                                 :maxlength="150"
                                 :module="storeModule" />

                        <v-textarea name="description"
                                    :value="description"
                                    :vField="$v.description"
                                    :differ="true"
                                    :module="storeModule" />

                        <v-textarea title="Ключевые слова"
                                    name="keywords"
                                    :value="keywords"
                                    :vField="$v.keywords"
                                    :differ="true"
                                    :module="storeModule" />
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
    name: 'ArtCollectionEdit',
    components: { VSelect },
    mixins: [pageTitle, updateMethod, deleteMethod],
    props: {
        id: {
            type: [ String, Number ],
            required: true
        }
    },
    data: () => ({
        redirectRoute: { name: 'cms.catalog.art-collections' },
        responseData: false,
        storeModule: 'artCollections',
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
        ...mapState('artCollections', {
            title: state => state.fields.title,
            alias: state => state.fields.alias,
            image: state => state.fields.image,
            imagePath: state => state.fields.image_path,
            publish: state => state.fields.publish,
            hasPublishedImages: state => state.fields.has_published_images,
            metaTitle: state => state.fields.meta_title,
            description: state => state.fields.description,
            keywords: state => state.fields.keywords,
        }),
        isUniqueTitleEdit () {
            return this.$store.getters['artCollections/isUniqueTitleEdit'](this.title, this.id);
        },
        isUniqueAliasEdit () {
            return this.$store.getters['artCollections/isUniqueAliasEdit'](this.alias, this.id);
        }
    },
    created () {
        this.clearFieldsAction();
        Promise.all([
            this.getItemAction(this.id),
            this.getItemsAction()
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
        ...mapActions('artCollections', {
            clearFieldsAction: 'clearItemFields',
            getItemsAction: 'getItems',
            getItemAction: 'getItem'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    payload: {
                        title: this.title,
                        alias: this.alias,
                        image: this.image,
                        publish: Number(this.publish),
                        meta_title: this.metaTitle || '',
                        description: this.description || '',
                        keywords: this.keywords || ''
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
