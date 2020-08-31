import { axiosAction } from "../../mixins/actions";
import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";

const state = {
    item: {},
    items: []
};

const mutations = {
    SET_ITEM (state, payload) {
        state.item = payload;
    },
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    CHANGE_PUBLISH (state, payload) {
        state.items.forEach(item => {
            if(item.id === payload.id) {
                item.publish = payload.publish;
            }
        });
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/reviews',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/review/${id}`,
            thenContent: response => commit('SET_ITEM', response.data)
        })
    },
    publish ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/posts/${id}/publish`,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)
        })
    },
    delete ({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/review/${payload}`,
            thenContent: response => {
                if (tableMode === 'table') {
                    dispatch('table/getItemsPost', null, { root: true });
                    dispatch('table/deleteSearchedItem', payload, { root: true });
                }
            }
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    togglePublishField ({ commit }) {
        commit('TOGGLE_PUBLISH_FIELD');
    },
    clearItemFields ({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
    }
};

const getters = {
    isUniqueAlias: state => value => uniqueFieldMixin(state.items, 'alias', value),
    isUniqueAliasEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'alias', value, id),
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
