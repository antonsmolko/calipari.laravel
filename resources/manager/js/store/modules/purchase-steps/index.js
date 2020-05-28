import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        image: '',
        image_path: '',
        description: ''
    },
    items: []
};

const mutations = {
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    DELETE_ITEM (state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
    },
    SET_ITEM_FIELD (state, { field, value }) {
        state.fields[field] = value;
    },
    CLEAR_ITEM_FIELDS (state) {
        for(const field of Object.keys(state.fields)) {
            state.fields[field] = '';
        }
    },
    SET_ITEM_FIELDS (state, payload) {
        for(const field of Object.keys(state.fields)) {
            state.fields[field] = payload[field] === null ? '' : payload[field];
        }
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/purchase-steps',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/purchase-steps/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: '/purchase-steps',
            data
        })
    },
    update({ commit }, { id, formData }) {
        const data = new FormData();
        for (const [field, value] of Object.entries(formData)) {
            if (field !== 'image' || value) {
                data.append(field, value);
            }
        }
        return axiosAction('post', commit, {
            url: `/purchase-steps/${id}`,
            data
        })
    },
    delete ({ commit }, { payload }) {
        return axiosAction('delete', commit, {
            url: `/purchase-steps/${payload}`,
            thenContent: response => commit('DELETE_ITEM', payload)
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    clearItemFields ({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
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
