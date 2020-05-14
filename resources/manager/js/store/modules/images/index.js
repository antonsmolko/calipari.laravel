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
        description: ''
    },
    item: {},
    fileProgress: 0,
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
        state.item = {};
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
            options: {
                onUploadProgress: (imageUpload) => {
                    commit('CHANGE_FILE_PROGRESS', Math.round( ( imageUpload.loaded / imageUpload.total) * 100 ))
                }
            },
            thenContent: (response) => {
                commit('CHANGE_FILE_PROGRESS', 0);
                commit('table/SET_PAGINATION_FIELD', { field: 'current_page', value: 1 }, { root: true });
                dispatch('table/getItemsPost', null, { root: true });
            }
        })
    },
    update ({ commit }, payload) {
        const data = new FormData();
        const fields = payload.formData;

        for(const [field, value] of Object.entries(fields)) {
            if (value instanceof Array) {
                for(const item of value) {
                    data.append(field, item);
                }
            } else if (field !== 'image' || value) {
                data.append(field, value);
            }
        }

        return axiosAction('post', commit, {
            url: `/images/${payload.id}`,
            data
        })
    },
    delete ({ commit, dispatch, rootSate }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/images/${payload}`,
            thenContent: (response) => {
                if (tableMode) {
                    dispatch('table/updateItemsPost', null, { root: true });
                }
            }
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
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
