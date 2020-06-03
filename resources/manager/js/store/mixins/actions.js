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

export const axiosPatch = ({ commit, data, url, thenContent }) => {
    const request = axios.create({
        method: 'PATCH',
        baseURL: config.baseUrl
    });

    return request.patch(url, data)
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
