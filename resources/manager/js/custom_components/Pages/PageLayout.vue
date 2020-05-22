<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link route="manager.pages" title="В панель страниц" />
                        <div>
                            <slide-y-down-transition v-show="$v.$anyDirty && !$v.$invalid">
                                <control-button title="Сохранить" @click="onUpdate" />
                            </slide-y-down-transition>
                        </div>
                    </md-card-content>
                </md-card>
                <div>
                    <tabs
                        :tab-name="['Основные настройки', 'SEO']"
                        color-button="success">
                        <template slot="tab-pane-1">
                            <div class="md-layout md-gutter">
                                <div class="md-layout-item">
                                    <h3>Основные настройки</h3>
                                    <v-input title="Заголовок"
                                             icon="title"
                                             name="title"
                                             :value="fields.title"
                                             :vField="$v.fields.title"
                                             :differ="true"
                                             :module="storeModule"
                                             :vRules="{ required: true, unique: true, minLength: true }" />
                                    <v-input title="Длиный заголовок"
                                             icon="title"
                                             name="long_title"
                                             :value="fields.long_title"
                                             :vField="$v.fields.long_title"
                                             :differ="true"
                                             :maxlength="150"
                                             :module="storeModule" />
                                    <v-image name="image"
                                             :imgDefault="item.image_path"
                                             :vField="$v.fields.image"
                                             :withDelete="true"
                                             @delete="handleDeleteImage"
                                             :module="storeModule" />
                                    <text-editor title="Интро"
                                             name="intro"
                                             :value="fields.intro"
                                             :vField="$v.fields.intro"
                                             :differ="true"
                                             :module="storeModule" />
                                </div>

                            </div>
                        </template>
                        <template slot="tab-pane-2">
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
                        </template>
                    </tabs>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Tabs from '@/custom_components/Tabs.vue'
import TextEditor from '@/custom_components/Editors/TextEditor'
import { required, minLength } from 'vuelidate/lib/validators'

import { updateMethod } from '@/mixins/crudMethods'

export default {
    name: "PageLayout",
    components: {
        Tabs,
        'text-editor': TextEditor },
    mixins: [
        updateMethod
    ],
    props: {
        item: {
            type: Object,
            required: true
        },
        fields: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        redirectRoute: '/manager/pages',
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
                    return (value.trim() === '') && !this.$v.fields.title.$dirty || !this.isUniqueTitle
                }
            },
            long_title: {
                touch: false
            },
            image: {
                touch: false
            },
            intro: {
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
        isUniqueTitle() {
            return this.$store.getters['pages/isUniqueTitle'](this.fields.title, this.item.id);
        }
    },
    created() {
        this.getItemsAction()
            .then(() => this.responseData = true);
    },
    methods: {
        ...mapActions('pages', {
            getItemsAction: 'getItems',
            deleteImageAction: 'deleteImage'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    id: this.item.id,
                    formData: {
                        title: this.fields.title,
                        long_title: this.fields.long_title,
                        intro: this.fields.intro,
                        image: this.fields.image,
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
