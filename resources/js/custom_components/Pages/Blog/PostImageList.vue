<template>
    <div>
        <div class="md-between mt-3">
            <h4>Изображения контента</h4>
            <image-uploader @change="fileInputChange" :multiple="true" />
        </div>
        <progress-bar-loading />
        <md-table
            v-if="images.length"
            class="paginated-table table-striped table-hover"
            :value="images" >
            <md-table-row slot="md-table-row" slot-scope="{ item }">

                <slot name="first-column" :item="item" >
                    <md-table-cell md-label="#" md-sort-by="id" style="width: 50px">
                        {{ item.index }}
                    </md-table-cell>
                </slot>

                <md-table-cell md-label="Превью">
                    <thumb-table-cell
                        :width="150"
                        :path="item.path" />
                </md-table-cell>

                <md-table-cell md-label="URL">
                    {{ baseUrl }}{{ transformationPath }}{{ getImagePath(item.path) }}
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
        <template v-else>
            <div class="alert alert-info">
                <span><h3>В статье еще нет изображений! Загрузите их!</h3></span>
            </div>
        </template>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { deleteImageByIndexMethod, uploadMethod } from '@/mixins/crudMethods'
import ImageUploader from "@/custom_components/Uploader/ImageUploader";
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";

export default {
    name: 'PostImageList',
    mixins: [
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
        },
        images: {
            type: Array,
            default: () => ([])
        }
    },
    data: () => ({
        storeModule: 'posts'
    }),
    computed: {
        ...mapState({
            settings: state => state.settings.entries
        }),
        baseUrl () {
            switch (this.$config.imageProvider) {
                case 'local':
                    return this.$config.localImageEndpoint;
                case 's3':
                    return this.$config.s3ImageEndpoint;
            }
        },
        transformationPath () {
            switch (this.$config.imageProvider) {
                case 'local':
                    return '/widen/1000';
                case 's3':
                    return '/fit-in/1000x3000';
            }
        }
    },
    created () {
        this.getSettingEntriesAction();
    },
    methods: {
        ...mapActions({
            getSettingEntriesAction: 'settings/getEntries'
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
        },
        getImagePath (path) {
            switch (this.$config.imageProvider) {
                case 'local':
                    return `/${path}`
                case 's3':
                    return `/${path.slice(0,1)}/${path.slice(0,3)}/${path}`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.md-progress-bar__container {
    height: 4px;
}
</style>
