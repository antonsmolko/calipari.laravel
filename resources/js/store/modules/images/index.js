import forEach from 'lodash/forEach';
import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        image: '',
        publish: '',
        topics: [],
        colors: [],
        interiors: [],
        tags: [],
        owner_id: '',
        max_print_width: '',
        description: '',
        examples: [],
        difference: 50
    },
    item: {},
    items: [],
    duplicates: [],
    duplicateFindStatus: null
};

const mutations = {
    SET_FIELD (state, { field, value }) {
        state[field] = value;
    },
    SET_ITEM_FIELD (state, { field,  value }) {
        state.fields[field] = value;
    },
    TOGGLE_PUBLISH_FIELD (state) {
        state.fields.publish = +!state.fields.publish;
    },
    CLEAR_FIELDS (state) {
        for (const field of Object.keys(state.fields)) {
            state.fields[field] = state.fields[field] instanceof Array ? [] : '';
        }
        state.fields.difference = 50;
        state.duplicates = [];
        state.duplicateFindStatus = null;
        state.item = {};
    },
    DELETE_ITEM (state, id) {
        state.items = state.items.filter(item => item.id !== id);
    },
    SET_ITEM_FIELDS (state, payload) {
        for(const field of Object.keys(state.fields)) {
            if (Object.hasOwnProperty.call(payload, field)) {
                state.fields[field] = payload[field] === null ? '' : payload[field];
            }
        }
    },
    CHANGE_FILE_PROGRESS (state, payload) {
        state.fileProgress = payload;
    },
    CHANGE_PUBLISH(state, payload) {
        state.items.forEach(item => {
            if (item.id === payload.id) {
                item.publish = payload.publish;
            }
        });
    }
};

const actions = {
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/images/${id}`,
            thenContent: response => {
                commit('SET_FIELD', { field: 'item', value: response.data });
                commit('SET_ITEM_FIELDS', response.data);
            }
        })
    },
    store ({ commit, dispatch }, payload) {
        const data = new FormData();
        for(const image of payload) {
            data.append('images[]', image);
        }

        return axiosAction('post', commit, {
            url: '/images',
            data,
            thenContent: (response) => {
                commit('table/SET_PAGINATION_FIELD', { field: 'current_page', value: 1 }, { root: true });
                dispatch('table/getItemsPost', null, { root: true });
            }
        })
    },
    update ({ commit }, { id, formData }) {
        const data = new FormData();

        for(const [field, value] of Object.entries(formData)) {
            if (value instanceof Array) {
                for(const item of value) {
                    data.append(`${field}[]`, item);
                }
            } else if (field !== 'image' || value) {
                data.append(field, value);
            }
        }

        return axiosAction('post', commit, {
            url: `/images/${id}`,
            data
        })
    },
    togglePublish ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/images/${id}/publish`,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)
        })
    },
    delete ({ commit, dispatch, rootSate }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/images/${payload}`,
            thenContent: (response) => {
                if (tableMode === 'table') {
                    dispatch('table/updateItemsPost', null, { root: true });
                }
                if (tableMode === 'images') {
                    commit('DELETE_ITEM', payload)
                }
            }
        })
    },
    forceDelete ({ commit, dispatch }, { payload }) {
        return axiosAction('get', commit, {
            url: `/images/${payload}/force-delete`,
            thenContent: response => dispatch('table/updateItemsPost', null, { root: true })
        });
    },
    restore ({ commit, dispatch }, id) {
        return axiosAction('get', commit, {
            url: `/images/${id}/restore`,
            thenContent: response => dispatch('table/updateItemsPost', null, { root: true })
        });
    },
    uploadExamples ({ commit }, { id, images }) {
        const data = new FormData();

        forEach(images, image => data.append('examples[]', image))

        return axiosAction('post', commit, {
            url: `/images/${id}/examples`,
            data,
            thenContent: (response) => commit('SET_ITEM_FIELD', { field: 'examples', value: response.data })
        })
    },
    deleteExample ({ commit }, { id, example }) {
        return axiosAction('delete', commit, {
            url: `/images/${id}/examples/${example}`,
            thenContent: (response) => {
                commit('SET_ITEM_FIELD', { field: 'examples', value: response.data })
                commit('images/CHANGE_FILE_PROGRESS', 0, { root: true });
            }
        })
    },
    findDuplicates ({ state, commit }, { category_type, id = null }) {
        commit('SET_FIELD', { field: 'duplicateFindStatus', value: 'progress' });

        const data = new FormData();
        data.append('image', state.fields.image);
        data.append('difference', state.fields.difference ?? 50);
        if (category_type !== 'images') {
            data.append('category_id', id)
        }

        return axiosAction('post', commit, {
            url: '/images/find-duplicates',
            data,
            thenContent: (response) => {
                commit('SET_FIELD', { field: 'duplicates', value: response.data })
                commit('SET_FIELD', { field: 'duplicateFindStatus', value: 'end' });
            }
        })
    },
    getRawItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/images/${id}/get-raw`,
            thenContent: response => commit('SET_FIELD', { field: 'item', value: response.data })
        });
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    setField ({ commit }, payload) {
        commit('SET_FIELD', payload);
    },
    togglePublishField ({ commit }) {
        commit('TOGGLE_PUBLISH_FIELD');
    },
    clearFields ({ commit }) {
        commit('CLEAR_FIELDS');
    }
};

const getters = {
    fileProgress: state => state.fileProgress
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
