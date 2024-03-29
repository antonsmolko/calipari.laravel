<template>
    <div v-if="responseData">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link :to="redirectRoute" />
                        <image-uploader @change="fileInputChange" :multiple="true" />
                    </md-card-content>
                </md-card>
                <progress-bar-loading />
            </div>
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header title="Список изображений" icon="assignment" />
                    <md-card-content>
                        <template v-if="images.length">
                            <md-table :value="images" class="paginated-table table-striped table-hover">
                                <md-table-row slot="md-table-row" slot-scope="{ item }">

                                    <slot name="first-column" :item="item" >
                                        <md-table-cell md-label="#" md-sort-by="id" style="width: 50px">
                                            {{ item.index }}
                                        </md-table-cell>
                                    </slot>

                                    <md-table-cell md-label="Превью">
                                        <thumb-table-cell
                                            :width="200"
                                            :path="item.path" />
                                    </md-table-cell>

                                    <md-table-cell md-label="Действия">
                                        <div class="table-actions">
                                            <control-button title="Удалить"
                                                            icon="delete"
                                                            color="md-danger"
                                                            @click="onDelete(item)" />
                                        </div>
                                    </md-table-cell>

                                </md-table-row>
                            </md-table>
                        </template>
                        <template v-else>
                            <div class="alert alert-info">
                                <span><h3>В работе еще нет изображений! Загрузите их!</h3></span>
                            </div>
                        </template>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { pageTitle } from '@/mixins/base'
import { deleteImageByIndexMethod, uploadMethod } from '@/mixins/crudMethods'
import ImageUploader from "@/custom_components/Uploader/ImageUploader";
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";

export default {
    name: 'ImageList',
    mixins: [
        pageTitle,
        deleteImageByIndexMethod,
        uploadMethod
    ],
    components: {
        ImageUploader,
        ThumbTableCell
    },
    props: {
        id: {
            type: [ Number, String ],
            required: true
        }
    },
    data: () => ({
        mainImage: null,
        responseData: false,
        storeModule: 'workExamples',
        redirectRoute: {
            name: 'cms.pages.portfolio',
            params: { activeTab: 'Модули' }
        }
    }),
    computed: {
        ...mapState({
            title: state => state.workExamples.fields.title,
            images: state => state.workExamples.fields.images
        })
    },
    created () {
        Promise.all([
            this.getItemAction(this.id),
        ])
            .then(() => {
                this.setPageTitle(`Изображения работы «${this.title}»`);
                this.responseData = true;
            })
            .catch(() => this.$router.push(this.redirectRoute));
    },
    methods: {
        ...mapActions({
            getItemAction: 'workExamples/getItem'
        }),
        fileInputChange ({ images }) {
            this.upload({
                images,
                id: this.id,
                storeModule: this.storeModule
            });
        },
        onDelete (item) {
            this.deleteImageByIndex({
                id: this.id,
                index: item.index,
                alertText: `изображение «${item.index}»`,
                successText: 'Изображение удалено!',
                storeModule: this.storeModule
            });
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
