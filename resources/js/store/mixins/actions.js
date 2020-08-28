import { auth } from 'vue';
import axios from 'axios';
import config from '@/config';

export const axiosAction = (method, commit, { url, data = null, thenContent = null, options = null }) => {
    const fullUrl = `${config.baseUrl}${url}`;

    return axios[method](fullUrl, data, options)
        .then((response) => {
            commit('CLEAR_ERRORS', null, { root: true });

            if (thenContent) {
                return thenContent(response);
            }
        })
        .catch(error => {
            commit('UPDATE_ERRORS', error.response, { root: true });
            commit('CHANGE_FILE_PROGRESS', 0);
            throw error;
        });
}

export const axiosPut = ({ commit, data, url, thenContent, method = 'PUT' }) => {
    const request = axios.create({
        method,
        baseURL: config.baseUrl
    });

    return request.put(url, data, {
        headers: { Authorization: `Bearer ${auth.token()}` }
    })
        .then((response) => {
            commit('CLEAR_ERRORS', null, { root: true });

            if (thenContent) {
                return thenContent(response);
            }
        })
        .catch(error => {
            commit('UPDATE_ERRORS', error.response, { root: true });
            commit('SET_LOADING', false, { root: true });
            throw error;
        });
}

export const axiosPatch = ({ commit, data, url, thenContent, method = 'PATCH' }) => {
    const request = axios.create({
        method,
        baseURL: config.baseUrl
    });

    return request.patch(url, data, {
        headers: { Authorization: `Bearer ${auth.token()}` }
    })
        .then((response) => {
            commit('CLEAR_ERRORS', null, { root: true });

            if (thenContent) {
                return thenContent(response);
            }
        })
        .catch(error => {
            commit('UPDATE_ERRORS', error.response, { root: true });
            commit('SET_LOADING', false, { root: true });
            throw error;
        });
}

export const axiosWithDownload = (method, commit, { url, data = null, fileName, thenContent = null, options = {} }) => {
    const fullUrl = `${config.baseUrl}${url}`;

    return axios({
        url: fullUrl, //your url
        method,
        data,
        responseType: 'blob', // important
        ...options
    })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName); //or any other extension
            document.body.appendChild(link);
            link.click();

            commit('CLEAR_ERRORS', null, { root: true });

            if (thenContent) {
                return thenContent(response);
            }
        })
        .catch(error => {
            commit('UPDATE_ERRORS', error.response, { root: true });
            throw error;
        });
}
