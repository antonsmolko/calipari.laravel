import {uniqueFieldEditMixin, uniqueFieldMixin} from "../../mixins/getters";
import {axiosAction} from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        alias: '',
        description: ''
    },
    items: []
};

const mutations = {
    SET_ITEM_FIELD (state, { field, value }) {
        state.fields[field] = value;
    },
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    DELETE_ITEM (state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
    },
    CLEAR_ITEM_FIELDS (state) {
        for(let field of Object.keys(state.fields)) {
            state.fields[field] = '';
        }
    },
    SET_ITEM_FIELDS (state, payload) {
        for(let field of Object.keys(state.fields)) {
            state.fields[field] = payload[field] === null ? '' : payload[field];
        }
    },
    SET_SETTING_VALUE (state, { key_name, group, value }) {
        state.items.map(item => {
            item[group].map(setting => {
                if (setting.key_name === key_name) {
                    setting.value = value;
                }
            })
        })
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/setting-groups',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItemsWithSettings ({ commit }) {
        return axiosAction('get', commit, {
            url: '/setting-groups/with-settings',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/setting-groups/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for(const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: '/setting-groups',
            data
        })
    },
    update ({ commit }, { id, formData }) {
        const data = new FormData();
        for(const [field, value] of Object.entries(formData)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: `/setting-groups/${id}`,
            data
        })
    },
    delete ({ commit }, { payload }) {
        return axiosAction('delete', commit, {
            url: `/setting-groups/${payload}`,
            thenContent: response => commit('DELETE_ITEM', payload)
        })
    },
    setItemFields ({ commit }, id) {
        return commit('SET_ITEM_FIELDS', id);
    },
    setItemField({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    clearItemFields ({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
    }
};

const getters = {
    isUniqueTitle: state => value => uniqueFieldMixin(state.items, 'title', value),
    isUniqueTitleEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'title', value, id),
    isUniqueAlias: state => title => uniqueFieldMixin(state.items, 'alias', title),
    isUniqueAliasEdit: state => (title, id) => uniqueFieldEditMixin(state.items, 'alias', title, id),
    firstGroupId: state => state.items.slice(0, 1)[0] ? state.items.slice(0, 1)[0].id : ''
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
