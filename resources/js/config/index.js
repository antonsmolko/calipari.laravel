export default {
    appUrl: process.env.VUE_APP_API_URL,
    baseUrl: process.env.VUE_APP_BASE_URL,
    imagePlaceholder: '/img/image_placeholder.jpg',
    IMAGE_PROVIDER: process.env.VUE_APP_IMAGE_PROVIDER, // 'local', 's3',
    LOCAL_IMAGE_API_ENDPOINT: `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_LOCAL_IMAGE_API_ENDPOINT}`,
    S3_IMAGE_API_ENDPOINT: process.env.VUE_APP_S3_ENDPOINT,

    ALIAS_REGEXP: /^([a-z0-9]+[-]?)+[a-z0-9]$/,

    pagesIds: {
        home: 1,
        catalog: 2,
        textures: 3,
        contacts: 4,
        portfolio: 5,
        blog: 6,
        policy: 7,
        contractOffer: 8,
        shippingPayment: 9
    },

    postTypes: [
        { index: 'guide', title: 'Гид' },
        { index: 'news', title: 'Новости' },
        { index: 'stocks', title: 'Акции' },
        { index: 'events', title: 'События' }
    ],
    defaultPostType: { index: 'guide', title: 'Гид'},

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
        'order-statuses': 's,a,o',
        pages: 's,a,o,m',
        permissions: 's',
        roles: 's,a,o',
        settings: 's,a,o,m',
        'settings/administration': 's,a',
        store: 's,a,o',
        textures: 's,a,o,m',
        users: 's,a,o',
        'user-delete': 's,o'
    }
}
