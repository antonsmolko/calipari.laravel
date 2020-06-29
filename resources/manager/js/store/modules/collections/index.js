import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction, axiosPatch } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        alias: '',
        image_id: '',
        image_description: '',
        max_print_width: '',
        topics: [],
        interiors: [],
        tags: [],
        owner_id: '',
        main_image_id: '',
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
        state.fields.publish = +!state.fields.publish;
    }
};

const actions = {
    getItems ({ commit }) {
        return axiosAction('get', commit, {
            url: '/catalog/collections',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/catalog/collections/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store ({ commit }, data) {
        return axiosAction('post', commit, {
            url: '/catalog/collections',
            data
        })
    },
    update ({ commit }, { id, data }) {
        return axiosPatch({
            method: 'PUT',
            url: `/catalog/collections/${id}`,
            commit,
            data
        })
    },
    delete({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/catalog/collections/${payload}`,
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
            url: `/catalog/collections/${id}/images`,
            thenContent: response => commit(
                'images/SET_FIELD',
                { field: 'items', value: response.data },
                { root: true })
        })
    },
    uploadImages ({ commit, dispatch }, { id, files }) {
        const data = new FormData();
        for(let file of files) {
            data.append('images[]', file);
        }

        return axiosAction('post', commit, {
            url: `/catalog/collections/${id}/upload`,
            data,
            options: {
                onUploadProgress: (imageUpload) => {
                    commit(
                        'images/CHANGE_FILE_PROGRESS',
                        Math.round((imageUpload.loaded / imageUpload.total) * 100),
                        {root: true}
                    );
                }
            },
            thenContent: (response) => {
                commit('images/CHANGE_FILE_PROGRESS', 0, { root: true });
                commit('SET_ITEM_FIELD', { field: 'main_image_id', value: response.data })
                dispatch('getImages', id);
            }
        })
    },
    setMainImage ({ commit }, { id, imageId }) {
        return axiosAction('post', commit, {
            url: `/catalog/collections/${id}/set-main-image`,
            data: { image_id: imageId },
            thenContent: response => commit('SET_ITEM_FIELD', { field: 'main_image_id', value: response.data })
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
