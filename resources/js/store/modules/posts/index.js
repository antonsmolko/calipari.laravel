import forEach from 'lodash/forEach';
import { axiosAction } from "../../mixins/actions";
import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";

const state = {
    fields: {
        title: '',
        alias: '',
        date: '',
        intro: '',
        image_path: '',
        image: '',
        images: [],
        content: '',
        type: '',
        publish: '',
        meta_title: '',
        description: '',
        keywords: ''
    },
    items: []
};

const mutations = {
    SET_ITEMS (state, payload) {
        state.items = payload;
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
            state.fields[field] = state.fields[field] instanceof Array ? [] : '';
        }
    },
    SET_ITEM_FIELDS (state, payload) {
        for(const field of Object.keys(state.fields)) {
            if (payload[field] !== null) {
                state.fields[field] = payload[field];
            }
        }
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/posts',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/posts/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    publish ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/posts/${id}/publish`,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }

        return axiosAction('post', commit, {
            url: '/posts',
            data
        })
    },
    update({ commit }, { id, formData }) {
        const data = new FormData();
        for (const [field, value] of Object.entries(formData)) {
            if (field !== 'image' || value) {
                data.append(field, value);
            }
        }
        return axiosAction('post', commit, {
            url: `/posts/${id}`,
            data
        })
    },
    delete ({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/posts/${payload}`,
            thenContent: response => {
                if (tableMode === 'table') {
                    dispatch('table/getItemsPost', null, { root: true });
                    dispatch('table/deleteSearchedItem', payload, { root: true });
                }
            }
        })
    },
    uploadImages ({ commit, dispatch }, { id, images }) {
        const data = new FormData();
        forEach(images, image => data.append('images[]', image))

        return axiosAction('post', commit, {
            url: `/posts/${id}/upload`,
            data,
            thenContent: (response) => commit('SET_ITEM_FIELD', { field: 'images', value: response.data })
        })
    },
    deleteImageByIndex ({ commit }, { id, index }) {
        return axiosAction('get', commit, {
            url: `/posts/${id}/delete-image/${index}`,
            thenContent: response => commit('SET_ITEM_FIELD', { field: 'images', value: response.data })
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
    isUniqueAlias: state => value => uniqueFieldMixin(state.items, 'alias', value),
    isUniqueAliasEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'alias', value, id),
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
