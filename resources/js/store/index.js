import Vue from 'vue';
import Vuex from 'vuex';

import images from './modules/images';
import { getHash } from '@/helpers';

import artCollections from './modules/art-collections';
import categories from './modules/categories';
import colorCollections from './modules/color-collections';
import dashboard from './modules/dashboard';
import deliveries from './modules/deliveries';
import subCategories from './modules/sub-categories';
import textures from './modules/textures';
import users from './modules/users';
import roles from './modules/roles';
import permissions from './modules/permissions';
import settings from './modules/settings';
import settingGroups from './modules/setting-groups';
import orders from './modules/orders';
import orderStatuses from './modules/order-statuses';
import table from './modules/table';
import pages from './modules/pages';
import homePurchaseSteps from './modules/home/purchase-steps';
import homeInteriors from './modules/home/interiors';
import workExamples from './modules/work-examples';
import posts from './modules/posts';

Vue.use(Vuex);

import errors from '@/lib/Errors';

const state = {
    pageTitle: '',
    serverErrors: [],
    notifications: [],
    searchedData: [],
    searchQuery: '',
    loading: false
};

const mutations = {
    SET_PAGE_TITLE (state, payload) {
        state.pageTitle = payload;
    },
    UPDATE_ERRORS (state, payload) {
        state.serverErrors = [];
        const error = payload;
        switch (error.status) {
            case 404:
                state.serverErrors.push(errors.ERROR_NOTFOUND);
                break;
            case 400:
            case 401:
            case 403:
            case 422:
                if (error.data.errors) {
                    for (const errors of Object.values(error.data.errors)) {
                        errors.forEach(errorMessage => state.serverErrors.push(errorMessage));
                    }
                } else {
                    state.serverErrors.push(error.data.message);
                }
                break;
            default :
                state.serverErrors.push(errors.ERROR_DEFAULT);
        }
    },
    CLEAR_ERRORS (state) {
        state.serverErrors = [];
    },
    SET_SEARCHED_DATA (state, payload) {
        state.searchedData = payload;
    },
    DELETE_SEARCHED_DATA_ITEM (state, payload) {
        state.searchedData = state.searchedData.filter(item => item.id !== +payload);
    },
    SET_SEARCH_QUERY (state, payload) {
        state.searchQuery = payload.trim();
    },
    SET_LOADING (state, payload) {
        state.loading = Boolean(payload);
    },
    CHANGE_PUBLISH (state, payload) {
        state.searchedData.forEach(item => {
            if(item.id === payload.id) {
                return item.publish = payload.publish;
            }
        });
    },
    ADD_NOTIFICATION (state, { message, status, timeout = null }) {
        state.notifications.push({
            id: getHash(),
            message,
            status,
            timeout
        })
    },
    DELETE_NOTIFICATION (state, id) {
        state.notifications = state.notifications.filter(notification => notification.id !== id)
    }
};

const actions = {
    setPageTitle(context, payload) {
        context.commit('SET_PAGE_TITLE', payload);
    },
    setSearchedData(context, payload) {
        context.commit('SET_SEARCHED_DATA', payload);
    },
    setSearchQuery(context, payload) {
        context.commit('SET_SEARCH_QUERY', payload);
    },
    setLoading(context, payload) {
        context.commit('SET_LOADING', payload);
    },
    addNotification ({ commit }, payload) {
        commit('ADD_NOTIFICATION', payload)
    },
    deleteNotification ({ commit }, payload) {
        commit('DELETE_NOTIFICATION', payload)
    }
};

const getters = {
    pageTitle: state => state.pageTitle,
    serverErrors: state => state.serverErrors
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        artCollections,
        categories,
        colorCollections,
        images,
        dashboard,
        subCategories,
        users,
        roles,
        permissions,
        textures,
        settings,
        settingGroups,
        deliveries,
        orders,
        orderStatuses,
        table,
        pages,
        homePurchaseSteps,
        homeInteriors,
        workExamples,
        posts
    }
});
