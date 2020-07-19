import { axiosAction, axiosPatch } from "../../mixins/actions";

const state = {
    fields: {
        image_id: '',
        image: '',
        image_path: '',
        order: ''
    },
    items: []
};

const mutations = {
    SET_ITEMS (state, payload) {
        state.items = payload;
    },
    DELETE_ITEM_SLIDE (state, { interiorId, slideId}) {
        state.items = state.items.map((item) => {
            if (item.id === interiorId) {
                item.slides = item.slides.filter((slide) => slide.id !== slideId);
            }
            return item;
        })
    },
    SET_ITEM_FIELD (state, { field, value }) {
        state.fields[field] = value;
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
    },
    UPDATE_ITEM_SLIDES (state, { id, slides }) {
        state.items = state.items.map((item) => {
            if (item.id === id) {
                item.slides = slides;
            }

            return item;
        })
    }
};

const actions = {
    getInteriors ({ commit }) {
        return axiosAction('get', commit, {
            url: '/home-interiors',
            thenContent: response => commit('SET_ITEMS', response.data)
        })
    },
    getInteriorSlides ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/home-interiors/${id}/slides`,
            thenContent: response => commit('UPDATE_ITEM_SLIDES', { id, slides: response.data })
        })
    },
    updateInteriorOrder ({ commit, dispatch }, { id, data }) {
        return axiosPatch({
            url: `/home-interiors/${id}`,
            commit,
            data,
            thenContent: response => dispatch('getInteriors')
        })
    },
    updateInteriorSlideOrder ({ commit, dispatch }, { interiorId, id, data }) {
        return axiosPatch({
            url: `/home-interior-slides/${id}`,
            commit,
            data,
            thenContent: response => dispatch('getInteriorSlides', interiorId)
        })
    },
    getItem ({ commit }, id) {
        return axiosAction('get', commit, {
            url: `/home-interior-slides/${id}`,
            thenContent: response => commit('SET_ITEM_FIELDS', response.data)
        })
    },
    store ({ commit }, payload) {
        const data = new FormData();
        for (const [field, value] of Object.entries(payload)) {
            data.append(field, value);
        }
        return axiosAction('post', commit, {
            url: '/home-interior-slides',
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
            url: `/home-interior-slides/${id}`,
            data
        })
    },
    delete ({ commit }, { payload, tableMode = false }) {
        return axiosAction('delete', commit, {
            url: `/home-interior-slides/${payload.slideId}`,
            thenContent: response => {
                if (tableMode) {
                    commit('DELETE_ITEM_SLIDE', payload)
                }
            }
        })
    },
    setItemField ({ commit }, payload) {
        commit('SET_ITEM_FIELD', payload);
    },
    clearItemFields ({ commit }) {
        commit('CLEAR_ITEM_FIELDS');
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
