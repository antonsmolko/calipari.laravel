<template>
    <div>
        <div class="md-between mt-3">
            <h4>Изображения контента</h4>
            <upload-button @change="fileInputChange" />
        </div>
        <div class="md-layout-item md-progress-bar__container">
            <md-progress-bar v-if="fileProgress" class="md-info" :md-value="fileProgress" />
        </div>
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
                    {{ baseImagePath }}/{{ item.path }}
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
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";

export default {
    name: 'PostImageList',
    mixins: [
        deleteImageByIndexMethod,
        uploadMethod
    ],
    components: {
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
    data () {
        return {
            storeModule: 'posts'
        }
    },
    computed: {
        ...mapState({
            fileProgress: state => state.images.fileProgress,
            settings: state => state.settings.entries
        }),
        baseImagePath () {
            return `${this.settings.app_url}/image/widen/1000`
        }
    },
    created() {
        this.getSettingEntriesAction();
    },
    methods: {
        ...mapActions({
            getSettingEntriesAction: 'settings/getEntries'
        }),
        fileInputChange (event) {
            this.upload({
                uploadFiles: event.target.files,
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
    .md-progress-bar__container {
        height: 4px;
    }
</style>
