import forEach from 'lodash/forEach';
import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        type: '',
        title: '',
        alias: '',
        image: '',
        image_path: '',
        publish: '',
        meta_title: '',
        description: '',
        keywords: '',
        has_published_images: ''
    },
    item: '',
    items: []
};

const mutations = {
    SET_FIELD (state, { field, value }) {
        state[field] = value;
    },
    DELETE_ITEM(state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
    },
    CHANGE_PUBLISH(state, payload) {
        state.items.forEach(item => {
            if(item.id === payload.id) {
                item.publish = payload.publish;
            }
        });
    },
    SET_ITEM_FIELD(state, { field, value }) {
        state.fields[field] = value;
    },
    TOGGLE_PUBLISH_FIELD(state) {
        state.fields.publish = Number(!state.fields.publish);
    },
    CLEAR_FIELDS(state) {
        for (const field of Object.keys(state.fields)) {
            state.fields[field] = '';
        }
    },
    SET_FIELDS(state, payload) {
        for (const field of Object.keys(state.fields)) {
            if (Object.hasOwnProperty.call(payload, field)) {
                state.fields[field] = payload[field];
            }
        }
    }
};

const actions = {
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/catalog/categories/${id}`,
            thenContent: response => commit('SET_FIELD', { field: 'item', value: response.data})
        })
    },
    getItemFromEdit ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/catalog/categories/${id}/edit`,
            thenContent: response => commit('SET_FIELDS', response.data)
        })
    },
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/catalog/categories',
            thenContent: response => commit('SET_FIELD', { field: 'items', value: response.data})
        })
    },
    getItemsByType ({ commit }, category_type) {
        return axiosAction('get', commit, {
            url: `/catalog/categories/type/${category_type}`,
            thenContent: response => commit('SET_FIELD', { field: 'items', value: response.data})
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }

        return axiosAction('post', commit, { url: `/catalog/categories`, data })
    },
    update ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload.formData)) {
            if (field !== 'image' || value) {
                data.append(field, value);
            }
        }
        return axiosAction('post', commit, {
            url: `/catalog/categories/${payload.category_id}`,
            data
        })
    },
    delete ({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/catalog/categories/${payload}`,
            thenContent: (response) => {
                if (tableMode === 'table') {
                    dispatch('table/getItemsGet', null, { root: true });
                    dispatch('table/deleteSearchedItem', payload, { root: true });
                }
            }
        })
    },
    removeImage ({ commit, dispatch }, { categoryId, imageId }) {
        return axiosAction('get', commit, {
            url: `/catalog/categories/${categoryId}/images/${imageId}/remove`,
            thenContent: response => dispatch('table/updateItemsPost', null, { root: true })
        })
    },
    uploadImages ({ commit, dispatch, rootState }, { images, id }) {
        const data = new FormData();
        forEach(images, image => data.append('images[]', image))

        return axiosAction('post', commit, {
            url: `/catalog/categories/${id}/upload`,
            data,
            thenContent: (response) => {
                commit('table/SET_PAGINATION_FIELD', { field: 'current_page', value: 1 }, { root: true });
                if (rootState.table.resourceUrl) {
                    dispatch('table/getItemsPost', null, { root: true });
                }
            }
        })
    },
    addSelectedImages ({ commit }, { id, data }) {
        return axiosAction('post', commit, {
            url: `/catalog/categories/${id}/images/add`,
            data
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
    },
    setField({ commit }, payload) {
        commit('SET_FIELD', payload);
    }
};

const getters = {
    isUniqueTitle: state => title => uniqueFieldMixin(state.items, 'title', title),
    isUniqueTitleEdit: state => (title, id) => uniqueFieldEditMixin(state.items, 'title', title, id),
    isUniqueAlias: state => title => uniqueFieldMixin(state.items, 'alias', title),
    isUniqueAliasEdit: state => (title, id) => uniqueFieldEditMixin(state.items, 'alias', title, id),
    getItemsByType: state => type => state.items.filter(item => item.type === type)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
