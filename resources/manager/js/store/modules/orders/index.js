import first from "lodash/first";
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
    delete({ commit }, { payload }) {
        return axiosAction('delete', commit, {
            url: `/store/orders/${payload}`,
            thenContent: response => commit('DELETE_ITEM', payload)
        })
    },
    changeStatus({ commit }, { id, status, list = true }) {
        return axiosAction('post', commit, {
            url: `/store/orders/${id}/status`,
            data: { status, list },
            thenContent: (response) => {
                const item = response.data;
                const currentStatus = first([...item.statuses]);

                list
                    ? currentStatus.alias === 'completed'
                        ? commit('table/DELETE_ITEM', item, { root: true })
                        : commit('table/UPDATE_ITEMS', item, { root: true })
                    : commit('SET_ITEM', response.data)
            }
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
