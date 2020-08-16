import { axiosAction, axiosDownload } from "../../mixins/actions";

const state = {
    item: {},
    fields: {
        comparedPaymentId: '',
        refundAmount: 0,
        refundReason: ''
    },
    project: {
        email: '',
        name: '',
        width: '',
        height: '',
        texture: null,
        addedCosts: {
            imageProcessing: '',
            imageSearch: '',
            imageCosts: ''
        }
    }
};

const mutations = {
    SET_ITEM(state, payload) {
        state.item = payload
    },
    SET_ITEM_FIELD (state, { field, value}) {
        state.fields[field] = value;
    },
    SET_ITEM_FIELDS (state, payload) {
        for (const [field, value] of Object.entries(payload)) {
            if (Object.hasOwnProperty.call(state.fields, field)) {
                state.fields[field] = value;
            }
        }
    },
    SET_PROJECT_FIELD (state, { field, value }) {
        if (Object.hasOwnProperty.call(state.project, field)) {
            state.project[field] = value;
        }
    },
    SET_PROJECT_ADDED_COSTS_FIELD (state, { field, value }) {
        state.project.addedCosts[field] = value;
    },
    CLEAR_PROJECT_FIELDS (state) {
        Object.assign(state.project, {
            email: '',
            name: '',
            width: '',
            height: '',
            texture: null,
            addedCosts: {
                imageProcessing: '',
                imageSearch: '',
                imageCosts: ''
            }
        })
    }
};

const actions = {
    getItem: ({ commit }, id) => axiosAction('get', commit, {
        url: `/store/orders/${id}/details`,
        thenContent: response => commit('SET_ITEM', response.data)
    }),
    delete: ({ commit, dispatch }, { payload, tableMode = false }) => axiosAction('delete', commit, {
        url: `/store/orders/${payload}`,
        thenContent: (response) => {
            if (tableMode === 'table') {
                dispatch('table/updateItemsPost', null, { root: true });
            }
        }
    }),
    changeStatus: ({ commit, dispatch }, { id, status, list = true }) => axiosAction('post', commit, {
        url: `/store/orders/${id}/status`,
        data: { status, list },
        thenContent: (response) => list
            ? dispatch('table/updateItemsPost', null, { root: true })
            : commit('SET_ITEM', response.data)
    }),
    refund: ({ commit }, { id, data }) => axiosAction('post', commit, {
        url: `/store/orders/${id}/refund`,
        data,
        thenContent: response => commit('SET_ITEM', response.data)
    }),
    createCartItem: ({ commit }, data) => axiosAction('post', commit, {
        url: '/store/cart-items',
        data
    }),
    downloadPdfLabel: ({ commit }, { itemId, fileName }) => axiosDownload(commit, {
        url: `/store/order-items/${itemId}/pdf-label`,
        fileName
    }),
    downloadPdfLayout: ({ commit }, { itemId, fileName }) => axiosDownload(commit, {
        url: `/store/order-items/${itemId}/pdf-layout`,
        fileName
    }),
    downloadPdfDetails: ({ commit }, { id, fileName }) => axiosDownload(commit, {
        url: `/store/orders/${id}/pdf-details`,
        fileName
    }),
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    setItemFields ({ commit }, payload) {
        commit('SET_ITEM_FIELDS', payload);
    },
    setProjectField ({ commit }, payload) {
        commit('SET_PROJECT_FIELD', payload);
    },
    setProjectAddedCostsField ({ commit }, payload) {
        commit('SET_PROJECT_ADDED_COSTS_FIELD', payload);
    },
    clearProjectFields ({ commit }) {
        commit('CLEAR_PROJECT_FIELDS');
    }
};

const getters = {
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
