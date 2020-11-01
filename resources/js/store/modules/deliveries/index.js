import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        alias: '',
        order: '',
        is_pickup: '',
        pickups_required: '',
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
    TOGGLE_PICKUP_FIELD (state) {
        state.fields.is_pickup = Number(!state.fields.is_pickup);
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
        for (const field of Object.keys(state.fields)) {
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
        url: '/store/deliveries',
        thenContent: response => commit('SET_ITEMS', response.data)
    }),
    getPickupItems: ({ commit }) => axiosAction('get', commit, {
        url: '/store/deliveries/pickup',
        thenContent: response => commit('SET_ITEMS', response.data)
    }),
    getItem: ({ commit }, id) => axiosAction('get', commit, {
        url: `/store/deliveries/${id}`,
        thenContent: response => commit('SET_ITEM_FIELDS', response.data)
    }),
    store: ({ commit }, data) => axiosAction('post', commit, {
        url: '/store/deliveries',
        data
    }),
    update: ({ commit }, { id, formData }) => axiosAction('post', commit, {
        url: `/store/deliveries/${id}`,
        data: formData
    }),
    delete: ({ commit }, { payload }) => axiosAction('delete', commit, {
        url: `/store/deliveries/${payload}`,
        thenContent: response => commit('DELETE_ITEM', payload)
    }),
    publish: ({ commit }, id) => axiosAction('get', commit, {
        url: `/store/deliveries/${id}/publish`,
        thenContent: response => commit('CHANGE_PUBLISH', response.data)
    }),
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    togglePickupField ({ commit }) {
        commit('TOGGLE_PICKUP_FIELD');
    },
    togglePublishField ({ commit }) {
        commit('TOGGLE_PUBLISH_FIELD');
    },
    clearItemFields ({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
    }
};

const getters = {
    isUniqueAlias: state => title => uniqueFieldMixin(state.items, 'alias', title),
    isUniqueAliasEdit: state => (title, id) => uniqueFieldEditMixin(state.items, 'alias', title, id),
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
