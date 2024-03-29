<template>
    <div v-if="responseData">

        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link
                            :to="{ name: 'cms.catalog.categories.list', params: { category_type } }"/>
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button @click="onCreate"/>
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
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
                                 :vRules="{ required: true, unique: true, minLength: true }"/>

                        <v-input title="Алиас"
                                 icon="code"
                                 name="alias"
                                 :vDelay="true"
                                 :vField="$v.alias"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true, alias: true }"/>

                        <div v-if="isTypeColors">
                            <h4 class="card-title">Цвет</h4>
                            <div class="md-color-sample mt-2" :style="`background-color: ${alias}`"></div>
                        </div>

                        <v-image v-if="!isTypeColors"
                                 name="image"
                                 :vField="$v.image"
                                 :vRules="{ required: true }"
                                 :module="storeModule"/>

                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                    <card-icon-header icon="timeline" title="SEO"/>
                    <md-card-content>
                        <v-input title="Мета заголовок"
                                 name="meta_title"
                                 :vField="$v.metaTitle"
                                 :maxlength="150"
                                 :module="storeModule"/>

                        <v-textarea name="description"
                                    :vField="$v.description"
                                    :module="storeModule"/>

                        <v-textarea title="Ключевые слова"
                                    name="keywords"
                                    :vField="$v.keywords"
                                    :module="storeModule"/>

                        <div class="space-30"></div>
                    </md-card-content>
                </md-card>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { required, requiredUnless, minLength } from 'vuelidate/lib/validators'

import { categoryPage } from '@/mixins/categories'
import { createMethod } from '@/mixins/crudMethods'

export default {
    name: 'CategoryCreate',
    props: {
        category_type: {
            type: String,
            required: true
        },
        result: []
    },
    mixins: [
        categoryPage,
        createMethod
    ],
    data: () => ({
        responseData: false
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique(value) {
                return ((value.trim() === '') && !this.$v.title.$dirty) || this.isUniqueTitle;
            }
        },
        alias: {
            required,
            touch: false,
            testAlias(value) {
                return value.trim() === '' || (this.$config.ALIAS_REGEXP).test(value);
            },
            minLength: minLength(2),
            isUnique(value) {
                return ((value.trim() === '') && !this.$v.alias.$dirty) || this.isUniqueAlias;
            },
        },
        image: {
            required: requiredUnless('isTypeColors'),
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
            publish: state => state.fields.publish,
            metaTitle: state => state.fields.meta_title,
            description: state => state.fields.description,
            keywords: state => state.fields.keywords
        }),
        isTypeColors () {
            return this.category_type === 'colors'
        },
        isUniqueTitle () {
            return this.$store.getters['categories/isUniqueTitle'](this.title);
        },
        isUniqueAlias () {
            return this.$store.getters['categories/isUniqueAlias'](this.alias);
        }
    },
    created () {
        this.getItemsAction()
            .then(() => {
                this.setPageTitle(this.pageProps[this.category_type].CREATE_PAGE_TITLE);
                this.clearFieldsAction();
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    beforeDestroy () {
        this.clearFieldsAction();
    },
    methods: {
        ...mapActions('categories', {
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearFields'
        }),
        onCreate () {
            return this.create({
                sendData: {
                    type: this.category_type,
                    title: this.title,
                    alias: this.alias,
                    image: this.image,
                    publish: Number(this.publish),
                    meta_title: this.metaTitle || '',
                    description: this.description || '',
                    keywords: this.keywords || ''
                },
                title: this.title,
                successText: 'Категория создана!',
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
