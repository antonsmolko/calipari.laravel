<template>
    <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
            <div class="card-text">
                <h4 class="title">Интерьеры</h4>
            </div>
        </md-card-header>
        <md-card-content>
            <div v-if="items.length" v-for="item in items" :key="item.id">
                <div class="md-layout md-between">
                    <div class="md-small-size-35 md-size-50">
                        <h4 class="md-title"><small class="mt-1 md-block">{{ item.title}}</small></h4>
                    </div>
                    <div class="md-small-size-65 md-medium-size-50 md-large-size-25 md-xlarge-size-15 md-flex md-flex-right">
                        <div class="mr-10">
                            <md-field>
                                <md-icon>sort</md-icon>
                                <md-input
                                    name="order"
                                    :value="item.order"
                                    type="number"
                                    min="1"
                                    @input="handleItemOrderChange(item.id, $event)"/>
                            </md-field>
                        </div>
                        <router-button-link title="Добавить слайд" icon="add" color="md-success"
                                            route="manager.pages.home.interiorSlides.create"
                                            :params="{ interiorId: item.id }"/>
                    </div>
                </div>
                <md-card v-if="item.slides.length">
                    <md-card-content>
                        <md-table v-model="item.slides" class="paginated-table table-striped table-hover">
                            <md-table-row slot="md-table-row" slot-scope="{ item }">

                                <md-table-cell md-label="#" class="width-small">
                                    {{ item.id }}
                                </md-table-cell>

                                <md-table-cell md-label="Превью">
                                    <thumb-table-cell :path="item.image_path" :width="150" />
                                </md-table-cell>

                                <md-table-cell md-label="ID Изображения">
                                    {{ item.image_id }}
                                </md-table-cell>

                                <md-table-cell md-label="Порядок" md-sort-by="order" class="width-small">
                                    <md-field>
                                        <md-icon>sort</md-icon>
                                        <md-input
                                            name="order"
                                            :value="item.order"
                                            type="number"
                                            min="1"
                                            @input="handleItemSlideOrderChange(item, $event)"/>
                                    </md-field>
                                </md-table-cell>

                                <md-table-cell md-label="Действия">
                                    <div class="table-actions">

                                        <table-actions :item="item"
                                                       subPath="pages.home.interiorSlides"
                                                       @delete="onDelete"/>
                                    </div>
                                </md-table-cell>

                            </md-table-row>
                        </md-table>
                    </md-card-content>
                </md-card>
                <md-divider v-else></md-divider>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import debounce from 'lodash/debounce'
import ThumbTableCell from "@/custom_components/Tables/ThumbTableCell";
import TableActions from "@/custom_components/Tables/TableActions";
import { deleteMethod } from '@/mixins/crudMethods'
const _debounce = debounce(value => value(), 1000)

export default {
    name: 'InteriorList',
    components: {
        ThumbTableCell,
        TableActions
    },
    mixins: [ deleteMethod ],
    data () {
        return {
            storeModule: 'homeInteriors'
        }
    },
    computed: {
        ...mapState('homeInteriors', {
            items: state => state.items
        })
    },
    created() {
        this.getInteriorsAction();
    },
    methods: {
        ...mapActions('homeInteriors', {
            getInteriorsAction: 'getInteriors',
            updateInteriorOrderAction: 'updateInteriorOrder',
            updateInteriorSlideOrderAction: 'updateInteriorSlideOrder',
        }),
        handleItemOrderChange (id, value) {
            _debounce(this.updateInteriorOrderAction.bind(this, {
                id,
                data: { order: Number(value) }
            }));
        },
        handleItemSlideOrderChange (item, value) {
            _debounce(this.updateInteriorSlideOrderAction.bind(this, {
                interiorId: item.interior_id,
                id: item.id,
                data: { order: value }
            }));
        },
        onDelete(item) {
            return this.delete({
                payload: {
                    interiorId: item.interior_id,
                    slideId: item.id
                },
                title: item.id,
                alertText: `слайд для изображения «${item.image_id}»`,
                storeModule: this.storeModule,
                successText: 'Слайд удален!',
                tableMode: true
            })
        }
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
