import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: null,
        orders: 0,
        publish: 0,
        old_password: ''
    }
};

const mutations = {
    SET_ITEM_FIELD (state, { field, value}) {
        state.fields[field] = value;
    },
    TOGGLE_PUBLISH_FIELD (state) {
        state.fields.publish = +!state.fields.publish;
    },
    CLEAR_ITEM_FIELDS (state) {
        state.fields = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            role: null,
            orders: 0,
            publish: 0,
            old_password: ''
        }
    },
    SET_ITEM_FIELDS (state, payload) {
        for(const field of Object.keys(state.fields)) {
            state.fields[field] = payload[field] === null ? '' : payload[field];
        }
    }
};

const actions = {
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/users/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for(const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: '/users',
            data
        })
    },
    update ({ commit }, { id, formData }) {
        const data = new FormData();
        for(const [field, value] of Object.entries(formData)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: `/users/${id}`,
            data
        })
    },
    delete ({ commit, dispatch }, { payload, tableMode = false  }) {
        return axiosAction('delete', commit, {
            url: `/users/${payload}`,
            thenContent: response => {
                if (tableMode) {
                    dispatch('table/updateItemsPost', null, { root: true });
                }
            }
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    togglePublishField({ commit }) {
        commit('TOGGLE_PUBLISH_FIELD');
    },
    clearItemFields({ commit }) {
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
