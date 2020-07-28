import { axiosAction } from "../../mixins/actions";

const state = {
    item: {},
    fields: {
        comparedPaymentId: null,
        refundAmount: 0,
        refundReason: ''
    }
};

const mutations = {
    SET_ITEM(state, payload) {
        state.item = payload
    },
    SET_ITEM_FIELD (state, { field, value}) {
        state.fields[field] = value;
    },
    SET_ITEM_FIELDS(state, payload) {
        for (const [field, value] of Object.keys(payload)) {
            if (Object.hasOwnProperty.call(state.fields, field)) {
                state.fields[field] = value;
            }
        }
    }
};

const actions = {
    getItem({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/store/orders/${id}/details`,
            thenContent: response => commit('SET_ITEM', response.data)
        })
    },
    delete({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/store/orders/${payload}`,
            thenContent: (response) => {
                if (tableMode === 'table') {
                    dispatch('table/updateItemsPost', null, { root: true });
                }
            }
        })
    },
    changeStatus({ commit, dispatch }, { id, status, list = true }) {
        return axiosAction('post', commit, {
            url: `/store/orders/${id}/status`,
            data: { status, list },
            thenContent: (response) => list
                ? dispatch('table/updateItemsPost', null, { root: true })
                : commit('SET_ITEM', response.data)
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    setItemFields ({ commit }, payload) {
        commit('SET_ITEM_FIELDS', payload);
    },
    refund({ commit }, { id, data }) {
        return axiosAction('post', commit, {
            url: `/store/orders/${id}/refund`,
            data,
            thenContent: response => commit('SET_ITEM', response.data)
        })
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
