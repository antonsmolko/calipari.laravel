<template>
    <md-table v-model="items" class="paginated-table table-striped table-hover">
        <md-table-row slot="md-table-row" slot-scope="{ item }">

            <md-table-cell md-label="#" style="width: 50px">
                {{ item.id }}
            </md-table-cell>

            <md-table-cell md-label="Заголовок">
                <span class="md-subheading">{{ item.title }}</span>
            </md-table-cell>

            <md-table-cell md-label="Стоимость">
                {{ item.price || 'Бесплатно' }}
            </md-table-cell>

            <md-table-cell md-label="Описание">
                {{ item.description }}
            </md-table-cell>

            <md-table-cell md-label="Точки">
                {{ item.pickup ? item.pickups_count : '—' }}
            </md-table-cell>

            <md-table-cell md-label="Порядок">
                {{ item.order }}
            </md-table-cell>

            <md-table-cell md-label="Опубликован">
                <md-switch
                    :disabled="item.pickups_required"
                    :value="!item.publish"
                    @change="onPublishChange(item)">
                    <template>
                        <span v-if="item.pickups_required">Нет рабочих пунктов!</span>
                    </template>
                </md-switch>
            </md-table-cell>

            <md-table-cell md-label="Действия">

                <table-actions :item="item"
                               subPath="store.deliveries"
                               @delete="onDelete"/>

            </md-table-cell>

        </md-table-row>
    </md-table>
</template>

<script>
import { deleteMethod } from '@/mixins/crudMethods'
import TableActions from "@/custom_components/Tables/TableActions";
import { mapActions, mapState } from "vuex";

export default {
    name: "DeliveryListTable",
    components: { TableActions },
    mixins: [deleteMethod],
    data: () => ({
        storeModule: 'deliveries',
    }),
    computed: {
        ...mapState({
            items: state => state.deliveries.items
        }),
    },
    methods: {
        ...mapActions({
            getItemsAction: 'deliveries/getItems',
            publishAction: 'deliveries/publish'
        }),
        onDelete (item) {
            return this.delete({
                payload: item.id,
                title: item.title,
                alertText: `способ доставки «${item.title}»`,
                successText: 'Способ доставки удален!',
                storeModule: this.storeModule,
            })
        },
        onPublishChange (item) {
            this.publishAction(item.id);
        }
    },
    created() {
        this.getItemsAction();
    }
}
</script>
