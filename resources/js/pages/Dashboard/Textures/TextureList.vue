<template>
    <div class="md-layout" v-if="responseData">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content class="md-between">
                    <router-button-link title="В панель управления" />
                    <router-button-link title="Создать фактуру" icon="add" color="md-success"
                                        :to="{ name: 'cms.textures.create' }" />
                </md-card-content>
            </md-card>

            <div class="space-1"></div>
            <md-card>
                <card-icon-header title="Список фактур" icon="style" />
                <md-card-content>
                    <template v-if="items.length">
                        <md-table v-model="items" class="paginated-table table-striped table-hover">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">

                                <md-table-cell md-label="#" class="width-small">
                                    {{ item.id }}
                                </md-table-cell>

                                <md-table-cell md-label="Превью">
                                    <thumb-table-cell :path="item.sample_path" :width="150" />
                                </md-table-cell>

                                <md-table-cell md-label="Название">
                                    <span class="md-subheading">{{ item.name }}</span>
                                </md-table-cell>

                                <md-table-cell md-label="Заказы">
                                    <md-icon>shopping_cart</md-icon> {{ item.orders_count }}
                                </md-table-cell>

                                <md-table-cell md-label="Опубликован">
                                    <md-switch :value="!item.publish" @change="onPublishChange(item.id)" />
                                </md-table-cell>

                                <md-table-cell>
                                    <md-field>
                                        <md-icon>sort</md-icon>
                                        <md-input
                                            name="order"
                                            :value="item.order"
                                            type="number"
                                            min="1"
                                            @input="handleItemOrderChange(item.id, $event)"/>
                                    </md-field>
                                </md-table-cell>

                                <md-table-cell md-label="Действия">

                                    <table-actions :item="item"
                                                   :subPath="storeModule"
                                                   @delete="onDelete"/>

                                </md-table-cell>

                            </md-table-row>
                        </md-table>
                    </template>
                    <template v-else>
                        <div class="alert alert-info">
                            <span><h3>У Вас еще нет фактур!</h3></span>
                        </div>
                    </template>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import debounce from 'lodash/debounce'
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
import TableActions from "@/custom_components/Tables/TableActions";
import { pageTitle } from '@/mixins/base'
import { deleteMethod } from '@/mixins/crudMethods'
const _debounce = debounce(value => value(), 1000)

export default {
    name: 'TextureList',
    data: () => ({
        storeModule: 'textures',
        responsive: false,
        responseData: false
    }),
    components: {
        ThumbTableCell,
        TableActions
    },
    mixins: [ pageTitle, deleteMethod ],
    computed: {
        ...mapState('textures', {
            items: state => state.items
        })
    },
    methods: {
        ...mapActions('textures', {
            getItemsAction: 'getItems',
            publishAction: 'publish',
            setOrderAction: 'setOrder'
        }),
        onPublishChange (id) {
            this.publishAction(id);
        },
        onDelete (item) {
            return this.delete({
                payload: item.id,
                title: item.name,
                alertText: `фактура «${item.name}»`,
                storeModule: this.storeModule,
                successText: 'Фактура удалена!'
            })
        },
        handleItemOrderChange (id, value) {
            _debounce(this.setOrderAction.bind(this, {
                id,
                data: { order: value }
            }));
        },
    },
    created () {
        this.getItemsAction()
            .then(() => {
                this.setPageTitle('Фактуры');
                this.responseData = true;
            })
            .catch(() => this.$router.push({ name: 'cms.dashboard' }));
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
