<template>
    <div v-if="responseData">

        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link
                            v-if="category_type === 'images'"
                            :to="{ name: 'cms.images' }"/>
                        <router-button-link
                            v-else
                            :to="{ name: 'cms.catalog.categories.images', params: { category_type, id } }"/>
                        <div>
                            <slide-y-down-transition v-show="!$v.$invalid">
                                <control-button
                                    icon="image_search"
                                    title="Искать"
                                    @click="findDuplicates" />
                            </slide-y-down-transition>
                            <control-button
                                icon="get_app"
                                title="Загрузить"
                                @click="uploadImage" />
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>

        <div class="md-layout">
            <div class="md-layout-item md-size-100">
                <div class="md-layout-item md-progress-bar__container">
                    <md-progress-bar
                        v-if="fileProgress"
                        class="md-info"
                        md-mode="indeterminate"
                        :md-value="fileProgress"/>
                </div>
                <md-card>
                    <card-icon-header icon="insert_photo"/>
                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item">
                                <v-image name="image"
                                         :vField="$v.image"
                                         :vRules="{ required: true }"
                                         :module="storeModule"/>
                            </div>
                            <div class="md-layout-item">
                                <v-input title="Коэффициент расхождения"
                                         icon="tune"
                                         name="difference"
                                         :value="difference"
                                         :maxlength="3"
                                         :module="storeModule"
                                         :vField="$v.difference"
                                         :vRules="{ numeric: true }"/>
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
            <div class="md-layout-item md-size-100">
                <md-card>
                    <card-icon-header icon="content_copy" title="Результат"/>
                    <md-card-content>
                        <template v-if="duplicates.length">
                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-size-10 mb-2"
                                     v-for="duplicate in duplicates"
                                     :key="duplicate.id">
                                    <resource-image
                                        class="img-raised rounded"
                                        style="width: 200px"
                                        :name="duplicate.path"
                                        :width="300"/>
                                    <div class="md-duplicate-footer md-flex md-between">
                                        <span>{{ duplicate.id }}</span>
                                        <md-icon class="md-duplicate-trash" v-if="duplicate.deleted_at">delete</md-icon>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="duplicateFindStatus === 'end' && !duplicates.length">
                            <div class="alert alert-info mt-2">
                                <h3>Дубликатов не найдено! Можете загрузить изображение.</h3>
                            </div>
                        </template>
                        <template v-else-if="duplicateFindStatus === 'progress'">
                            <div class="mt-3 mb-3">
                                <div class="progress-bar__container">
                                    <md-progress-bar md-mode="indeterminate"></md-progress-bar>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="mt-5"></div>
                        </template>
                    </md-card-content>
                </md-card>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required } from "vuelidate/lib/validators"
import ResourceImage from "@/custom_components/Images/ResourceImage";
import { pageTitle } from '@/mixins/base'
import { uploadMethod } from '@/mixins/crudMethods'

export default {
    name: "FindDuplicates",
    components: { ResourceImage },
    mixins: [pageTitle, uploadMethod],
    props: {
        category_type: {
            type: String,
            default: 'images'
        },
        id: {
            type: [ Number, String ],
            default: null
        }
    },
    data: () => ({
        storeModule: 'images',
        responseData: false
    }),
    validations: {
        image: {
            required,
            touch: false
        },
        difference: {
            touch: false
        }
    },
    computed: {
        ...mapState({
            image: state => state.images.fields.image,
            duplicates: state => state.images.duplicates,
            difference: state => state.images.fields.difference,
            loading: state => state.loading,
            duplicateFindStatus: state => state.images.duplicateFindStatus,
            fileProgress: state => state.images.fileProgress
        }),
        pending () {
            return this.duplicateFindStatus === 'progress' || Boolean(this.fileProgress);
        },
        categoryId () {
            return this.id !== 0 ? this.id : null;
        }
    },
    mounted () {
        this.setPageTitle('Проверка изображения на дубликат');
        this.responseData = true;
    },
    beforeDestroy () {
        this.clearFieldsAction()
    },
    methods: {
        ...mapActions({
            findDuplicatesAction: 'images/findDuplicates',
            setImagesFieldAction: 'images/setField',
            setImagesItemFieldAction: 'images/setItemField',
            uploadImageAction: 'images/store',
            uploadImageToCategoryAction: 'categories/uploadImages',
            clearFieldsAction: 'images/clearFields'
        }),
        findDuplicates () {
            this.setImagesFieldAction({field: 'duplicates', value: []})
            this.findDuplicatesAction({ category_type: this.category_type, id: this.categoryId })
        },
        uploadImage () {
            this.upload({
                uploadFiles: [this.image],
                type: this.category_type,
                id: this.categoryId
            });
        }
    }
}
</script>
<style>
.md-duplicate-trash {
    font-size: 16px !important;
    margin: 0;
}
</style>
