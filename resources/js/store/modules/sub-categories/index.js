import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";
import { axiosAction, axiosPatch } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        // publish: '',
        description: ''
        // hasImages: ''
    },
    item: '',
    items: [],
    itemsByType: {
        owners: []
    }
};

const mutations = {
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    SET_ITEMS_BY_TYPE (state, { type, items }) {
        state.itemsByType[type] = items;
    },
    SET_ITEM (state, payload) {
        state.item = payload;
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
    SET_ITEM_FIELD(state, { field, value }) {
        state.fields[field] = value;
    },
    TOGGLE_PUBLISH_FIELD (state) {
        state.fields.publish = +!state.fields.publish;
    },
    CLEAR_ITEM_FIELDS (state) {
        for (const field of Object.keys(state.fields)) {
            state.fields[field] = '';
        }
    },
    SET_FIELDS (state, payload) {
        for (const field of Object.keys(state.fields)) {
            if (Object.hasOwnProperty.call(payload, field)) {
                state.fields[field] = payload[field];
            }
        }
    }
};

const actions = {
    getItems ({ commit }, category_type) {
        return axiosAction('get', commit, {
            url: `/catalog/${category_type}`,
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItemsWithType ({ commit }, category_type) {
        return axiosAction('get', commit, {
            url: `/catalog/${category_type}`,
            thenContent: response => commit('SET_ITEMS_BY_TYPE', {
                items: response.data,
                type: category_type
            })
        })
    },
    getItem ({ commit }, { type, id }) {
        return axiosAction('get', commit, {
            url: `/catalog/${type}/${id}`,
            thenContent: response => commit('SET_FIELDS', response.data)
        })
    },
    store ({ commit }, { type, data }) {
        return axiosAction('post', commit, {
            url: `/catalog/${type}`,
            data
        })
    },
    update ({ commit }, { type, id, data}) {
        return axiosPatch({
            url: `/catalog/${type}/${id}`,
            commit,
            data
        })
    },
    delete({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/catalog/${payload.type}/${payload.id}`,
            thenContent: response => {
                if (tableMode === 'table') {
                    dispatch('table/getItemsGet', null, { root: true });
                    dispatch('table/deleteSearchedItem', payload, { root: true });
                }
            }
        })
    },
    uploadImages ({ commit, dispatch }, { type, id, files }) {
        let data = new FormData();

        for(let file of files) {
            data.append('images[]', file);
        }

        return axiosAction('post', commit, {
            url: `/catalog/${type}/${id}/upload`,
            data,
            options: {
                onUploadProgress: (imageUpload) => {
                    commit(
                        'images/CHANGE_FILE_PROGRESS',
                        Math.round((imageUpload.loaded / imageUpload.total) * 100), {root: true}
                    );
                }
            },
            thenContent: (response) => {
                commit('images/CHANGE_FILE_PROGRESS', 0, { root: true });
                commit('table/SET_PAGINATION_FIELD', { field: 'current_page', value: 1 }, { root: true });
                dispatch('table/getItemsPost', null, { root: true });
            }
        })
    },
    removeImage({ commit, dispatch }, id) {
        return axiosAction('get', commit, {
            url: `/images/${id}/dissociate-owner`,
            thenContent: response => dispatch('table/updateItemsPost', null, { root: true })
        })
    },
    addSelectedImages({ commit }, { type, id, data }) {
        return axiosAction('post', commit, {
            url: `/catalog/${type}/${id}/images/add`,
            data
        })
    },
    setItemField({ commit }, payload) {
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
    isUniqueTitle: state => title => uniqueFieldMixin(state.items, 'title', title),
    isUniqueTitleEdit: state => (title, id) => uniqueFieldEditMixin(state.items, 'title', title, id)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
