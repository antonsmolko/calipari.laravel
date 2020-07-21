<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :route="redirectRoute.name" title="Назад" />
                        <slide-y-down-transition v-show="!$v.$invalid">
                            <control-button @click="onCreate" />
                        </slide-y-down-transition>
                    </md-card-content>
                </md-card>
                <tabs
                    :tab-name="['Установки', 'SEO']"
                    color-button="success">
                    <template slot="tab-pane-1">
                        <v-input title="Заголовок"
                                 icon="title"
                                 name="title"
                                 :module="storeModule"
                                 :vField="$v.title"
                                 :vRules="{ required: true, minLength: true }" />

                        <v-input title="Алиас"
                                 icon="code"
                                 name="alias"
                                 :module="storeModule"
                                 :vDelay="true"
                                 :vField="$v.alias"
                                 :vRules="{ required: true, alias: true, unique: true, minLength: true }" />

                        <VDatepicker
                            :vField="$v.date"
                            modelType="number"
                            :vRules="{ required: true }"
                            :module="storeModule"/>

                        <v-input title="Интро"
                                 icon="subject"
                                 name="intro"
                                 :maxlength="250"
                                 :module="storeModule"
                                 :vField="$v.intro" />

                        <v-image title="Основное изображение"
                                 name="image"
                                 :vField="$v.image"
                                 :vRules="{ required: true }"
                                 :module="storeModule" />

                        <v-select title="Типы" placeholder="Выберите тип статьи"
                                  name="type"
                                  indexName="index"
                                  nameField="title"
                                  :vField="$v.type"
                                  :vRules="{ required: true }"
                                  :options="$config.postTypes"
                                  :module="storeModule" />

                        <text-editor title="Контент"
                                     class="text-editor"
                                     name="content"
                                     :vField="$v.content"
                                     :vRules="{ required: true }"
                                     :module="storeModule" />
                    </template>
                    <template slot="tab-pane-2">
                        <v-input title="Мета заголовок"
                                 icon="title"
                                 name="meta_title"
                                 :maxlength="150"
                                 :module="storeModule"
                                 :vField="$v.meta_title" />

                        <v-input title="Описание"
                                 icon="description"
                                 name="description"
                                 :vField="$v.description"
                                 :maxlength="250"
                                 :module="storeModule" />

                        <v-input title="Ключевые слова"
                                 icon="vpn_key"
                                 name="keywords"
                                 :vField="$v.keywords"
                                 :maxlength="150"
                                 :module="storeModule" />
                        <div class="space-20"></div>
                    </template>
                </tabs>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, numeric, minLength } from 'vuelidate/lib/validators'
import Tabs from '@/custom_components/Tabs.vue'
import VDatepicker from "@/custom_components/VForm/VDatepicker";
import VSelect from "@/custom_components/VForm/VSelect"
import TextEditor from '@/custom_components/Editors/TextEditor'
import { pageTitle } from '@/mixins/base'
import { createMethod } from '@/mixins/crudMethods'

export default {
    name: 'PostCreate',
    components: {
        Tabs,
        VDatepicker,
        VSelect,
        'text-editor': TextEditor
    },
    mixins: [
        pageTitle,
        createMethod
    ],
    data: () => ({
        responseData: false,
        storeModule: 'posts',
        redirectRoute: {
            name: 'cms.pages.blog',
            params: {
                activeTab: 'Модули'
            }
        }
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2)
        },
        alias: {
            required,
            touch: false,
            testAlias (value) {
                return value.trim() === '' || (this.$config.ALIAS_REGEXP).test(value);
            },
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.alias.$dirty || this.isUniqueAlias
            },
        },
        image: {
            required,
            touch: false
        },
        date: {
            numeric,
            required,
            touch: false
        },
        type: {
            required,
            touch: false
        },
        intro: {
            touch: false
        },
        meta_title: {
            touch: false
        },
        description: {
            touch: false
        },
        keywords: {
            touch: false
        },
        content: {
            required,
            touch: false
        }
    },
    computed: {
        ...mapState('posts', {
            title: state => state.fields.title,
            alias: state => state.fields.alias,
            date: state => state.fields.date,
            type: state => state.fields.type,
            image: state => state.fields.image,
            intro: state => state.fields.intro,
            metaTitle: state => state.fields.meta_title,
            description: state => state.fields.description,
            keywords: state => state.fields.keywords,
            content: state => state.fields.content
        }),
        isUniqueAlias () {
            return this.$store.getters['posts/isUniqueAlias'](this.alias);
        }
    },
    created() {
        this.clearFieldsAction();
        this.getItemsAction()
            .then(() => {
                this.setPageTitle('Новый пример работы');
                this.responseData = true;
            })
            .catch(() => this.$route.push(this.redirectRoute));
    },
    methods: {
        ...mapActions('posts', {
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearItemFields'
        }),
        onCreate() {
            return this.create({
                sendData: {
                    title: this.title,
                    date: this.date,
                    alias: this.alias,
                    type: this.type,
                    image: this.image,
                    intro: this.intro,
                    meta_title: this.metaTitle,
                    description: this.description,
                    keywords: this.keywords,
                    content: this.content
                },
                title: this.title,
                successText: 'Статья создана!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>

<style lang="scss">
    .text-editor .ck.ck-editor__main>.ck-editor__editable {
        height: 700px !important;
    }
</style>
