import { axiosAction } from "../../mixins/actions";

const state = {
    items: [],
    searchedItems: [],
    pagination: {
        per_page: 20,
        total: 0,
        current_page: 1,
        from: 0,
        to: 0,
        sort_by: 'id',
        sort_order: 'asc'
    },
    searchQuery: '',
    loading: false,
    routeDetector: {
        from: null,
        to: null
    },
    resourceUrl: null,
    sortInit: false
};

const mutations = {
    SET_FIELD (state, { field, value }) {
        state[field] = value
    },
    SET_FIELDS (state, payload) {
        for (const [field, value] of Object.entries(payload)) {
            if (Object.hasOwnProperty.call(state, field)) {
                state[field] = value
            }
        }
    },
    SET_PAGINATION_FIELD(state, { field, value }) {
        state.pagination[field] = value;
    },
    SET_PAGINATION(state, payload) {
        for (const field of Object.keys(state.pagination)) {
            if (Object.hasOwnProperty.call(payload, field)) {
                state.pagination[field] = +payload[field];
            }
        }
    },
    RESET_PAGINATION (state) {
        state.pagination = {
            per_page: 20,
            total: 0,
            current_page: 1,
            from: 0,
            to: 0,
            sort_by: 'id',
            sort_order: state.defaultSortOrder
        }
    },
    CLEAR_STATE (state) {
        state.items = [];
        state.searchedItems = [];
        state.searchQuery = '';
        state.loading = false;
        state.previousPage = null;
        state.resourceUrl = null;
        state.sortInit = false;
    },
    UPDATE_ITEMS (state, payload) {
        state.items = state.items.map(item => item.id === payload.id ? payload : item);
    },
    DELETE_ITEM (state, id) {
        state.items = state.items.filter(item => item.id !== id);
    },
    CHANGE_PUBLISH(state, payload) {
        state.items.forEach(item => {
            if(item.id === payload.id) {
                item.publish = payload.publish;
            }
        });
    },
    SET_ROUTE_DETECTOR_FIELD (state, { field, value }) {
        state.routeDetector[field] = value;
    },
    DELETE_SEARCHED_ITEM(state, itemId) {
        state.searchedItems = state.searchedItems.filter(item => item.id !== +itemId);
    }
};

const actions = {
    getItemsPost ({ state, commit }) {
        commit('SET_FIELD', { field: 'loading', value: true });
        const { current_page,
                per_page,
                sort_by,
                sort_order } = state.pagination;
        const query = state.searchQuery;
        const data = { current_page, per_page, sort_by, sort_order, query };

        return axiosAction('post', commit, {
            url: state.resourceUrl,
            data,
            thenContent: (response) => {
                const responseData = response.data;
                commit('SET_PAGINATION', responseData);
                commit('SET_FIELDS', { items: responseData.data, loading: false });
            }
        })
    },
    getItemsGet ({ state, commit }) {
        commit('SET_FIELD', { field: 'loading', value: true });

        return axiosAction('get', commit, {
            url: state.resourceUrl,
            thenContent: (response) => commit('SET_FIELDS', { items: response.data, loading: false })
        })
    },
    togglePublish({ commit }, url) {
        return axiosAction('get', commit, {
            url,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)
        })
    },
    updateItemsPost ({ dispatch, getters }) {
        if (!getters.checkReturnToPreviousPage) {
            dispatch('getItemsPost');
        }
    },
    deleteSearchedItem({ commit }, id) {
        commit('DELETE_SEARCHED_ITEM', id);
    },
    setField ({ commit }, payload) {
        commit('SET_FIELD', payload)
    },
    setFields ({ commit }, payload) {
        commit('SET_FIELDS', payload)
    },
    setPaginationField ({ commit }, payload) {
        commit('SET_PAGINATION_FIELD', payload);
    },
    resetPagination ({ commit }) {
        commit('RESET_PAGINATION');
    },
    setPreviousPage ({ commit }, payload) {
        commit('SET_PREVIOUS_PAGE', payload);
    },
    clearState ({ commit }) {
        commit('CLEAR_STATE');
    },
    setRouteDetectorField({ commit }, payload) {
        commit('SET_ROUTE_DETECTOR_FIELD', payload);
    }
};

const getters = {
    searchedQty: state => state.searchedItems.length,
    itemsQty: state => state.items.length,
    isSearchedEmpty: state => !!state.searchQuery && (!state.items.length || !state.searchedItems.length),
    checkReturnToPreviousPage: state => state.pagination.current_page > 1 && !state.items.length,
    checkReturnToSearchedPreviousPage: state => state.pagination.current_page > 1
        ? state.searchQuery ? !state.searchedItems.length : !state.items.length
        : false,
    totalPages: (state) => {
        const itemsLength = state.searchQuery ? state.searchedItems.length : state.items.length;
        return itemsLength ? Math.ceil(itemsLength / state.pagination.per_page) : 1;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
