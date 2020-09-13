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
                                 :module="storeModule"
                                 :vField="$v.title"
                                 :vRules="{ required: true, unique: true, minLength: true }" />
                        <v-textarea name="description"
                                    :value="description"
                                    :vField="$v.description"
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

import { subCategoryPage } from '@/mixins/categories'
import { pageTitle } from '@/mixins/base'
import { updateMethod, deleteMethod } from '@/mixins/crudMethods'

export default {
    name: 'SubCategoryEdit',
    props: {
        id: {
            type: [ Number, String ],
            required: true
        }
    },
    mixins: [
        subCategoryPage,
        pageTitle,
        updateMethod,
        deleteMethod
    ],
    data: () => ({
        imageFile: '',
        responseData: false,
        storeModule: 'subCategories',
        redirectRoute: {
            name: 'cms.catalog.subcategories.list'
        }
    }),
    validations: {
        title: {
            required,
            touch: false,
            minLength: minLength(2),
            isUnique (value) {
                return (value.trim() === '') && !this.$v.title.$dirty || this.isUniqueTitleEdit
            }
        },
        description: {
            touch: false
        }
    },
    computed: {
        ...mapState('subCategories', {
            title: state => state.fields.title,
            description: state => state.fields.description,
            hasImages: state => state.fields.hasImages
        }),
        isUniqueTitleEdit () {
            return this.$store.getters['subCategories/isUniqueTitleEdit'](this.title, this.id);
        }
    },
    created () {
        this.clearFieldsAction()
        Promise.all([
            this.getItemsAction(this.category_type),
            this.getItemAction({
                type: this.category_type,
                id: this.id
            })
        ])
            .then(() => {
                this.setPageTitle(this.title);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    beforeDestroy () {
        this.clearFieldsAction()
    },
    methods: {
        ...mapActions('subCategories', {
            getItemAction: 'getItem',
            getItemsAction: 'getItems',
            clearFieldsAction: 'clearItemFields'
        }),
        onUpdate () {
            return this.update({
                sendData: {
                    id: this.id,
                    type: this.category_type,
                    data: {
                        title: this.title,
                        description: this.description
                    }
                },
                title: this.title,
                successText: this.pageProps[this.category_type].UPDATE_SUCCESS_TEXT,
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            });
        },
        onDelete () {
            return this.delete({
                payload: {
                    type: this.category_type,
                    id: this.id
                },
                title: this.title,
                alertText: this.pageProps[this.category_type].DELETE_CONFIRM_TEXT(this.title),
                successText: this.pageProps[this.category_type].DELETE_SUCCESS_TEXT,
                storeModule: this.storeModule,
                redirectRoute: this.redirectRoute
            })
        }
    }
}
</script>
