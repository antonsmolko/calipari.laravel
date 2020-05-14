import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction, axiosPatch } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        alias: '',
        order: '',
        publish: '',
        description: ''
    },
    items: []
};

const mutations = {
    SET_ITEMS(state, payload) {
        state.items = payload;
    },
    SET_ITEM_FIELD(state, { field, value }) {
        state.fields[field] = value;
    },
    SET_ITEM_FIELDS(state, payload) {
        for(const [field, value] of Object.entries(payload)) {
            if (Object.hasOwnProperty.call(state.fields, field)) {
                state.fields[field] = value
            }
        }
    },
    DELETE_ITEM(state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
    },
    CLEAR_FIELDS(state) {
        for(const field of Object.keys(state.fields)) {
            state.fields[field] = '';
        }
    },
    TOGGLE_PUBLISH_FIELD(state) {
        state.fields.publish = +!state.fields.publish;
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
            url: '/store/order-statuses',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/store/order-statuses/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store({ commit }, payload) {
        return axiosAction('post', commit, {
            url: '/store/order-statuses',
            data: payload
        })
    },
    update({ commit }, { id, data }) {
        return axiosPatch({
            url: `/store/order-statuses/${id}`,
            commit,
            data
        })
    },
    delete({ commit }, { payload }) {
        return axiosAction('delete', commit, {
            url: `/store/order-statuses/${payload}`,
            thenContent: response => commit('DELETE_ITEM', payload)
        })
    },
    setItemField({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    clearFields({ commit }) {
        commit('CLEAR_FIELDS');
    },
    togglePublishField({ commit }) {
        commit('TOGGLE_PUBLISH_FIELD');
    },
    publish({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/store/order-statuses/${id}/publish`,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)
        })
    }
};

const getters = {
    isUniqueTitle: state => value => uniqueFieldMixin(state.items, 'title', value),
    isUniqueTitleEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'title', value, id),
    isUniqueAlias: state => title => uniqueFieldMixin(state.items, 'alias', title),
    isUniqueAliasEdit: state => (title, id) => uniqueFieldEditMixin(state.items, 'alias', title, id),
    getItemById: state => id => state.items.find(item => item.id === id),
    getRestItems: state => currentOrder => state.items.filter(item => item.order > currentOrder)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
