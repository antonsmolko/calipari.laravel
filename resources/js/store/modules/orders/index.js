import { axiosAction } from "../../mixins/actions";

const state = {
    item: {},
    fields: {
        comparedPaymentId: '',
        refundAmount: 0,
        refundReason: ''
    },
    personalOrder: {
        email: '',
        name: '',
        width: '',
        height: '',
        texture: null,
        addedCosts: {
            imageProcessing: '',
            imageSearch: '',
            imageCosts: ''
        }
    }
};

const mutations = {
    SET_ITEM(state, payload) {
        state.item = payload
    },
    SET_ITEM_FIELD (state, { field, value}) {
        state.fields[field] = value;
    },
    SET_ITEM_FIELDS (state, payload) {
        for (const [field, value] of Object.entries(payload)) {
            if (Object.hasOwnProperty.call(state.fields, field)) {
                state.fields[field] = value;
            }
        }
    },
    SET_PERSONAL_ORDER_FIELD (state, { field, value }) {
        if (Object.hasOwnProperty.call(state.personalOrder, field)) {
            state.personalOrder[field] = value;
        }
    },
    SET_PERSONAL_ORDER_ADDED_COSTS_FIELD (state, { field, value }) {
        state.personalOrder.addedCosts[field] = value;
    },
    CLEAR_PERSONAL_ORDER_FIELDS (state) {
        Object.assign(state.personalOrder, {
            email: '',
            name: '',
            width: '',
            height: '',
            texture: null,
            addedCosts: {
                imageProcessing: '',
                imageSearch: '',
                imageCosts: ''
            }
        })
    }
};

const actions = {
    getItem({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/store/orders/${id}/details`,
            thenContent: response => commit('SET_ITEM', response.data)
        });
    },
    delete({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/store/orders/${payload}`,
            thenContent: (response) => {
                if (tableMode === 'table') {
                    dispatch('table/updateItemsPost', null, { root: true });
                }
            }
        });
    },
    changeStatus({ commit, dispatch }, { id, status, list = true }) {
        return axiosAction('post', commit, {
            url: `/store/orders/${id}/status`,
            data: { status, list },
            thenContent: (response) => list
                ? dispatch('table/updateItemsPost', null, { root: true })
                : commit('SET_ITEM', response.data)
        });
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    setItemFields ({ commit }, payload) {
        commit('SET_ITEM_FIELDS', payload);
    },
    refund ({ commit }, { id, data }) {
        return axiosAction('post', commit, {
            url: `/store/orders/${id}/refund`,
            data,
            thenContent: response => commit('SET_ITEM', response.data)
        });
    },

    createCartItem: ({ commit }, data) => axiosAction('post', commit, {
        url: '/store/carts',
        data
    }),

    setPersonalOrderField ({ commit }, payload) {
        commit('SET_PERSONAL_ORDER_FIELD', payload);
    },
    setPersonalOrderAddedCostsField ({ commit }, payload) {
        commit('SET_PERSONAL_ORDER_ADDED_COSTS_FIELD', payload);
    },
    clearPersonalOrderFields ({ commit }) {
        commit('CLEAR_PERSONAL_ORDER_FIELDS');
    }
};

const getters = {
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
