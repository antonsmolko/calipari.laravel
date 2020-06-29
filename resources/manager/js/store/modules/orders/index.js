import { axiosAction } from "../../mixins/actions";

const state = {
    item: {}
};

const mutations = {
    SET_ITEM(state, payload) {
        state.item = payload
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
