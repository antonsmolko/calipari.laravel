<template>
    <div>
        <div class="progress-bar__container">
            <md-progress-bar v-show="loading" md-mode="indeterminate"></md-progress-bar>
        </div>
        <div v-if="items">
            <md-table :value="queriedData"
                      :md-sort.sync="currentSort"
                      :md-sort-fn="customSort"
                      class="paginated-table table-striped table-hover"
                      :class="{ loading }"
            >
                <md-table-toolbar class="mb-3">
                    <md-field>
                        <label for="pages">На странице</label>
                        <md-select :value="pagination.per_page" @md-selected="changePerPage" name="pages">
                            <md-option
                                v-for="item in perPageOptions"
                                :key="item"
                                :label="item"
                                :value="item">
                                {{ item }}
                            </md-option>
                        </md-select>
                    </md-field>

                    <md-field>
                        <md-input
                            type="search"
                            clearable
                            style="width: 200px"
                            placeholder="Поиск"
                            :value="searchQuery"
                            @input="search"
                        >
                        </md-input>
                    </md-field>
                </md-table-toolbar>

                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <slot :item="item" />
                </md-table-row>

                <div v-if="isSearchedEmpty && !loading" class="alert alert-info mt-2">
                    <h3>Нет данных соответствующих поисковому запросу!</h3>
                </div>
            </md-table>
            <md-card-actions md-alignment="space-between" v-if="!loading">
                <div>
                    <p class="card-category" v-if="serverPagination">{{ pagination.from }} - {{ pagination.to }} / {{ total }}</p>
                    <p class="card-category" v-else>{{ from + 1 }} - {{ to }} / {{ total }}</p>
                </div>
                <pagination class="pagination-no-border pagination-success"
                            :per-page="pagination.per_page"
                            :total="total"
                            :value="pagination.current_page"
                            @input="changePage" >
                </pagination>
            </md-card-actions>
        </div>
        <template v-else-if="!loading">
            <div class="alert alert-info mt-2">
                <h3>{{ emptyContent }}</h3>
            </div>
        </template>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    import Fuse from 'fuse.js'
    import debounce from 'lodash/debounce'
    import { Pagination } from '@/components'

    const _debounce = debounce(f => f(), 300);

    export default {
        name: "VExtendedTable",
        components: { Pagination },
        props: {
            searchFields: {
                type: Array,
                default: () => ['id']
            },
            perPageOptions: {
                type: Array,
                default: () => [ 20, 50, 100, 200 ]
            },
            serverPagination: {
                type: Boolean,
                default: false
            },
            resourceUrl: {
                type: String,
                required: true
            },
            defaultSortOrder: {
                type: String,
                default: 'asc'
            },
            emptyContent: {
                type: String,
                default: 'Ресурсы отсутствуют!'
            },
            editItemPathName: {
                type: String,
                default: 'manager.images.edit'
            }
        },
        data () {
            return {
                currentSort: 'id',
                fuseSearch: null
            }
        },
        computed: {
            ...mapState('table', {
                sortInit: state => state.sortInit,
                items: state => state.items,
                searchedItems: state => state.searchedItems,
                searchQuery: state => state.searchQuery,
                pagination: state => state.pagination,
                loading: state => state.loading,
                routeDetector: state => state.routeDetector
            }),
            ...mapGetters('table', [
                'itemsQty',
                'searchedQty',
                'checkReturnToPreviousPage',
                'checkReturnToSearchedPreviousPage',
                'isSearchedEmpty',
                'totalPages'
            ]),
            queriedData () {
                const items = !this.serverPagination && this.searchQuery
                    ? this.searchedItems
                    : this.items

                return items.slice(this.from, this.to)
            },
            to () {
                let highBound = this.from + this.pagination.per_page;
                if (this.total < highBound) {
                    highBound = this.total
                }

                return highBound
            },
            from () {
                return this.serverPagination
                    ? 0
                    : this.pagination.per_page * (this.pagination.current_page - 1);
            },
            total () {
                return this.pagination.total
                    ? this.pagination.total
                    : this.searchedQty ? this.searchedItems.length : this.items.length;
            },
            fromEditItemPage () {
                return this.$route.name === this.routeDetector.to &&
                    this.editItemPathName === this.routeDetector.from;
            }
        },
        watch: {
            items () {
                this.initFuseSearch(this.searchFields)
            },
            itemsQty () {
                this.returnToPreviousPage();
            },
            searchedQty () {
                this.returnToPreviousPage();
            }
        },
        created() {
            if (!this.fromEditItemPage) {
                this.resetRouteDetector();
                this.setState();
            }
            this.returnToPreviousPage();
            this.requestItems()
        },
        mounted () {
            window.scrollTo(0, 0);
            this.initFuseSearch(this.searchFields)
        },
        methods: {
            ...mapActions('table', {
                clearStateAction: 'clearState',
                getRequestItemsAction: 'getItemsGet',
                postRequestItemsAction: 'getItemsPost',
                setFieldAction: 'setField',
                setFieldsAction: 'setFields',
                setPaginationFieldAction: 'setPaginationField',
                resetPaginationAction: 'resetPagination',
                setRouteDetectorFieldAction: 'setRouteDetectorField'
            }),
            async requestItems () {
                this.serverPagination
                    ? await this.postRequestItemsAction()
                    : await this.getRequestItemsAction()
            },
            async customSort () {
                if (this.sortInit && !this.loading && this.items.length && !this.fromEditItemPage) {
                    const sortOrder = this.pagination.sort_order === 'asc' ? 'desc' : 'asc';
                    await Promise.all([
                        this.setPaginationFieldAction({ field: 'sort_order', value: sortOrder }),
                        this.setPaginationFieldAction({ field: 'sort_by', value: this.currentSort })
                    ])
                    return this.serverPagination
                        ? await this.postRequestItemsAction()
                        : this.sort(this.items);
                }

                this.resetRouteDetector();
                this.setFieldAction({ field: 'sortInit', value: true });
            },
            sort (value) {
                return value.sort((a, b) => {
                    const sortBy = this.pagination.sort_by;

                    return this.pagination.sort_order === 'asc'
                        ? this.getSort(a, b, sortBy)
                        : this.getSort(b, a, sortBy)
                })
            },
            getSort (a, b, sortBy) {
                const numberSort = typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number';
                return numberSort
                    ? a[sortBy] < b[sortBy] ? -1 : 1
                    : a[sortBy].localeCompare(b[sortBy])
            },

            async search (query) {
                const value = query.trim();
                await Promise.all([
                    this.setFieldAction({ field: 'searchQuery', value }),
                    this.setDefaultPage()
                ])

                if (!value) {
                    this.clearSearchedItems()
                }

                this.handleSearch()
            },
            handleSearch () {
                this.serverPagination
                    ? _debounce(this.postRequestItemsAction)
                    : this.setSearchedItems();
            },
            initFuseSearch (keys) {
                if (!this.serverPagination) {
                    this.fuseSearch = new Fuse(this.items.slice(), { keys, threshold: 0.3 });
                }
            },
            async changePage (value) {
                await this.setPaginationFieldAction({ field: 'current_page', value })
                if (this.serverPagination) {
                    console.log('changepage')

                    await this.postRequestItemsAction()
                }
                window.scrollTo(0, 0);
            },
            async changePerPage (value) {
                await this.setPaginationFieldAction({ field: 'per_page', value })
                await this.setDefaultPage()
            },
            setSearchedItems () {
                const searchResult = this.fuseSearch.search(this.searchQuery).map(fuse => fuse.item);
                this.setFieldAction({ field: 'searchedItems', value: searchResult });
            },
            setDefaultPage () {
                this.setPaginationFieldAction({ field: 'current_page', value: 1 });
            },
            clearSearchedItems () {
                this.setFieldAction({ field: 'searchedItems', value: [] });
            },
            setState () {
                this.resetPaginationAction();
                this.clearStateAction()
                this.setFieldAction({ field: 'resourceUrl', value: this.resourceUrl });
                this.setPaginationFieldAction({ field: 'sort_order', value: this.defaultSortOrder });
                this.setPaginationFieldAction({ field: 'per_page', value: this.perPageOptions[0] });
            },
            returnToPreviousPage () {
                this.serverPagination
                    ? this.checkGoPrevWithServerPagination()
                    : this.checkGoPrev();
            },
            async checkGoPrevWithServerPagination () {
                if (this.checkReturnToPreviousPage) {
                    await this.setPaginationFieldAction({
                        field: 'current_page',
                        value: this.pagination.current_page - 1
                    });

                    await this.postRequestItemsAction()
                }
            },
            checkGoPrev () {
                if (this.pagination.current_page > this.totalPages) {
                    this.setPaginationFieldAction({ field: 'current_page', value: this.totalPages });
                }
            },
            resetRouteDetector () {
                this.setRouteDetectorFieldAction({ field: 'from', value: null });
                this.setRouteDetectorFieldAction({ field: 'to', value: null });
            }
        }
    }
</script>

<style>
    .loading td {
        opacity: 0;
    }
    .progress-bar__container {
        height: 4px;
    }
</style>
