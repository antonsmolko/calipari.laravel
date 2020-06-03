<template>
    <div v-if="responseData">
        <div class="md-between">
            <h4>Список шагов покупки</h4>
            <router-button-link title="Создать шаг покупки" icon="add" color="md-success"
                                :route="`manager.pages.home.${storeModule}.create`" />
        </div>

        <div>
            <template v-if="items.length">
                <md-table v-model="items" class="paginated-table table-striped table-hover">
                    <md-table-row slot="md-table-row" slot-scope="{ item }">

                        <md-table-cell md-label="#" class="width-small">
                            {{ item.id }}
                        </md-table-cell>

                        <md-table-cell md-label="Превью">
                            <img class="md-table-thumb img-raised rounded"
                                 :src="`/image/widen/300/${item.image_path}`"
                                 :alt="item.title">
                        </md-table-cell>

                        <md-table-cell md-label="Заголовок">
                            <span class="md-subheading">{{ item.title }}</span>
                        </md-table-cell>

                        <md-table-cell md-label="Действия">

                            <table-actions :item="item"
                                           :subPath="`pages.home.${storeModule}`"
                                           @delete="onDelete"/>

                        </md-table-cell>

                    </md-table-row>
                </md-table>
            </template>
            <template v-else>
                <div class="alert alert-info">
                    <span><h3>У Вас еще нет шагов покупки!</h3></span>
                </div>
            </template>
        </div>

    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import TableActions from "@/custom_components/Tables/TableActions";
    import { deleteMethod } from '@/mixins/crudMethods'

    export default {
        name: 'PurchaseStepList',
        data () {
            return {
                storeModule: 'purchaseSteps',
                responsive: false,
                responseData: false
            }
        },
        components: { TableActions },
        mixins: [ deleteMethod ],
        computed: {
            ...mapState('purchaseSteps', {
                items: state => state.items
            })
        },
        methods: {
            ...mapActions('purchaseSteps', {
                getItemsAction: 'getItems'
            }),
            onPublishChange(id) {
                this.publishAction(id);
            },
            onDelete(item) {
                return this.delete({
                    payload: item.id,
                    title: item.title,
                    alertText: `шаг покупки «${item.title}»`,
                    storeModule: this.storeModule,
                    successText: 'Шаг покупки удален!'
                })
            }
        },
        created() {
            this.getItemsAction()
                .then(() => this.responseData = true);
        }
    }
</script>

<style lang="scss" scoped>
    .md-table-thumb {
        object-fit: cover;
        width: 200px;
        height: 100px;
    }
</style>
