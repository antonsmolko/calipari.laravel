<template>
    <div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card class="mt-0">
                    <md-card-content class="md-between">
                        <router-button-link route="manager.dashboard"/>
                    </md-card-content>
                </md-card>
            </div>
        </div>

        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <card-icon-header title="Каталог удаленных изображений" icon="delete" />
                    <md-card-content>
                        <image-trashed-list-table :resourceUrl="resourceUrl">

                            <template #actions-column="{ item }">
                                <md-table-cell v-if="item" md-label="Действия">
                                    <image-trashed-table-actions :item="item"
                                                         @restore="onRestore"
                                                         @delete="onDelete"/>
                                </md-table-cell>
                            </template>

                        </image-trashed-list-table>
                    </md-card-content>
                </md-card>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    import { pageTitle } from '@/mixins/base'
    import { deleteMethod } from '@/mixins/crudMethods'

    import ImageTrashedListTable from "@/custom_components/Tables/ImageTrashedListTable";
    import ImageTrashedTableActions from "@/custom_components/Tables/ImageTrashedTableActions";
    import swal from "sweetalert2";

    export default {
        name: 'ImageTrashedList',
        mixins: [
            pageTitle,
            deleteMethod
        ],
        components: {
            ImageTrashedListTable,
            ImageTrashedTableActions
        },
        data () {
            return {
                storeModule: 'images'
            }
        },
        computed: {
            resourceUrl () {
                return '/images/trashed/paginate'
            }
        },
        created () {
            this.setPageTitle('Удаленные изображения')
        },
        beforeDestroy () {

        },
        methods: {
            ...mapActions({
                restoreAction: 'images/restore'
            }),
            onRestore (id) {
                this.restoreAction(id)
                    .then(() => swal.fire({
                        title: `Изображение восстановлено!`,
                        text: `«${id}»`,
                        timer: 2000,
                        icon: 'success',
                        showConfirmButton: false
                    }))
            },
            onDelete (item) {
                this.delete({
                    payload: item.id,
                    title: item.id,
                    alertText: `изображение «${item.id}»`,
                    successText: 'Изображение удалено!',
                    storeModule: this.storeModule,
                    tableMode: 'table',
                    force: true
                })
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
