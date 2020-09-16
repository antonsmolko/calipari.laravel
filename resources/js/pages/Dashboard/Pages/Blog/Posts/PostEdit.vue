<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" title="Назад" />
                        <div>
                            <slide-y-down-transition v-show="controlSaveVisibilities && $v.$anyDirty && !$v.$invalid">
                                <control-button @click="onUpdate" />
                            </slide-y-down-transition>
                            <control-button
                                title="Удалить"
                                icon="delete"
                                color="md-danger"
                                @click="onDelete" />
                        </div>
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
                <tabs
                    :tab-name="['Установки', 'SEO']"
                    color-button="success">
                    <template slot="tab-pane-1">
                        <v-input title="Заголовок"
                                 icon="title"
                                 name="title"
                                 :value="title"
                                 :vDelay="true"
                                 :differ="true"
                                 :module="storeModule"
                                 :vField="$v.title"
                                 :vRules="{ required: true, minLength: true }" />

                        <v-input title="Алиас"
                                 icon="code"
                                 name="alias"
                                 :value="alias"
                                 :differ="true"
                                 :vDelay="true"
                                 :vField="$v.alias"
                                 :module="storeModule"
                                 :vRules="{ required: true, unique: true, minLength: true, alias: true }" />

                        <v-datepicker
                            :vField="$v.date"
                            modelType="number"
                            :value="date"
                            :differ="true"
                            :vRules="{ required: true }"
                            :module="storeModule"/>

                        <v-input title="Интро"
                                 icon="subject"
                                 name="intro"
                                 :value="intro"
                                 :differ="true"
                                 :maxlength="250"
                                 :module="storeModule"
                                 :vField="$v.intro" />

                        <v-image title="Основное изображение"
                                 name="image"
                                 :imgDefault="imagePath"
                                 :vField="$v.image"
                                 :vRules="{ required: true }"
                                 :module="storeModule" />

                        <v-select title="Типы" placeholder="Выберите тип статьи"
                                  name="type"
                                  indexName="index"
                                  nameField="title"
                                  :differ="true"
                                  :value="type"
                                  :vField="$v.type"
                                  :vRules="{ required: true }"
                                  :options="$config.postTypes"
                                  :module="storeModule" />

                        <post-image-list
                            :id="this.id"
                            :images="images"/>

                        <text-editor title="Контент"
                                     class="text-editor"
                                     name="content"
                                     :value="content"
                                     :differ="true"
                                     :vField="$v.content"
                                     :vRules="{ required: true }"
                                     :module="storeModule" />
                    </template>
                    <template slot="tab-pane-2">
                        <v-input title="Мета заголовок"
                                 icon="title"
                                 name="meta_title"
                                 :value="metaTitle"
                                 :differ="true"
                                 :maxlength="150"
                                 :module="storeModule"
                                 :vField="$v.meta_title" />

                        <v-input title="Описание"
                                 icon="description"
                                 name="description"
                                 :value="description"
                                 :differ="true"
                                 :vField="$v.description"
                                 :maxlength="250"
                                 :module="storeModule" />

                        <v-input title="Ключевые слова"
                                 icon="vpn_key"
                                 name="keywords"
                                 :value="keywords"
                                 :differ="true"
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
import VDatepicker from "@/custom_components/VForm/VDatepicker"
import VSelect from "@/custom_components/VForm/VSelect"
import PostImageList from "@/custom_components/Pages/Blog/PostImageList"
import TextEditor from '@/custom_components/Editors/TextEditor'
import { pageTitle } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'
import config from '@/config'

export default {
    name: 'PostEdit',
    components: {
        Tabs,
        VDatepicker,
        VSelect,
        PostImageList,
        'text-editor': TextEditor
    },
    mixins: [
        pageTitle,
        updateMethod,
        deleteMethod
    ],
    props: {
        id: {
            type: [Number, String],
            required: true
        }
    },
    data: () => ({
        responseData: false,
        controlSaveVisibilities: false,
        storeModule: 'posts',
        redirectRoute: {
            name: 'cms.pages.blog',
            params: {
                activeTab: 'Модули',
                activePostTab: config.defaultPostType.title
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
            testAlias (value) {
                return value.trim() === '' || (this.$config.ALIAS_REGEXP).test(value);
            },
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.alias.$dirty || this.isUniqueAlias
            },
            touch: false
        },
        image: {
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
        content: {
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
        }
    },
    computed: {
        ...mapState('posts', {
            title: state => state.fields.title,
            alias: state => state.fields.alias,
            date: state => state.fields.date,
            intro: state => state.fields.intro,
            type: state => state.fields.type,
            image: state => state.fields.image,
            imagePath: state => state.fields.image_path,
            content: state => state.fields.content,
            images: state => state.fields.images,
            metaTitle: state => state.fields.meta_title,
            description: state => state.fields.description,
            keywords: state => state.fields.keywords,
        }),
        isUniqueAlias () {
            return this.$store.getters['posts/isUniqueAliasEdit'](this.alias, this.id);
        }
    },
    created () {
        const tab = this.$route.params.activePostTab;
        if (tab) {
            this.$set(this.redirectRoute.params, 'activePostTab', this.getTabTitle(tab))
        }
        this.clearFieldsAction();
        Promise.all([
            this.getItemAction(this.id),
            this.getItemsAction()
        ])
            .then(() => {
                this.setPageTitle(`Статья «${this.title}»`);
                this.responseData = true;
            })
            .then(() => {
                this.$v.$reset();
                this.controlSaveVisibilities = true;
            })
            .catch(() => this.$route.push(this.redirectRoute));
    },
    methods: {
        ...mapActions('posts', {
            getItemAction: 'getItem',
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearItemFields'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    formData: {
                        title: this.title,
                        date: this.date,
                        alias: this.alias,
                        intro: this.intro,
                        type: this.type,
                        image: this.image,
                        content: this.content,
                        meta_title: this.metaTitle,
                        description: this.description,
                        keywords: this.keywords
                    },
                    id: this.id
                },
                title: this.title,
                successText: 'Статья обновлена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            this.delete({
                payload: this.id,
                title: this.title,
                alertText: `статью «${this.title}»`,
                successText: 'Статья удалена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        },
        getTabTitle (index) {
            const tab = config.postTypes.find(type => type.index === index);

            return tab ? tab.title : config.defaultPostType.title;
        }
    }
}
</script>

<style lang="scss">
.text-editor .ck.ck-editor__main>.ck-editor__editable {
    height: 700px !important;
}
</style>
