import { axiosAction } from "../../mixins/actions";

const state = {
    resourcesCount: null
};

const mutations = {
    SET_FIELD (state, { field, value }) {
        state[field] = value;
    },
    SET_FIELDS (state, payload) {
        for (const [field, value] of Object.entries(payload)) {
            if (Object.hasOwnProperty.call(state, field)) {
                state[field] = value
            }
        }
    }
};

const actions = {
    getResourcesCount ({ commit }, data) {
        return axiosAction('post', commit, {
            url: '/dashboard/resources-count',
            data,
            thenContent: response => commit('SET_FIELD', {
                field: 'resourcesCount',
                value: response.data
            })
        })
    }
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
