<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" />
                        <div>
                            <router-button-link
                                icon="add"
                                color="md-success"
                                title="Добавить изображения"
                                :to="{ name: 'cms.catalog.subcategories.images.excluded', params: { id } }" />
                            <upload-button @change="fileInputChange" />
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <div class="md-layout-item md-progress-bar__container">
                    <md-progress-bar
                        v-if="fileProgress"
                        class="md-info"
                        md-mode="indeterminate"
                        :md-value="fileProgress" />
                </div>
                <md-card>
                    <card-icon-header title="Каталог изображений" icon="image" />
                    <md-card-content>

                        <image-list-table :resourceUrl="resourceUrl"
                                          @publish="togglePublish">

                            <template #actions-column="{ item }">
                                <md-table-cell v-if="item" md-label="Действия">
                                    <image-table-actions :item="item"
                                                         :remove="true"
                                                         @remove="onRemove"
                                                         @delete="onDelete"/>
                                </md-table-cell>
                            </template>

                        </image-list-table>

                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { pageTitle } from '@/mixins/base'
import { deleteMethod, uploadMethod } from '@/mixins/crudMethods'

import ImageListTable from "@/custom_components/Tables/ImageListTable";
import ImageTableActions from "@/custom_components/Tables/ImageTableActions";

export default {
    name: 'ImageList',
    mixins: [
        pageTitle,
        deleteMethod,
        uploadMethod
    ],
    components: {
        ImageListTable,
        ImageTableActions
    },
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
    data () {
        return {
            resourceUrl: `/catalog/${this.category_type}/${this.id}/images`,
            responseData: false,
            storeModule: 'images',
            redirectRoute: {
                name: 'cms.catalog.subcategories.list',
                params: {category_type: this.category_type}
            }
        }
    },
    computed: {
        ...mapState({
            title: state => state.subCategories.fields.title,
            fileProgress: state => state.images.fileProgress
        })
    },
    created () {
        this.clearFieldsAction()
        this.getItemAction({ type: this.category_type, id: this.id })
            .then(() => {
                this.setPageTitle(`Изображения «${this.title}»`);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    beforeDestroy () {
        this.clearFieldsAction()
    },
    methods: {
        ...mapActions({
            clearFieldsAction: 'subCategories/clearItemFields',
            getItemAction: 'subCategories/getItem',
            togglePublishAction: 'table/togglePublish',
            removeImageAction: 'subCategories/removeImage'
        }),
        fileInputChange (event) {
            this.upload({
                uploadFiles: event.target.files,
                type: this.category_type,
                id: this.id,
                storeModule: 'subCategories'
            });
        },
        onRemove (id) {
            this.removeImageAction(id);
        },
        onDelete (item) {
            this.delete({
                payload: item.id,
                title: item.id,
                alertText: `изображение «${item.id}»`,
                successText: 'Изображение удалено!',
                storeModule: this.storeModule,
                tableMode: 'table'
            })
        },
        togglePublish (id) {
            this.togglePublishAction(`/images/${id}/publish`);
        }
    }
}
</script>

<style lang="scss" scoped>
.md-between {
    display: flex;
    justify-content: space-between;
}
.md-progress-bar__container {
    height: 4px;
}
</style>
