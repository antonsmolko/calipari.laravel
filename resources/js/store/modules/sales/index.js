import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        image_id: '',
        image_path: '',
        article: '',
        image: '',
        width_cm: '',
        height_cm: '',
        texture_id: '',
        discount: '',
        description: '',
        publish: ''
    },
    items: [],
    articles: []
};

const mutations = {
    SET_ITEM_FIELD (state, { field, value }) {
        if (Object.hasOwnProperty.call(state.fields, field)) {
            state.fields[field] = value;
        }
    },
    SET_ITEM_FIELDS (state, payload) {
        for (const [field, value] of Object.entries(payload)) {
            if (Object.hasOwnProperty.call(state.fields, field)) {
                state.fields[field] = value;
            }
        }
    },
    CLEAR_ITEM_FIELDS (state) {
        for (const field of Object.keys(state.fields)) {
            state.fields[field] = '';
        }
    },
    TOGGLE_PUBLISH_FIELD (state) {
        state.fields.publish = Number(!state.fields.publish);
    },
    SET_FIELD (state, { field, value }) {
        if (Object.hasOwnProperty.call(state, field)) {
            state[field] = value;
        }
    }
};

const actions = {
    getArticles: ({ commit }) => axiosAction('get', commit, {
        url: '/store/sales/articles',
        thenContent: response => commit('SET_FIELD', { field: 'articles', value: response.data })
    }),
    getRestArticles: ({ commit }, id) => axiosAction('get', commit, {
        url: `/store/sales/${id}/rest-articles`,
        thenContent: response => commit('SET_FIELD', { field: 'articles', value: response.data })
    }),
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/store/sales/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }

        return axiosAction('post', commit, { url: `/store/sales`, data })
    },
    update ({ commit }, { id, formData }) {
        const data = new FormData();
        for (const [field, value] of Object.entries(formData)) {
            if (field !== 'image' || value) {
                data.append(field, value);
            }
        }
        return axiosAction('post', commit, {
            url: `/store/sales/${id}`,
            data
        })
    },
    delete ({ commit, dispatch }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/store/sales/${payload}`,
            thenContent: (response) => {
                if (tableMode === 'table') {
                    dispatch('table/getItemsPost', null, { root: true });
                    dispatch('table/deleteSearchedItem', payload, { root: true });
                }
            }
        })
    },
    changeStatus ({ commit, dispatch }, { id, status }) {
        return axiosAction('get', commit, {
            url: `/store/sales/${id}/change-status/${status}`,
            thenContent: (response) => {
                dispatch('table/updateItemsPost', null, { root: true })
                dispatch('table/deleteSearchedItem', id, { root: true });
            }
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
    isUniqueArticle: state => value => !state.articles.includes(value.toUpperCase())
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
