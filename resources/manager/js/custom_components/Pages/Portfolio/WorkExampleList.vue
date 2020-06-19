<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <h3>Портфолио</h3>
            <div class="md-between">
                <h4>Список работ</h4>
                <router-button-link title="Создать работу" icon="add" color="md-success"
                                    :route="`manager.pages.portfolio.${storeModule}.create`" />
            </div>
            <v-extended-table :serverPagination="true"
                              :resourceUrl="resourceUrl"
                              defaultSortOrder="desc"
                              emptyContent="У Вас еще нет примеров работ!"
                              :searchFields="[ 'image_id', 'date' ]" >

                <template slot-scope="{ item }">

                    <md-table-cell md-label="#" style="width: 50px" md-sort-by="id">
                        {{ item.id }}
                    </md-table-cell>

                    <md-table-cell md-label="Превью">
                        <thumb-table-cell
                            :path="item.image_path"
                            :width="150" />
                    </md-table-cell>

                    <md-table-cell md-label="Заголовок">
                        <span class="md-subheading">{{ item.title }}</span>
                    </md-table-cell>

                    <md-table-cell md-label="ID изображения">
                        {{ item.image_id }}
                    </md-table-cell>

                    <md-table-cell md-label="Дата" md-sort-by="date">
                        {{ item.date }}
                    </md-table-cell>

                    <md-table-cell md-label="Опубликован">
                        <md-switch
                            :disabled="!item.has_images"
                            :value="!item.publish"
                            @change="togglePublish(item)">
                            <template>
                                <span v-if="!item.has_images">Нет изображений!</span>
                            </template>
                        </md-switch>
                    </md-table-cell>

                    <md-table-cell md-label="Действия">
                        <router-button-link title="Изображения"
                                            icon="collections"
                                            :route="`manager.pages.portfolio.${storeModule}.images`"
                                            :params="{ id: item.id }" />

                        <table-actions :item="item"
                                       :subPath="`pages.portfolio.${storeModule}`"
                                       @delete="onDelete"/>
                    </md-table-cell>

                </template>>
            </v-extended-table>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import VExtendedTable from "@/custom_components/Tables/VExtendedTable";
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
import TableActions from "@/custom_components/Tables/TableActions";
import { deleteMethod } from '@/mixins/crudMethods'

export default {
    name: "WorkExampleList",
    components: {
        VExtendedTable,
        ThumbTableCell,
        TableActions
    },
    mixins: [deleteMethod],
    data() {
        return {
            resourceUrl: '/work-examples/list',
            storeModule: 'workExamples'
        }
    },
    methods: {
        ...mapActions({
            togglePublishAction: 'table/togglePublish'
        }),
        onDelete(item) {
            return this.delete({
                payload: item.id,
                title: item.title,
                alertText: `работу «${item.title}»`,
                storeModule: this.storeModule,
                successText: 'Работа удалена!',
                tableMode: 'table'
            })
        },
        togglePublish (item) {
            this.togglePublishAction(`/work-examples/${item.id}/publish`);
        }
    }
}
</script>

<style scoped>

</style>
