import { axiosAction } from "../../mixins/actions";
import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";

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
        for(const [field, value] of Object.entries(payload)) {
            if (value && Object.hasOwnProperty.call(state.fields, field)) {
                state.fields[field] = value;
            }
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
            thenContent: (response) => {
                if (tableMode === 'table') {
                    dispatch('table/updateItemsPost', null, { root: true });
                }
            }
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    setItemFields ({ commit }, payload) {
        commit('SET_ITEM_FIELDS', payload);
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
