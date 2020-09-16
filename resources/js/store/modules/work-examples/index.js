import forEach from 'lodash/forEach';
import { axiosAction } from "../../mixins/actions";
import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";

const state = {
    fields: {
        title: '',
        date: '',
        image_path: '',
        image_id: '',
        image: '',
        images: '',
        publish: ''
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
            url: '/work-examples',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/work-examples/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    publish ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/work-examples/${id}/publish`,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: '/work-examples',
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
            url: `/work-examples/${id}`,
            data
        })
    },
    delete ({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/work-examples/${payload}`,
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
            url: `/work-examples/${id}/upload`,
            data,
            thenContent: (response) => commit('SET_ITEM_FIELD', { field: 'images', value: response.data })
        })
    },
    deleteImageByIndex ({ commit }, { id, index }) {
        return axiosAction('get', commit, {
            url: `/work-examples/${id}/delete-image/${index}`,
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
    isUniqueImageId: state => value => uniqueFieldMixin(state.items, 'image_id', value),
    isUniqueImageIdEdit: state => (value, id) => uniqueFieldEditMixin(state.items, 'image_id', value, id),
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
