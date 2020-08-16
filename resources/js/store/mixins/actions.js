import { auth } from 'vue';
import axios from 'axios';
import config from '@/config';

export const axiosAction = (method, commit, { url, data = null, thenContent = null, options = null }) => {
    const fullUrl = `${config.baseUrl}${url}`;

    return axios[method](fullUrl, data, options)
        .then((response) => {
            if (thenContent) {
                return thenContent(response);
            }
            commit('CLEAR_ERRORS', null, { root: true });
        })
        .catch(error => {
            commit('UPDATE_ERRORS', error.response, { root: true });
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
            if (thenContent) {
                return thenContent(response);
            }
            commit('CLEAR_ERRORS', null, { root: true });
        })
        .catch(error => {
            commit('UPDATE_ERRORS', error.response, { root: true });
            throw error;
        });
}

export const axiosDownload = (commit, { url, fileName }) => {
    const fullUrl = `${config.baseUrl}${url}`;

    return axios.get(fullUrl, {
        responseType: 'blob', // important
    })
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            commit('CLEAR_ERRORS', null, { root: true });
        })
        .catch(error => {
            commit('UPDATE_ERRORS', error.response, { root: true });
            throw error;
        });
}
