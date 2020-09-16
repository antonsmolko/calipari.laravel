import sortBy from 'lodash/sortBy';
import last from 'lodash/last';
import has from 'lodash/has';
import compact from 'lodash/compact';
import crc32 from 'crc-32';
import $config from '@/config';

export const getFormatPrice = price => typeof price === 'number' && price > 0
    ? price.toLocaleString('ru-Ru', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    })
    : price;

export const getArticle = (id) => {
    return id.toString().padStart(5, 0);
};

export const getFormatDate = (milliseconds, delimiter = '.') => {
    const date = new Date();

    const formatDate = [
        date.getDay().toString().padStart(2, '0'),
        date.getMonth().toString().padStart(2, '0'),
        date.getFullYear()
    ];

    return formatDate.join(delimiter);
};

export const getCurrentStatus = (statuses) => {
    return last(sortBy(statuses, 'order'));
};

export const getPathMeta = (path) => ({
    auth: {
        roles: getGates(path),
        redirect: '/cms/errors/403',
        notFoundRedirect: { name: 'cms.errors.404' },
        forbiddenRedirect: '/cms/errors/403'
    }
});

export const getGates = (page) => {
    const gates = $config.gates;
    const rolesMap = $config.rolesMap;

    if (!has(gates, page)) {
        console.error(`Page "${page}" not found in gates`);
        throw Error;
    }

    return compact(gates[page]
        .split(',')
        .map((key) => rolesMap[key]));
};

const getS3ImageRequest = ({ name, fit, width, height, grayscale }) => {
    const key = `${name.slice(0, 1)}/${name.slice(0, 3)}/${name}`;

    const request = {
        bucket: $config.awsBucket,
        key,
        edits: {
            resize: {
                fit: 'cover'
            }
        }
    };

    if (width || height) {
        request.edits.resize.fit = fit;

        if (width) {
            request.edits.resize.width = width;
        }

        if (height) {
            request.edits.resize.height = height;
        }
    }

    request.edits.grayscale = grayscale;

    return request;
};

export const getS3ImageUrl = ({ name, fit = 'cover', width = null, height = null, grayscale = false }) => {
    if (!name) {
        return '';
    }

    const request = getS3ImageRequest({ name, fit, width, height, grayscale });
    const encodeRequest = btoa(JSON.stringify(request));

    return `${$config.s3ImageEndpoint}/${encodeRequest}`;
};

export const getHash = () => {
    const date = new Date();

    return Math.abs(crc32.str(`${date.getTime()}|${Math.round(Math.random() * 1000)}`));
};

export const isEqualImages = (object, other) => object.size === other.size && object.name === other.name;

// export const dataURItoBlob = (dataURI) => {
//     const byteString = atob(dataURI.split(',')[1])
//
//     const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
//
//     const ab = new ArrayBuffer(byteString.length)
//     const ia = new Uint8Array(ab)
//     for (let i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i)
//     }
//
//     return new Blob([ab], { type: mimeString })
// }

export default {
    getFormatPrice,
    getArticle,
    getFormatDate,
    getCurrentStatus,
    getGates,
    getHash,
    isEqualImages
}
