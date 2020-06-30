export default {
    appUrl: 'https://manager.calipari.ru',
    baseUrl: '/api/manager',
    imagePlaceholder: '/img/image_placeholder.jpg',
    DEFAULT_ROLE: 'user',

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
    defaultPostType: { index: 'guide', title: 'Гид'}
}
