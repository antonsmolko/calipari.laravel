import { uniqueFieldEditMixin } from "../../mixins/getters";
import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        long_title: '',
        image: '',
        image_path: '',
        content: '',
        description: '',
        keywords: ''
    },
    item: {},
    items: []
};

const mutations = {
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    SET_FIELD (state, { field, value }) {
        state[field] = value;
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
            if (Object.hasOwnProperty.call(payload, field)) {
                state.fields[field] = payload[field] === null ? '' : payload[field];
            }
        }
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit,  {
            url: '/pages',
            thenContent: response => commit('SET_FIELD', { field: 'items', value: response.data })
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/pages/${id}`,
            thenContent: response => {
                commit('SET_ITEM_FIELDS', response.data);
                commit('SET_FIELD', { field: 'item', value: response.data });
            }
        })
    },
    update ({ commit }, { id, formData }) {
        const data = new FormData();
        for (const [field, value] of Object.entries(formData)) {
            data.append(field, value);
        }

        return axiosAction('post', commit, { url: `/pages/${id}`, data })
    },
    deleteImage ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/pages/${id}/delete-image`,
            thenContent: response => {
                commit('SET_ITEM_FIELDS', response.data);
                commit('SET_FIELD', { field: 'item', value: response.data });
            }
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    clearItemFields ({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
    },
    setField({ commit }, payload) {
        commit('SET_FIELD', payload);
    }
};

const getters = {
    isUniqueTitle: state => (value, id) => uniqueFieldEditMixin(state.items, 'title', value, id)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
