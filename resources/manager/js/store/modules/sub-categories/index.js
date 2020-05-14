import { uniqueFieldEditMixin, uniqueFieldMixin } from "../../mixins/getters";

import { axiosAction } from "../../mixins/actions";

const state = {
    fields: {
        title: '',
        publish: '',
        description: '',
        hasImages: ''
    },
    item: '',
    items: [],
    itemsByType: {
        tags: [],
        owners: []
    }
};

const mutations = {
    UPDATE_ITEMS(state, payload) {
        state.items = payload;
    },
    UPDATE_ITEMS_BY_TYPE(state, payload) {
        state.itemsByType[payload.type] = payload.items;
    },
    UPDATE_ITEM(state, payload) {
        state.item = payload;
    },
    DELETE_ITEM(state, payload) {
        state.items = state.items.filter(item => item.id !== payload);
    },
    CHANGE_PUBLISH(state, payload) {
        state.items.forEach(item => {
            if(item.id === payload.id) {
                item.publish = payload.publish;
            }
        });
    },
    UPDATE_FIELD(state, payload) {
        state.fields[payload.field] = payload.value;
    },
    TOGGLE_PUBLISH_FIELD(state) {
        state.fields.publish = +!state.fields.publish;
    },
    CLEAR_FIELDS(state) {
        for (const field of Object.keys(state.fields)) {
            state.fields[field] = '';
        }
    },
    UPDATE_FIELDS(state, payload) {
        for (const field of Object.keys(state.fields)) {
            if (Object.hasOwnProperty.call(payload, field)) {
                state.fields[field] = payload[field];
            }
        }
    }
};

const actions = {
    getItems({ commit }, category_type) {
        return axiosAction('get', commit, {
            url: `/catalog/${category_type}`,
            thenContent: response => commit('UPDATE_ITEMS', response.data)
        })
    },
    getItemsWithType({ commit }, category_type) {
        return axiosAction('get', commit, {
            url: `/catalog/${category_type}`,
            thenContent: response => commit('UPDATE_ITEMS_BY_TYPE', {
                items: response.data,
                type: category_type
            })
        })
    },
    getItem({ commit }, payload) {
        return axiosAction('get', commit, {
            url: `/catalog/${payload.type}/${payload.id}`,
            thenContent: response => commit('UPDATE_FIELDS', response.data)
        })
    },
    getImages({ commit }, payload) {
        const form = new FormData();

        for(let field in payload.paginationData) {
            form.append(field, payload.paginationData[field]);
        }

        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}/${payload.id}/images`,
            data: form,
            thenContent: response => {
                context.commit('images/SET_PAGINATION', response.data, { root: true });
                payload.paginationData['query']
                    ? commit('SET_SEARCHED_DATA', response.data.data, { root: true })
                    : commit('images/UPDATE_ITEMS', response.data.data, { root: true });
            }
        })
    },
    getItemWithImages({ commit }, payload) {
        const form = new FormData();

        for(let field in payload.paginationData) {
            form.append(field, payload.paginationData[field]);
        }

        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}/${payload.id}/with-images`,
            data: form,
            thenContent: response => {
                commit('images/SET_PAGINATION', response.data['paginateData'], { root: true });
                commit('UPDATE_ITEM', response.data.item);
                commit('images/UPDATE_ITEMS', response.data['paginateData'].data, { root: true });
            }
        })
    },
    getExcludedImages({ commit }, payload) {
        const form = new FormData();

        for(let field in payload.paginationData) {
            form.append(field, payload.paginationData[field]);
        }

        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}/${payload.id}/images/excluded`,
            data: form,
            thenContent: response => {
                context.commit('images/SET_PAGINATION', response.data, { root: true });
                payload.paginationData['query']
                    ? commit('SET_SEARCHED_DATA', response.data.data, { root: true })
                    : commit('images/UPDATE_ITEMS', response.data.data, { root: true });
            }
        })
    },
    getItemWithExcludedImages({ commit }, payload) {
        const form = new FormData();

        for(let field in payload.paginationData) {
            form.append(field, payload.paginationData[field]);
        }

        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}/${payload.id}/with-excluded-images`,
            data: form,
            thenContent: response => {
                commit('images/SET_PAGINATION', response.data['paginateData'], { root: true });
                commit('UPDATE_ITEM', response.data.item);
                commit('images/UPDATE_ITEMS', response.data['paginateData'].data, { root: true });
            }
        })
    },
    publish({ commit }, payload) {
        return axiosAction('get', commit, {
            url: `/catalog/${payload.type}/${payload.id}/publish`,
            thenContent: response => commit('CHANGE_PUBLISH', response.data)
        })
    },
    store({ commit }, payload) {
        const form = new FormData();
        for(let field in payload.formData) {
            form.append(field, payload.formData[field]);
        }
        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}`,
            data: form
        })
    },
    update({ commit }, payload) {
        let form = new FormData();
        for(let field in payload.formData) {
            form.append(field, payload.formData[field]);
        }
        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}/${payload.id}`,
            data: form
        })
    },
    delete({ commit }, { payload, mode }) {
        return axiosAction('delete', commit, {
            url: `/catalog/${payload.type}/${payload.id}`,
            thenContent: response => {
                commit('DELETE_ITEM', payload.id);
                commit('DELETE_SEARCHED_DATA_ITEM', payload.id, { root: true });
            }
        })
    },
    uploadImages({ commit }, payload) {
        let form = new FormData();

        for(let file of payload.files) {
            form.append('images[]', file);
        }

        for(let field in payload.paginationData) {
            form.append(field, payload.paginationData[field]);
        }

        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}/${payload.id}/upload`,
            data: form,
            config: {
                onUploadProgress: (imageUpload) => {
                    commit(
                        'images/CHANGE_FILE_PROGRESS',
                        Math.round((imageUpload.loaded / imageUpload.total) * 100), {root: true});
                }
            },
            thenContent: response => {
                commit('images/CHANGE_FILE_PROGRESS', 0, { root: true });
                commit('images/SET_PAGINATION', response.data, { root: true });
                commit('images/UPDATE_ITEMS', response.data.data, { root: true });
            }
        })
    },
    removeImage({ commit }, payload) {
        const form = new FormData();

        for(let field in payload.paginationData) {
            form.append(field, payload.paginationData[field]);
        }

        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}/${payload.category_id}/images/${payload.image_id}/remove`,
            data: form,
            thenContent: response => {
                commit('images/SET_PAGINATION', response.data, { root: true });
                payload.paginationData['query']
                    ? commit('SET_SEARCHED_DATA', response.data.data, { root: true })
                    : commit('images/UPDATE_ITEMS', response.data.data, { root: true });
            }
        })
    },
    addSelectedImages({ commit }, payload) {
        return axiosAction('post', commit, {
            url: `/catalog/${payload.type}/${payload.id}/images/add`,
            data: payload.selected_images
        })
    },
    updateField({ commit }, payload) {
        commit('UPDATE_FIELD', payload);
    },
    togglePublishField({ commit }) {
        commit('TOGGLE_PUBLISH_FIELD');
    },
    clearFields({ commit }) {
        commit('CLEAR_FIELDS');
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
