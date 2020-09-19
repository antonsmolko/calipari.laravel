<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link :to="{ name: 'cms.pages' }" title="В панель страниц" />
                        <div>
                            <slide-y-down-transition v-show="$v.$anyDirty && !$v.$invalid">
                                <control-button title="Сохранить и выйти" @click="onUpdate" :disabled="loading" />
                            </slide-y-down-transition>
                        </div>
                    </md-card-content>
                </md-card>
                <div>
                    <div class="md-progress-bar__container">
                        <md-progress-bar v-show="loading" md-mode="indeterminate"></md-progress-bar>
                    </div>
                    <tabs
                        :tab-name="['Основные настройки', 'Модули', 'SEO']"
                        :activeTab="activeTab"
                        color-button="success">
                        <template slot="tab-pane-1">
                            <div class="md-layout">
                                <div class="md-layout-item">
                                    <v-input title="Заголовок"
                                             icon="title"
                                             name="title"
                                             :value="fields.title"
                                             :vField="$v.fields.title"
                                             :differ="true"
                                             :maxlength="70"
                                             :module="storeModule"
                                             :vRules="{ required: true, unique: true, minLength: true }" />
                                    <v-image name="image"
                                             :imgDefault="item.image_path"
                                             :vField="$v.fields.image"
                                             :withDelete="true"
                                             @delete="handleDeleteImage"
                                             :module="storeModule" />
                                    <text-editor title="Контент"
                                             name="content"
                                             :value="fields.content"
                                             :vField="$v.fields.content"
                                             :differ="true"
                                             :module="storeModule" />
                                </div>

                            </div>
                        </template>
                        <template slot="tab-pane-2">
                            <slot name="modules"/>
                        </template>
                        <template slot="tab-pane-3">
                            <div class="md-layout">
                                <div class="md-layout-item">
                                    <v-input title="Мета заголовок"
                                             icon="title"
                                             name="meta_title"
                                             :value="fields.meta_title"
                                             :vField="$v.fields.meta_title"
                                             :differ="true"
                                             :maxlength="150"
                                             :module="storeModule" />
                                    <v-input title="Описание"
                                             icon="description"
                                             name="description"
                                             :value="fields.description"
                                             :vField="$v.fields.description"
                                             :differ="true"
                                             :maxlength="250"
                                             :module="storeModule" />

                                    <v-input title="Ключевые слова"
                                             icon="vpn_key"
                                             name="keywords"
                                             :value="fields.keywords"
                                             :vField="$v.fields.keywords"
                                             :differ="true"
                                             :maxlength="150"
                                             :module="storeModule" />

                                    <div class="space-30"></div>
                                </div>
                            </div>
                        </template>
                    </tabs>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
import Tabs from '@/custom_components/Tabs.vue'
import TextEditor from '@/custom_components/Editors/TextEditor'
import { pageTitle } from '@/mixins/base'
import { updateMethod } from '@/mixins/crudMethods'

export default {
    name: "PageLayout",
    components: {
        Tabs,
        'text-editor': TextEditor
    },
    mixins: [
        updateMethod,
        pageTitle
    ],
    props: {
        pageId: {
            type: Number,
            default: 1
        }
    },
    data: () => ({
        activeTab: '',
        redirectRoute: '/cms/pages',
        responseData: false,
        storeModule: 'pages'
    }),
    validations: {
        fields: {
            title: {
                required,
                touch: false,
                minLength: minLength(2),
                isUnique (value) {
                    return (value.trim() === '') && !this.$v.fields.title.$dirty || this.isUniqueTitle
                }
            },
            image: {
                touch: false
            },
            content: {
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
        }

    },
    computed: {
        ...mapState({
            fields: state => state.pages.fields,
            item: state => state.pages.item,
            loading: state => state.loading
        }),
        isUniqueTitle () {
            return this.$store.getters['pages/isUniqueTitle'](this.fields.title, this.item.id);
        }
    },
    created () {
        if (this.$route.params.activeTab) {
            this.activeTab = this.$route.params.activeTab;
        }

        Promise.all([
            this.getItemAction(this.pageId),
            this.getItemsAction()
        ])
            .then(() => {
                this.setPageTitle(this.fields.title)
                this.responseData = true
            })
            .catch(() => this.$router.push(this.redirectRoute))
    },
    methods: {
        ...mapActions('pages', {
            getItemAction: 'getItem',
            getItemsAction: 'getItems',
            deleteImageAction: 'deleteImage'
        }),
        async onUpdate () {
            await this.update({
                sendData: {
                    id: this.item.id,
                    formData: {
                        title: this.fields.title,
                        content: this.fields.content,
                        image: this.fields.image,
                        meta_title: this.fields.meta_title,
                        description: this.fields.description,
                        keywords: this.fields.keywords
                    }
                },
                title: this.fields.title,
                successText: 'Страница обновлена!',
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        handleDeleteImage () {
            this.deleteImageAction(this.item.id);
        }
    }
}
</script>
