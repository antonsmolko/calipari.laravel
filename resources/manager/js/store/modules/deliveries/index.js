import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        alias: '',
        price: '',
        order: '',
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
        state.fields.publish = +!state.fields.publish;
    },
    DELETE_ITEM (state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
    },
    CLEAR_FIELDS (state) {
        for(const field of Object.keys(state.fields)) {
            state.fields[field] = '';
        }
    },
    SET_ITEM_FIELDS (state, payload) {
        for(const field of Object.keys(state.fields)) {
            state.fields[field] = payload[field] === null ? '' : payload[field];
        }
    },
    CHANGE_PUBLISH(state, payload) {
        state.items.forEach(item => {
            if(item.id === payload.id) {
                item.publish = payload.publish;
            }
        });
    }
};

const actions = {
    getItems({ commit }) {
        return axiosAction('get', commit, {
            url: '/store/deliveries',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/store/deliveries/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store({ commit }, formData) {
        const data = new FormData();
        for(const [key, value] of Object.entries(formData)) {
            data.append(key, value);
        }
        return axiosAction('post', commit, {
            url: '/store/deliveries',
            data
        })
    },
    update({ commit }, { id, formData }) {
        const data = new FormData();
        for(const [key, value] of Object.entries(formData)) {
            data.append(key, value);
        }
        return axiosAction('post', commit, {
            url: `/store/deliveries/${id}`,
            data
        })
    },
    delete({ commit }, { payload }) {
        return axiosAction('delete', commit, {
            url: `/store/deliveries/${payload}`,
            thenContent: response => commit('DELETE_ITEM', payload)
        })
    },
    publish({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/store/deliveries/${id}/publish`,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)

        })
    },
    setItemField({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    togglePublishField({ commit }) {
        commit('TOGGLE_PUBLISH_FIELD');
    },
    clearFields({ commit }) {
        commit('CLEAR_FIELDS');
    }
};

const getters = {
    isUniqueTitle: state => value => uniqueFieldMixin(state.items, 'title', value),
    isUniqueTitleEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'title', value, id),
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
