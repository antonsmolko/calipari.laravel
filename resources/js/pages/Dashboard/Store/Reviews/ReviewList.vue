<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card class="mt-0">
                <md-card-content>
                    <router-button-link title="В панель магазина" :to="redirectRoute"/>
                </md-card-content>
            </md-card>

            <div class="space-1"></div>
            <md-card>
                <card-icon-header title="Список отзывов" icon="grading"/>
                <md-card-content>
                    <v-extended-table :serverPagination="true"
                                      :resourceUrl="resourceUrl"
                                      defaultSortOrder="desc"
                                      emptyContent="У Вас еще нет отзывов!"
                                      :searchFields="[ 'order_number', 'date' ]" >

                        <template slot-scope="{ item }">

                            <md-table-cell md-label="#" style="width: 50px" md-sort-by="id">
                                {{ item.id }}
                            </md-table-cell>

                            <md-table-cell md-label="Номер заказа">
                                <span class="md-subheading">{{ item.order_number }}</span>
                            </md-table-cell>

                            <md-table-cell md-label="Дата" md-sort-by="date">{{ item.date }}</md-table-cell>

                            <md-table-cell md-label="Имя покупателя">
                                {{ item.customer.name }}
                            </md-table-cell>

                            <md-table-cell md-label="Email покупателя">
                                {{ item.customer.email }}
                            </md-table-cell>

                            <md-table-cell md-label="Оценка за качество">
                                {{ item.quality_rate }}
                            </md-table-cell>

                            <md-table-cell md-label="Оценка за сервис">
                                {{ item.service_rate }}
                            </md-table-cell>

                            <md-table-cell md-label="Опубл.">
                                <md-switch :value="!item.publish" @change="togglePublish(item.id)" />
                            </md-table-cell>

                            <md-table-cell md-label="Действия">
                                <div class="table-actions" v-if="item">

                                    <router-button-link
                                        title="Подробнее"
                                        icon="visibility"
                                        color="md-info"
                                        :to="{ name: 'cms.store.reviews.review', params: { id: item.id } }" />

                                    <control-button v-if="authCheck('reviews-delete')"
                                                    title="Удалить"
                                                    icon="delete"
                                                    color="md-danger"
                                                    @click="onDelete(item)" />
                                </div>
                            </md-table-cell>

                        </template>>
                    </v-extended-table>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import { pageTitle, authCheck } from '@/mixins/base'
import { deleteMethod } from '@/mixins/crudMethods'
import VExtendedTable from "@/custom_components/Tables/VExtendedTable";
import TableActions from "@/custom_components/Tables/TableActions";

export default {
    name: 'OrderList',
    mixins: [ pageTitle, deleteMethod, authCheck ],
    components: { VExtendedTable, TableActions },
    data: () => ({
        activeTab: '',
        resourceUrl: '/store/reviews',
        redirectRoute: { name: 'cms.store' },
        storeModule: 'reviews'
    }),
    created () {
        this.setPageTitle('Отзывы');
    },
    methods: {
        ...mapActions({
            togglePublishAction: 'table/togglePublish'
        }),
        onDelete (item) {
            return this.delete({
                payload: item.id,
                title: item.order_number,
                alertText: `отзыв на заказ «${item.order_number}»`,
                storeModule: this.storeModule,
                successText: 'Отзыв удален!',
                tableMode: 'table'
            })
        },
        togglePublish (id) {
            this.togglePublishAction(`/store/reviews/${id}/publish`);
        }
    }
}
</script>
