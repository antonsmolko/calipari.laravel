<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" title="К списку коллекций" />
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button
                                title="Создать коллекцию"
                                @click="onCreate" />
                        </slide-y-down-transition>
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
                                 :vField="$v.title"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true }" />

                        <v-input title="Алиас"
                                 icon="code"
                                 name="alias"
                                 :vDelay="true"
                                 :vField="$v.alias"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true, alias: true }" />

                        <v-image name="image"
                                 :vField="$v.image"
                                 :vRules="{ required: true }"
                                 :module="storeModule"/>

                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header icon="timeline" title="SEO" />
                    <md-card-content>

                        <v-input title="Мета заголовок"
                                 name="meta_title"
                                 :vField="$v.metaTitle"
                                 :maxlength="150"
                                 :module="storeModule" />

                        <v-textarea name="description"
                                    :vField="$v.description"
                                    :module="storeModule" />

                        <v-textarea title="Ключевые слова"
                                    name="keywords"
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
import { required, minLength, numeric } from 'vuelidate/lib/validators'

import { pageTitle } from '@/mixins/base'
import { createMethod } from '@/mixins/crudMethods'

export default {
    name: 'ArtCollectionCreate',
    mixins: [ pageTitle, createMethod ],
    data: () => ({
        redirectRoute: { name: 'cms.catalog.art-collections' },
        responseData: false,
        storeModule: 'artCollections'
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.title.$dirty || this.isUniqueTitle
            }
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
        image: {
            required,
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
            metaTitle: state => state.fields.meta_title,
            description: state => state.fields.description,
            keywords: state => state.fields.keywords
        }),
        isUniqueTitle () {
            return this.$store.getters['artCollections/isUniqueTitle'](this.title);
        },
        isUniqueAlias () {
            return this.$store.getters['artCollections/isUniqueAlias'](this.alias);
        }
    },
    created () {
        this.clearFieldsAction();
        this.getItemsAction()
            .then(() => {
                this.setPageTitle('Новая коллекция');
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            getItemsAction: 'artCollections/getItems',
            clearFieldsAction: 'artCollections/clearItemFields'
        }),
        onCreate () {
            return this.create({
                sendData: {
                    title: this.title,
                    alias: this.alias,
                    image: this.image,
                    meta_title: this.metaTitle,
                    description: this.description,
                    keywords: this.keywords
                },
                title: this.title,
                successText: 'Коллекция создана!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>
