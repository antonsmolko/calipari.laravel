import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'
/**
 * Authentication configuration, some of the options can be override in method calls
 */
const config = {
    auth: bearer,
    http: axios,
    router,
    tokenDefaultName: 'access_token',
    tokenStore: ['localStorage'],

    // API endpoints used in Vue Auth.
    // registerData: {
    //     url: '/api/auth/register',
    //     method: 'POST',
    //     redirect: '/login'
    // },
    loginData: {
        url: '/api/auth/login',
        method: 'POST',
        redirect: '',
        fetchUser: true
    },
    logoutData: {
        url: '/api/auth/logout',
        method: 'POST',
        redirect: '/manager/login',
        makeRequest: true
    },
    fetchData: {
        url: '/api/auth/me',
        method: 'POST',
        enabled: true
    },
    refreshData: {
        url: '/api/auth/refresh',
        method: 'POST',
        enabled: true,
        interval: 30
    }
}
export default config
