import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction, axiosPatch, axiosPut } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        locality: '',
        address: '',
        delivery_id: '',
        publish: '',
        description: ''
    },
    items: []
};

const mutations = {
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    SET_ITEM_FIELD (state, { field, value }) {
        state.fields[field] = value;
    },
    TOGGLE_PUBLISH_FIELD (state) {
        state.fields.publish = Number(!state.fields.publish);
    },
    DELETE_ITEM (state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
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
    getItems: ({ commit }) => axiosAction('get', commit, {
        url: '/store/pickups',
        thenContent: response => commit('SET_ITEMS', response.data)
    }),
    getItem: ({ commit }, id) => axiosAction('get', commit, {
        url: `/store/pickups/${id}`,
        thenContent: response => commit('SET_ITEM_FIELDS', response.data)
    }),
    store: ({ commit }, data) => axiosAction('post', commit, {
        url: '/store/pickups',
        data
    }),
    update: ({ commit }, { id, data }) => axiosPatch({
        commit,
        url: `/store/pickups/${id}`,
        data
    }),
    delete: ({ commit }, { payload }) => axiosAction('delete', commit, {
        url: `/store/pickups/${payload}`,
        thenContent: response => commit('DELETE_ITEM', payload)
    }),
    publish: ({ commit }, id) => axiosAction('get', commit, {
        url: `/store/pickups/${id}/publish`,
        thenContent: response => commit('CHANGE_PUBLISH', response.data)
    }),
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
    isUniqueTitle: state => value => uniqueFieldMixin(state.items, 'title', value),
    isUniqueTitleEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'title', value, id)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
