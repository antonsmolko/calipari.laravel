import sortBy from 'lodash/sortBy'
import last from 'lodash/last'
import has from 'lodash/has'
import compact from 'lodash/compact'
import $config from '@/config'

export const getFormatPrice = price => typeof price === 'number' && price > 0
    ? price.toLocaleString('ru-Ru', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    })
    : price

export const getArticle = (id) => {
    return id.toString().padStart(5, 0)
}

export const getFormatDate = (milliseconds, delimiter = '.') => {
    const date = new Date();

    const formatDate = [
        date.getDay().toString().padStart(2, '0'),
        date.getMonth().toString().padStart(2, '0'),
        date.getFullYear()
    ];

    return formatDate.join(delimiter);
}

export const getCurrentStatus = (statuses) => {
    return last(sortBy(statuses, 'order'));
}

export const getPathMeta = (path) => ({
    auth: {
        roles: getGates(path),
        redirect: '/manager/errors/403',
        notFoundRedirect: { name: 'manager.errors.404' },
        forbiddenRedirect: '/manager/errors/403'
    }
})

export const getGates = (page) => {
    const gates = $config.gates;
    const rolesMap = $config.rolesMap;

    if (!has(gates, page)) {
        console.error(`Page "${page}" not found in gates`)
        throw Error;
    }

    return compact(gates[page]
        .split(',')
        .map((key) => rolesMap[key]))
}

export default {
    getFormatPrice,
    getArticle,
    getFormatDate,
    getCurrentStatus,
    getGates
}
