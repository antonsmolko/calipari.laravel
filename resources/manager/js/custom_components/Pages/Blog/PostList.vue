<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <v-extended-table :serverPagination="true"
                              :resourceUrl="`/posts/${type}/list`"
                              defaultSortOrder="desc"
                              :emptyContent="`У Вас еще нет статей в разделе «${tab}»!`"
                              :searchFields="[ 'title' ]" >

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

                    <md-table-cell md-label="Дата" md-sort-by="date">
                        {{ item.date }}
                    </md-table-cell>

                    <md-table-cell md-label="Опубликован">
                        <md-switch :value="!item.publish"
                                   @change="togglePublish(item)">
                        </md-switch>
                    </md-table-cell>

                    <md-table-cell md-label="Действия">
                        <table-actions :item="item"
                                       :subPath="`pages.blog.${storeModule}`"
                                       :restParams="{ activePostTab: type }"
                                       @delete="onDelete"/>
                    </md-table-cell>

                </template>>
            </v-extended-table>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import VExtendedTable from "@/custom_components/Tables/VExtendedTable";
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
import TableActions from "@/custom_components/Tables/TableActions";
import { deleteMethod } from '@/mixins/crudMethods'
import config from '@/config'

export default {
    name: "PostList",
    components: {
        VExtendedTable,
        ThumbTableCell,
        TableActions
    },
    mixins: [deleteMethod],
    props: {
        tab: {
            type: String,
            default: config.defaultPostType.title
        },
        type: {
            type: String,
            default: config.defaultPostType.index
        }
    },
    data: () => ({
       storeModule: 'posts'
    }),
    methods: {
        ...mapActions({
            togglePublishAction: 'table/togglePublish'
        }),
        onDelete(item) {
            return this.delete({
                payload: item.id,
                title: item.title,
                alertText: `статью «${item.title}»`,
                storeModule: this.storeModule,
                successText: 'Статья удалена!',
                tableMode: 'table'
            })
        },
        togglePublish (item) {
            this.togglePublishAction(`/posts/${item.id}/publish`);
        }
    }
}
</script>
