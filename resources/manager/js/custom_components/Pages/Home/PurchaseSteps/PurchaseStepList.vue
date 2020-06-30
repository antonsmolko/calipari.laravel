<template>
    <md-card v-if="responseData">
        <md-card-header class="md-card-header-text md-card-header-green">
            <div class="card-text">
                <h4 class="title">Как купить фотообои</h4>
            </div>
        </md-card-header>
        <md-card-content>
            <div class="md-between">
                <h4>Список шагов покупки</h4>
                <router-button-link title="Создать шаг покупки" icon="add" color="md-success"
                                    route="manager.pages.home.purchaseSteps.create" />
            </div>

            <div>
                <template v-if="items.length">
                    <md-table v-model="items" class="paginated-table table-striped table-hover">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">

                            <md-table-cell md-label="#" class="width-small">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Превью">
                                <thumb-table-cell :path="item.image_path" :width="150" />
                            </md-table-cell>

                            <md-table-cell md-label="Заголовок">
                                <span class="md-subheading">{{ item.title }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Действия">

                                <table-actions :item="item"
                                               subPath="pages.home.purchaseSteps"
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
        </md-card-content>
    </md-card>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
    import TableActions from "@/custom_components/Tables/TableActions";
    import { deleteMethod } from '@/mixins/crudMethods'

    export default {
        name: 'PurchaseStepList',
        components: { ThumbTableCell, TableActions },
        mixins: [ deleteMethod ],
        data () {
            return {
                storeModule: 'homePurchaseSteps',
                responseData: false
            }
        },
        computed: {
            ...mapState('homePurchaseSteps', {
                items: state => state.items
            })
        },
        methods: {
            ...mapActions('homePurchaseSteps', {
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
