<template>
    <md-table v-model="items" class="paginated-table table-striped table-hover">
        <md-table-row slot="md-table-row" slot-scope="{ item }">

            <md-table-cell md-label="#" style="width: 50px">
                {{ item.id }}
            </md-table-cell>

            <md-table-cell md-label="Заголовок">
                <span class="md-subheading">{{ item.title }}</span>
            </md-table-cell>

            <md-table-cell md-label="Регион">
                {{ item.locality }}
            </md-table-cell>

            <md-table-cell md-label="Адрес">
                {{ item.address }}
            </md-table-cell>

            <md-table-cell md-label="Опубликован">
                <md-switch :value="!item.publish" @change="onPublishChange(item)"/>
            </md-table-cell>

            <md-table-cell md-label="Действия">

                <table-actions :item="item"
                               subPath="store.pickups"
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
    name: "PickupListTable",
    components: { TableActions },
    mixins: [deleteMethod],
    data: () => ({
        storeModule: 'pickups',
    }),
    computed: {
        ...mapState({
            items: state => state.pickups.items
        }),
    },
    methods: {
        ...mapActions({
            getItemsAction: 'pickups/getItems',
            publishAction: 'pickups/publish'
        }),
        onDelete (item) {
            return this.delete({
                payload: item.id,
                title: item.title,
                alertText: `пункт самовывоза «${item.title}»`,
                successText: 'Пункт самовывоза удален!',
                storeModule: this.storeModule
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
