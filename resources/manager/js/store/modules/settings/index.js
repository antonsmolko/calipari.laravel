import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        key_name: '',
        display_name: '',
        type: '',
        group_id: ''
    },
    types: [],
    items: [],
    entries: {}
};

const mutations = {
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    SET_ITEM (state, { key_name, value }) {
        state.items.forEach((item) => {
            if (item.key_name === key_name) {
                item.value = value;
            }
        })
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
        for(let field of Object.keys(state.fields)) {
            state.fields[field] = payload[field] === null ? '' : payload[field];
        }
    },
    SET_TYPES (state, payload) {
        state.types = payload;
    },
    SET_FIELD (state, { field, value }) {
        state[field] = value
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/settings',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItemsWithGroup ({ commit }) {
        return axiosAction('get', commit, {
            url: '/settings/with-group',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItemsWithTypes ({ commit }) {
        return axiosAction('get', commit, {
            url: '/settings/with-types',
            thenContent: response => {
                commit('SET_ITEMS', response.data.items);
                commit('SET_TYPES', response.data.types);
                commit('SET_ITEM_FIELD', { field: 'type', value: response.data.types[0].name });
            }
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/settings/${id}`,
            thenContent: response => {
                commit('SET_ITEM_FIELDS', response.data);
            }
        })
    },
    getEntries ({ commit }) {
        return axiosAction('get', commit, {
            url: `/settings/entries`,
            thenContent: response => {
                commit('SET_FIELD', { field: 'entries', value: response.data });
            }
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for(const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: '/settings',
            data
        })
    },
    update ({ commit }, { id, formData}) {
        const data = new FormData();
        for(const [field, value] of Object.entries(formData)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: `/settings/${id}`,
            data
        })
    },
    set ({ commit }, payload) {
        const data = new FormData();
        for(const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: `/settings/set`,
            data,
            thenContent: (response) => {
                commit('SET_ITEM', payload);
                commit('CLEAR_ERRORS', null, {root: true});
            }
        })
    },
    delete ({ commit }, { payload }) {
        return axiosAction('delete', commit, {
            url: `/settings/${payload}`,
            thenContent: response => commit('DELETE_ITEM', payload)
        })
    },
    setItemFields ({ commit }, id) {
        return commit('SET_ITEM_FIELDS', id);
    },
    setImageValue ({ commit }, payload) {
        const data = new FormData();
        for(const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }

        return axiosAction('post', commit, {
            url: `/settings/set-image`,
            data
        })
    },
    setTextValue ({ commit }, payload) {
        const data = new FormData();
        for(const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }

        return axiosAction('post', commit, {
            url: `/settings/set-text`,
            data
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    clearItemFields({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
    }
};

const getters = {
    isUniqueKeyName: state => value => uniqueFieldMixin(state.items, 'key_name', value),
    isUniqueKeyNameEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'key_name', value, id),
    isUniqueDisplayName: state => value => uniqueFieldMixin(state.items, 'display_name', value),
    isUniqueDisplayNameEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'display_name', value, id)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
