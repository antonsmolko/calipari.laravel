import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction, axiosPatch } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        alias: '',
        image: '',
        image_path: '',
        publish: '',
        meta_title: '',
        description: '',
        keywords: '',
        has_published_images: '',
        has_images: ''
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
        for(const field of Object.keys(state.fields)) {
            state.fields[field] = state.fields[field] instanceof Array ? [] : '';
        }
    },
    SET_ITEM_FIELDS (state, payload) {
        for(const field of Object.keys(state.fields)) {
            state.fields[field] = payload[field];
        }
    },
    TOGGLE_PUBLISH_FIELD(state) {
        state.fields.publish = Number(!state.fields.publish);
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/catalog/art-collections',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/catalog/art-collections/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }

        return axiosAction('post', commit, { url: '/catalog/art-collections', data })
    },
    update ({ commit }, { id, payload }) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            if (field !== 'image' || value) {
                data.append(field, value);
            }
        }

        return axiosAction('post', commit, { url: `/catalog/art-collections/${id}`, data })
    },
    delete({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/catalog/art-collections/${payload}`,
            thenContent: response => {
                if (tableMode === 'table') {
                    dispatch('table/getItemsGet', null, { root: true });
                    dispatch('table/deleteSearchedItem', payload, { root: true });
                }
            }
        })
    },
    getImages({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/catalog/art-collections/${id}/images`,
            thenContent: response => commit(
                'images/SET_FIELD',
                { field: 'items', value: response.data },
                { root: true })
        })
    },
    addSelectedImages ({ commit }, { id, data }) {
        return axiosAction('post', commit, {
            url: `/catalog/art-collections/${id}/images/add`,
            data
        })
    },
    removeImage ({ commit }, { collectionId, imageId }) {
        return axiosAction('get', commit, {
            url: `/catalog/art-collections/${collectionId}/images/${imageId}/remove`,
            thenContent: response => commit('images/DELETE_ITEM', imageId, { root: true })
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    clearItemFields ({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
    },
    togglePublishField({ commit }) {
        commit('TOGGLE_PUBLISH_FIELD');
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
