import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction } from "../../mixins/actions";

import config from "../../../config";

const state = {
    fields: {
        name: '',
        display_name: '',
        description: '',
        permissions: []
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
    DELETE_ITEM (state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
    },
    CLEAR_ITEM_FIELDS (state) {
        state.fields = {
            name: '',
            display_name: '',
            description: '',
            permissions: []
        }
    },
    SET_ITEM_FIELDS (state, payload) {
        for(const field of Object.keys(state.fields)) {
            if (Object.hasOwnProperty.call(payload, field)) {
                state.fields[field] = payload[field];
            }
        }
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/roles',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItemsFromOwner({ commit }) {
        return axiosAction('get', commit, {
            url: '/roles/from-owner',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItemsFromSuperAdmin({ commit }) {
        return axiosAction('get', commit, {
            url: '/roles/from-super-admin',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/roles/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for(const [field, value] of Object.entries(payload)) {
            if (value instanceof Array) {
                for (const item of value) {
                    data.append(`${field}[]`, item);
                }
            } else {
                data.append(field, value);
            }
        }

        return axiosAction('post', commit, {
            url: '/roles',
            data
        })
    },
    update ({ commit }, { id, formData}) {
        const data = new FormData();
        for(const [field, value] of Object.entries(formData)) {
            if (value instanceof Array) {
                for (const item of value) {
                    data.append(`${field}[]`, item);
                }
            } else {
                data.append(field, value);
            }
        }

        return axiosAction('post', commit, {
            url: `/roles/${id}`,
            data
        })
    },
    delete ({ commit }, { payload }) {
        return axiosAction('delete', commit, {
            url: `/roles/${payload}`,
            thenContent: response => commit('DELETE_ITEM', payload)
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    clearItemFields ({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
    },
};

const getters = {
    isUniqueName: state => value => uniqueFieldMixin(state.items, 'name', value),
    isUniqueNameEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'name', value, id),
    isUniqueDisplayName: state => value => uniqueFieldMixin(state.items, 'display_name', value),
    isUniqueDisplayNameEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'display_name', value, id),
    defaultRole: state => state.items.find(item => item.name === config.DEFAULT_ROLE).id,
    itemName: state => id => state.items.find(item => item.id === id).name
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
