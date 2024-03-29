const isProd = process.env.NODE_ENV === 'production'

const appUrl = isProd ? process.env.MIX_API_URL : 'https://manager.local.calipari.ru/api';
const baseUrl = isProd ? process.env.MIX_BASE_URL : '/api/cms';
    const imageProvider = isProd ? process.env.MIX_IMAGE_PROVIDER : 's3'; // 'local', 's3'
const localImageEndpoint = isProd ? process.env.MIX_LOCAL_IMAGE_ENDPOINT : '/api/image';
const s3ImageEndpoint = isProd ? process.env.MIX_S3_ENDPOINT : 'https://d38w12trhxpmo3.cloudfront.net'
const awsBucket = isProd ? process.env.AWS_BUCKET : 'dev.calipari.frames'


export default {
    appUrl,
    baseUrl,
    imagePlaceholder: '/img/image_placeholder.jpg',
    imageProvider,
    localImageEndpoint,
    s3ImageEndpoint,
    awsBucket,

    ALIAS_REGEXP: /^([a-z0-9]+[-]?)+[a-z0-9]$/,
    ARTICLE_REGEXP: /^([a-zA-Z0-9]+[-]?)+[a-zA-Z0-9]$/,
    SNAKE_CASE_REGEXP: /^([a-z0-9]+[_]?)+[a-z0-9]$/,

    pagesIds: {
        home: 1,
        catalog: 2,
        textures: 3,
        contacts: 4,
        portfolio: 5,
        blog: 6,
        policy: 7,
        contractOffer: 8,
        shippingPayment: 9,
        sales: 10,
        reviews: 11
    },

    postTypes: [
        { index: 'guide', title: 'Гид' },
        { index: 'news', title: 'Новости' },
        { index: 'stocks', title: 'Акции' },
        { index: 'events', title: 'События' }
    ],
    defaultPostType: { index: 'guide', title: 'Гид'},

    images: {
      maxFileSize: 30 // 30MB
    },

    /** Auth */
    DEFAULT_ROLE: 'user',

    rolesMap: {
        s: 'super_admin',
        a: 'admin',
        o: 'owner',
        m: 'content_manager',
        u: 'user'
    },

    gates: {
        404: 's,a,o,m',
        catalog: 's,a,o,m',
        dashboard: 's,a,o,m',
        deliveries: 's,a,o',
        images: 's,a,o,m',
        'image-destroy': 's,a,o',
        orders: 's,a,o',
        'order-delete': 's,o',
        'order-refund': 's,o',
        'order-statuses': 's,a,o',
        pages: 's,a,o,m',
        permissions: 's',
        projects: 's,a,o',
        reviews: 's,a,o',
        'reviews-delete': 's,o',
        roles: 's,a,o',
        sales: 's,a,o,m',
        settings: 's,a,o,m',
        'settings/administration': 's,a',
        store: 's,a,o',
        'store-settings': 's,a,o',
        textures: 's,a,o,m',
        users: 's,a,o',
        'user-delete': 's,o',
    },

    addedCosts: {
        imageProcessing: 'Обработка изображения',
        imageSearch: 'Поиск изображения',
        imageCosts: 'Покупка изображения'
    }
}
