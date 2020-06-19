import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        name: '',
        price: '',
        width: '',
        sample_path: '',
        sample: '',
        background_path: '',
        background: '',
        publish: '',
        description: ''
    },
    items: []
};

const mutations = {
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    DELETE_ITEM (state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
    },
    CHANGE_PUBLISH (state, payload) {
        state.items.forEach(item => {
            if(item.id === payload.id) {
                item.publish = payload.publish;
            }
        });
    },
    SET_ITEM_FIELD (state, { field, value }) {
        state.fields[field] = value;
    },
    TOGGLE_PUBLISH_FIELD (state) {
        state.fields.publish = +!state.fields.publish;
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
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/textures',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/textures/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    publish ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/textures/${id}/publish`,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: '/textures',
            data
        })
    },
    update({ commit }, { id, formData }) {
        const data = new FormData();
        const images = ['sample', 'background'];
        for (const [field, value] of Object.entries(formData)) {
            if (!images.includes(field) || value) {
                data.append(field, value);
            }
        }
        return axiosAction('post', commit, {
            url: `/textures/${id}`,
            data
        })
    },
    delete ({ commit }, { payload }) {
        return axiosAction('delete', commit, {
            url: `/textures/${payload}`,
            thenContent: response => commit('DELETE_ITEM', payload)
        })
    },
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
    isUniqueName: state => name => uniqueFieldMixin(state.items, 'name', name),
    isUniqueNameEdit: state => (name, id) => uniqueFieldEditMixin(state.items, 'name', name, id)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
