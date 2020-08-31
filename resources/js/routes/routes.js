import DashboardLayout from '@/pages/Dashboard/Layout/DashboardLayout.vue'
import Dashboard from '@/pages/Dashboard/Dashboard.vue'
import { getPathMeta } from "@/helpers"

/** Image pages */
const ImageList = resolve => {
    require.ensure(['@/pages/Dashboard/Images/ImageList.vue'], () => {
        resolve(require('@/pages/Dashboard/Images/ImageList.vue'))
    })
};
const ExcludedImageList = resolve => {
    require.ensure(['@/pages/Dashboard/Images/ExcludedImageList.vue'], () => {
        resolve(require('@/pages/Dashboard/Images/ExcludedImageList.vue'))
    })
};
const ImageEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Images/ImageEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Images/ImageEdit.vue'))
    })
};
const ImageTrashedList = resolve => {
    require.ensure(['@/pages/Dashboard/Images/ImageTrashedList.vue'], () => {
        resolve(require('@/pages/Dashboard/Images/ImageTrashedList.vue'))
    })
};
const FindDuplicates = resolve => {
    require.ensure(['@/pages/Dashboard/Images/FindDuplicates.vue'], () => {
        resolve(require('@/pages/Dashboard/Images/FindDuplicates.vue'))
    })
};

/** Category pages */
const CatalogPanel = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/CatalogPanel.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/CatalogPanel.vue'))
    })
};
const CategoryList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/Categories/CategoryList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/Categories/CategoryList.vue'))
    })
};
const CategoryCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/Categories/CategoryCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/Categories/CategoryCreate.vue'))
    })
};
const CategoryEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/Categories/CategoryEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/Categories/CategoryEdit.vue'))
    })
};

/** SubCategories */
const SubCategoryList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/SubCategories/SubCategoryList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/SubCategories/SubCategoryList.vue'))
    })
};
const SubCategoryCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/SubCategories/SubCategoryCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/SubCategories/SubCategoryCreate.vue'))
    })
};
const SubCategoryEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/SubCategories/SubCategoryEdit.vue'))
    })
};
const SubCategoryImageList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/SubCategories/ImageList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/SubCategories/ImageList.vue'))
    })
};
const SubCategoryExcludedImageList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/SubCategories/ExcludedImageList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/SubCategories/ExcludedImageList.vue'))
    })
};

/** Color Collections pages */
const ColorCollectionList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ColorCollections/ColorCollectionList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ColorCollections/ColorCollectionList.vue'))
    })
};
const ColorCollectionCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ColorCollections/ColorCollectionCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ColorCollections/ColorCollectionCreate.vue'))
    })
};
const ColorCollectionEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ColorCollections/ColorCollectionEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ColorCollections/ColorCollectionEdit.vue'))
    })
};
const ColorCollectionImageList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ColorCollections/ImageList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ColorCollections/ImageList.vue'))
    })
};

/** Art Collections pages */
const ArtCollectionList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ArtCollections/ArtCollectionList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ArtCollections/ArtCollectionList.vue'))
    })
};
const ArtCollectionCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ArtCollections/ArtCollectionCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ArtCollections/ArtCollectionCreate.vue'))
    })
};
const ArtCollectionEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ArtCollections/ArtCollectionEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ArtCollections/ArtCollectionEdit.vue'))
    })
};
const ArtCollectionImageList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ArtCollections/ImageList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ArtCollections/ImageList.vue'))
    })
};
const ArtCollectionExcludedImageList = resolve => {
    require.ensure(['@/pages/Dashboard/Catalog/ArtCollections/ExcludedImageList.vue'], () => {
        resolve(require('@/pages/Dashboard/Catalog/ArtCollections/ExcludedImageList.vue'))
    })
};

/** Textures */
const TextureList = resolve => {
    require.ensure(['@/pages/Dashboard/Textures/TextureList.vue'], () => {
        resolve(require('@/pages/Dashboard/Textures/TextureList.vue'))
    })
};
const TextureCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Textures/TextureCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Textures/TextureCreate.vue'))
    })
};
const TextureEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Textures/TextureEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Textures/TextureEdit.vue'))
    })
};

/** Users */
const UserList = resolve => {
    require.ensure(['@/pages/Dashboard/Users/UserList.vue'], () => {
        resolve(require('@/pages/Dashboard/Users/UserList.vue'))
    })
};
const UserCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Users/UserCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Users/UserCreate.vue'))
    })
};
const UserEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Users/UserEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Users/UserEdit.vue'))
    })
};

/** Roles */
const RoleList = resolve => {
    require.ensure(['@/pages/Dashboard/Roles/RoleList.vue'], () => {
        resolve(require('@/pages/Dashboard/Roles/RoleList.vue'))
    })
};
const RoleCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Roles/RoleCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Roles/RoleCreate.vue'))
    })
};
const RoleEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Roles/RoleEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Roles/RoleEdit.vue'))
    })
};

/** Permissions */
const PermissionList = resolve => {
    require.ensure(['@/pages/Dashboard/Permissions/PermissionList.vue'], () => {
        resolve(require('@/pages/Dashboard/Permissions/PermissionList.vue'))
    })
};
const PermissionCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Permissions/PermissionCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Permissions/PermissionCreate.vue'))
    })
};
const PermissionEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Permissions/PermissionEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Permissions/PermissionEdit.vue'))
    })
};

/** Settings */
const SettingList = resolve => {
    require.ensure(['@/pages/Dashboard/Settings/SettingList.vue'], () => {
        resolve(require('@/pages/Dashboard/Settings/SettingList.vue'))
    })
};
const SettingAdministrationList = resolve => {
    require.ensure(['@/pages/Dashboard/Settings/SettingAdministrationList.vue'], () => {
        resolve(require('@/pages/Dashboard/Settings/SettingAdministrationList.vue'))
    })
};
const SettingCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Settings/SettingCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Settings/SettingCreate.vue'))
    })
};
const SettingEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Settings/SettingEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Settings/SettingEdit.vue'))
    })
};
const SettingGroupCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Settings/SettingGroupCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Settings/SettingGroupCreate.vue'))
    })
};
const SettingGroupEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Settings/SettingGroupEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Settings/SettingGroupEdit.vue'))
    })
};

/** Store */
const StorePanel = resolve => {
    require.ensure(['@/pages/Dashboard/Store/StorePanel.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/StorePanel.vue'))
    })
};

/** Store Settings */
const StoreSettings = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Settings.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Settings.vue'))
    })
};

/** Deliveries */
const DeliveryList = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Delivery/DeliveryList.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Delivery/DeliveryList.vue'))
    })
};
const DeliveryCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Delivery/DeliveryCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Delivery/DeliveryCreate.vue'))
    })
};
const DeliveryEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Delivery/DeliveryEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Delivery/DeliveryEdit.vue'))
    })
};

/** Pickups */
const PickupCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Delivery/PickupCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Delivery/PickupCreate.vue'))
    })
};
const PickupEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Delivery/PickupEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Delivery/PickupEdit.vue'))
    })
};

/** OrderStatuses */
const OrderStatusList = resolve => {
    require.ensure(['@/pages/Dashboard/Store/OrderStatuses/OrderStatusList.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/OrderStatuses/OrderStatusList.vue'))
    })
};
const OrderStatusCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Store/OrderStatuses/OrderStatusCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/OrderStatuses/OrderStatusCreate.vue'))
    })
};
const OrderStatusEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Store/OrderStatuses/OrderStatusEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/OrderStatuses/OrderStatusEdit.vue'))
    })
};

/** Orders */
const OrderList = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Orders/OrderList.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Orders/OrderList.vue'))
    })
};
const Order = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Orders/Order.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Orders/Order.vue'))
    })
};

const OrderRefund = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Orders/OrderRefund.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Orders/OrderRefund.vue'))
    })
};

const ProjectCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Orders/ProjectCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Orders/ProjectCreate.vue'))
    })
};

/** Reviews */
const ReviewList = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Reviews/ReviewList.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Reviews/ReviewList.vue'))
    })
};
const Review = resolve => {
    require.ensure(['@/pages/Dashboard/Store/Reviews/Review.vue'], () => {
        resolve(require('@/pages/Dashboard/Store/Reviews/Review.vue'))
    })
};

/** Pages */
const PagesPanel = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/PagesPanel.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/PagesPanel.vue'))
    })
};
const HomePage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Home'], () => {
        resolve(require('@/pages/Dashboard/Pages/Home'))
    })
};
const PurchaseStepCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Home/PurchaseSteps/PurchaseStepCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Home/PurchaseSteps/PurchaseStepCreate.vue'))
    })
};
const PurchaseStepEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Home/PurchaseSteps/PurchaseStepEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Home/PurchaseSteps/PurchaseStepEdit.vue'))
    })
};
const InteriorSlideCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Home/Interiors/SlideCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Home/Interiors/SlideCreate.vue'))
    })
};
const InteriorSlideEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Home/Interiors/SlideEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Home/Interiors/SlideEdit.vue'))
    })
};

const PortfolioPage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Portfolio'], () => {
        resolve(require('@/pages/Dashboard/Pages/Portfolio'))
    })
};
const WorkExampleCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleCreate.vue'))
    })
};
const WorkExampleEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Portfolio/WorkExamples/WorkExampleEdit.vue'))
    })
};
const WorkExampleImageList = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Portfolio/WorkExamples/ImageList.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Portfolio/WorkExamples/ImageList.vue'))
    })
};
const BlogPage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Blog'], () => {
        resolve(require('@/pages/Dashboard/Pages/Blog'))
    })
};
const PostCreate = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Blog/Posts/PostCreate.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Blog/Posts/PostCreate.vue'))
    })
};
const PostEdit = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Blog/Posts/PostEdit.vue'], () => {
        resolve(require('@/pages/Dashboard/Pages/Blog/Posts/PostEdit.vue'))
    })
};

const TexturesPage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Textures'], () => {
        resolve(require('@/pages/Dashboard/Pages/Textures'))
    })
};

const ContactsPage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Contacts'], () => {
        resolve(require('@/pages/Dashboard/Pages/Contacts'))
    })
};

const PolicyPage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Policy'], () => {
        resolve(require('@/pages/Dashboard/Pages/Policy'))
    })
};

const ContractOfferPage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/ContractOffer'], () => {
        resolve(require('@/pages/Dashboard/Pages/ContractOffer'))
    })
};

const CatalogPage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/Catalog'], () => {
        resolve(require('@/pages/Dashboard/Pages/Catalog'))
    })
};

const ShippingPaymentPage = resolve => {
    require.ensure(['@/pages/Dashboard/Pages/ShippingPayment'], () => {
        resolve(require('@/pages/Dashboard/Pages/ShippingPayment'))
    })
};

/** Lock Pages */

const LockLayout = resolve => {
    require.ensure(['@/pages/Lock/Layout/LockLayout.vue'], () => {
        resolve(require('@/pages/Lock/Layout/LockLayout.vue'))
    })
};

/** Login page */
const Login = resolve => {
    require.ensure(['@/pages/Lock/Login.vue'], () => {
        resolve(require('@/pages/Lock/Login.vue'))
    })
};

/** Error pages */
const Error404 = resolve => {
    require.ensure(['@/pages/Lock/Errors/404.vue'], () => {
        resolve(require('@/pages/Lock/Errors/404.vue'))
    })
};
const Error403 = resolve => {
    require.ensure(['@/pages/Lock/Errors/403.vue'], () => {
        resolve(require('@/pages/Lock/Errors/403.vue'))
    })
};

const cmsDashboardPage = [
    {
        path: 'dashboard',
        name: 'cms.dashboard',
        components: { default: Dashboard },
        meta: getPathMeta('dashboard')
    }
];
const cmsImagePages = [
    {
        path: 'images',
        name: 'cms.images',
        component: ImageList,
        props: true,
        beforeEnter(to, from, next) {
            to.params.category_type = 'images';
            next();
        },
        meta: getPathMeta('images')
    },
    {
        path: 'images/trashed',
        name: 'cms.images.trashed',
        component: ImageTrashedList,
        meta: getPathMeta('images')
    },
    {
        path: ':category_type/:id/find-duplicates',
        name: 'cms.images.find-duplicates',
        component: FindDuplicates,
        props: true,
        meta: getPathMeta('images')
    },
    {
        path: 'images/:id',
        name: 'cms.images.edit',
        component: ImageEdit,
        props: true,
        meta: getPathMeta('images')
    }
];
const cmsCatalogPanel = [
    {
        path: 'catalog',
        name: 'cms.catalog',
        component: CatalogPanel,
        meta: getPathMeta('catalog')
    }
];
const cmsTexturesPages = [
    {
        path: 'textures',
        name: 'cms.textures',
        component: TextureList,
        meta: getPathMeta('textures')
    },
    {
        path: 'textures/create',
        name: 'cms.textures.create',
        component: TextureCreate,
        meta: getPathMeta('textures')
    },
    {
        path: 'textures/:id',
        name: 'cms.textures.edit',
        component: TextureEdit,
        props: true,
        meta: getPathMeta('textures')
    }
];
const cmsSettingsPages = [
    {
        path: 'settings',
        name: 'cms.settings',
        component: SettingList,
        meta: getPathMeta('settings')
    },
    {
        path: 'settings/administration',
        name: 'cms.settings.administration',
        component: SettingAdministrationList,
        meta: getPathMeta('settings/administration')
    },
    {
        path: 'settings/create',
        name: 'cms.settings.create',
        component: SettingCreate,
        meta: getPathMeta('settings')
    },
    {
        path: 'settings/:id',
        name: 'cms.settings.edit',
        component: SettingEdit,
        props: true,
        meta: getPathMeta('settings')
    },
    {
        path: 'settings/groups/create',
        name: 'cms.settings.groups.create',
        component: SettingGroupCreate,
        meta: getPathMeta('settings')
    },
    {
        path: 'settings/groups/:id',
        name: 'cms.settings.groups.edit',
        component: SettingGroupEdit,
        props: true,
        meta: getPathMeta('settings')
    }
];
const cmsUsersPages = [
    {
        path: 'users',
        name: 'cms.users',
        component: UserList,
        meta: getPathMeta('users')
    },
    {
        path: 'users/create',
        name: 'cms.users.create',
        component: UserCreate,
        props: true,
        meta: getPathMeta('users')
    },
    {
        path: 'users/:id',
        name: 'cms.users.edit',
        component: UserEdit,
        props: true,
        meta: getPathMeta('users')
    }
];
const cmsRolesPages = [
    {
        path: 'roles/',
        name: 'cms.roles',
        component: RoleList,
        meta: getPathMeta('roles')
    },
    {
        path: 'roles/create',
        name: 'cms.roles.create',
        component: RoleCreate,
        props: true,
        meta: getPathMeta('roles')
    },
    {
        path: 'roles/:id',
        name: 'cms.roles.edit',
        component: RoleEdit,
        props: true,
        meta: getPathMeta('roles')
    }
];
const cmsPermissionsPages = [
    {
        path: 'permissions/',
        name: 'cms.permissions',
        component: PermissionList,
        meta: getPathMeta('permissions')
    },
    {
        path: 'permissions/create',
        name: 'cms.permissions.create',
        component: PermissionCreate,
        props: true,
        meta: getPathMeta('permissions')
    },
    {
        path: 'permissions/:id',
        name: 'cms.permissions.edit',
        component: PermissionEdit,
        props: true,
        meta: getPathMeta('permissions')
    }
];

const cmsStorePanel = [
    {
        path: 'store',
        name: 'cms.store',
        component: StorePanel,
        meta: getPathMeta('store')
    }
];

const cmsMenuPagesPanel = [
    {
        path: 'pages',
        name: 'cms.pages',
        component: PagesPanel,
        meta: getPathMeta('pages')
    }
];

const cmsPages = {
    path: '/cms',
    component: DashboardLayout,
    redirect: '/cms/dashboard',
    meta: getPathMeta('dashboard'),
    children: [
        ...cmsDashboardPage,
        ...cmsImagePages,
        ...cmsCatalogPanel,
        ...cmsTexturesPages,
        ...cmsSettingsPages,
        ...cmsUsersPages,
        ...cmsRolesPages,
        ...cmsPermissionsPages,
        ...cmsStorePanel,
        ...cmsMenuPagesPanel
    ]
};

const cmsCategoriesPages = {
    path: '/cms/catalog/categories',
    component: DashboardLayout,
    meta: getPathMeta('catalog'),
    children: [
        {
            path: ':category_type',
            name: 'cms.catalog.categories.list',
            component: CategoryList,
            props: true
        },
        {
            path: ':category_type/create',
            name: 'cms.catalog.categories.create',
            component: CategoryCreate,
            props: true
        },
        {
            path: ':category_type/:id',
            name: 'cms.catalog.categories.edit',
            component: CategoryEdit,
            props: true
        },
        {
            path: ':category_type/:id/images',
            name: 'cms.catalog.categories.images',
            component: ImageList,
            props: true
        },
        {
            path: ':category_type/:id/images/excluded',
            name: 'cms.catalog.categories.images.excluded',
            component: ExcludedImageList,
            props: true
        }
    ]
};

const cmsSubCategoriesPages = {
    path: '/cms/catalog/subcategories',
    component: DashboardLayout,
    meta: getPathMeta('catalog'),
    children: [
        {
            path: ':category_type',
            name: 'cms.catalog.subcategories.list',
            component: SubCategoryList,
            props: true
        },
        {
            path: ':category_type/create',
            name: 'cms.catalog.subcategories.create',
            component: SubCategoryCreate,
            props: true
        },
        {
            path: ':category_type/:id',
            name: 'cms.catalog.subcategories.edit',
            component: SubCategoryEdit,
            props: true
        },
        {
            path: ':category_type/:id/images',
            name: 'cms.catalog.subcategories.images',
            component: SubCategoryImageList,
            props: true
        },
        {
            path: ':category_type/:id/images/excluded',
            name: 'cms.catalog.subcategories.images.excluded',
            component: SubCategoryExcludedImageList,
            props: true
        }
    ]
};

const cmsColorCollectionsPages = {
    path: '/cms/catalog',
    component: DashboardLayout,
    meta: getPathMeta('catalog'),
    children: [
        {
            path: 'color-collections',
            name: 'cms.catalog.color-collections',
            component: ColorCollectionList,
            props: true
        },
        {
            path: 'color-collections/create',
            name: 'cms.catalog.color-collections.create',
            component: ColorCollectionCreate
        },
        {
            path: 'color-collections/:id',
            name: 'cms.catalog.color-collections.edit',
            component: ColorCollectionEdit,
            props: true
        },
        {
            path: 'color-collections/:id/images',
            name: 'cms.catalog.color-collections.images',
            component: ColorCollectionImageList,
            props: true
        }
    ]
};

const cmsArtCollectionsPages = {
    path: '/cms/catalog',
    component: DashboardLayout,
    meta: getPathMeta('catalog'),
    children: [
        {
            path: 'art-collections',
            name: 'cms.catalog.art-collections',
            component: ArtCollectionList,
            props: true
        },
        {
            path: 'art-collections/create',
            name: 'cms.catalog.art-collections.create',
            component: ArtCollectionCreate
        },
        {
            path: 'art-collections/:id',
            name: 'cms.catalog.art-collections.edit',
            component: ArtCollectionEdit,
            props: true
        },
        {
            path: 'art-collections/:id/images',
            name: 'cms.catalog.art-collections.images',
            component: ArtCollectionImageList,
            props: true
        },
        {
            path: 'art-collections/:id/images/excluded',
            name: 'cms.catalog.art-collections.images.excluded',
            component: ArtCollectionExcludedImageList,
            props: true
        }
    ]
};

const cmsStoreSettingsPage = {
    path: '/cms/store',
    component: DashboardLayout,
    children: [
        {
            path: 'settings',
            name: 'cms.store.settings',
            component: StoreSettings,
            meta: getPathMeta('store-settings')
        }
    ]
};

const cmsDeliveriesPages = {
    path: '/cms/store',
    component: DashboardLayout,
    children: [
        {
            path: 'deliveries',
            name: 'cms.store.deliveries',
            component: DeliveryList,
            meta: getPathMeta('deliveries')
        },
        {
            path: 'deliveries/create',
            name: 'cms.store.deliveries.create',
            component: DeliveryCreate,
            meta: getPathMeta('deliveries')
        },
        {
            path: 'deliveries/:id',
            name: 'cms.store.deliveries.edit',
            component: DeliveryEdit,
            props: true,
            meta: getPathMeta('deliveries')
        },
        {
            path: 'pickups/create',
            name: 'cms.store.pickups.create',
            component: PickupCreate,
            meta: getPathMeta('deliveries')
        },
        {
            path: 'pickups/:id',
            name: 'cms.store.pickups.edit',
            component: PickupEdit,
            props: true,
            meta: getPathMeta('deliveries')
        }
    ]
};

const cmsOrderStatusPages = {
    path: '/cms/store',
    component: DashboardLayout,
    children: [
        {
            path: 'order-statuses',
            name: 'cms.store.orderStatuses',
            component: OrderStatusList,
            meta: getPathMeta('order-statuses'),
        },
        {
            path: 'order-statuses/create',
            name: 'cms.store.orderStatuses.create',
            component: OrderStatusCreate,
            meta: getPathMeta('order-statuses'),
        },
        {
            path: 'order-statuses/:id',
            name: 'cms.store.orderStatuses.edit',
            component: OrderStatusEdit,
            props: true,
            meta: getPathMeta('order-statuses')
        }
    ]
};

const cmsOrderPages = {
    path: '/cms/store',
    component: DashboardLayout,
    meta: {
        auth: true
    },
    children: [
        {
            path: 'orders',
            name: 'cms.store.orders',
            component: OrderList,
            meta: getPathMeta('orders')
        },
        {
            path: 'orders/:id',
            name: 'cms.store.orders.order',
            component: Order,
            props: true,
            meta: getPathMeta('orders')
        },
        {
            path: 'orders/:id/refund',
            name: 'cms.store.orders.order.refund',
            component: OrderRefund,
            props: true,
            meta: getPathMeta('order-refund')
        }
    ]
};

const cmsReviewsPages = {
    path: '/cms/store',
    component: DashboardLayout,
    meta: {
        auth: true
    },
    children: [
        {
            path: 'reviews',
            name: 'cms.store.reviews',
            component: ReviewList,
            meta: getPathMeta('reviews')
        },
        {
            path: 'reviews/:id',
            name: 'cms.store.reviews.revies',
            component: Review,
            props: true,
            meta: getPathMeta('reviews')
        }
    ]
};

const cmsCartItemsPages = {
    path: '/cms/store',
        component: DashboardLayout,
        meta: {
        auth: true
    },
    children: [
        {
            path: 'projects/create/:imageId',
            name: 'cms.store.projects.create',
            component: ProjectCreate,
            props: true,
            meta: getPathMeta('projects')
        }
    ]
}

const cmsMenuPages = {
    path: '/cms/pages',
    component: DashboardLayout,
    meta: getPathMeta('pages'),
    children: [
        {
            path: 'home',
            name: 'cms.pages.home',
            component: HomePage
        },
        {
            path: 'home/purchase-steps/create',
            name: 'cms.pages.home.purchaseSteps.create',
            component: PurchaseStepCreate
        },
        {
            path: 'home/purchase-steps/:id',
            name: 'cms.pages.home.purchaseSteps.edit',
            component: PurchaseStepEdit,
            props: true
        },
        {
            path: 'home/interiors/:interiorId/slides/create',
            name: 'cms.pages.home.interiorSlides.create',
            component: InteriorSlideCreate,
            props: true
        },
        {
            path: 'home/interiors/slides/:id',
            name: 'cms.pages.home.interiorSlides.edit',
            component: InteriorSlideEdit,
            props: true
        },
        {
            path: 'portfolio',
            name: 'cms.pages.portfolio',
            component: PortfolioPage
        },
        {
            path: 'portfolio/work-examples/create',
            name: 'cms.pages.portfolio.workExamples.create',
            component: WorkExampleCreate
        },
        {
            path: 'portfolio/work-examples/:id',
            name: 'cms.pages.portfolio.workExamples.edit',
            component: WorkExampleEdit,
            props: true
        },
        {
            path: 'portfolio/work-examples/:id/images',
            name: 'cms.pages.portfolio.workExamples.images',
            component: WorkExampleImageList,
            props: true
        },
        {
            path: 'blog',
            name: 'cms.pages.blog',
            component: BlogPage
        },
        {
            path: 'blog/posts/create',
            name: 'cms.pages.blog.posts.create',
            component: PostCreate
        },
        {
            path: 'blog/posts/:id/edit',
            name: 'cms.pages.blog.posts.edit',
            component: PostEdit,
            props: true
        },
        {
            path: 'textures',
            name: 'cms.pages.textures',
            component: TexturesPage
        },
        {
            path: 'contacts',
            name: 'cms.pages.contacts',
            component: ContactsPage
        },
        {
            path: 'catalog',
            name: 'cms.pages.catalog',
            component: CatalogPage
        },
        {
            path: 'policy',
            name: 'cms.pages.policy',
            component: PolicyPage
        },
        {
            path: 'contract-offer',
            name: 'cms.pages.contract-offer',
            component: ContractOfferPage
        },
        {
            path: 'shipping-payment',
            name: 'cms.pages.shipping-payment',
            component: ShippingPaymentPage
        }
    ]
};

const cmsLockPages = {
    path: '/cms',
    component: LockLayout,
    children: [
        {
            path: 'login',
            name: 'cms.login',
            component: Login,
            meta: {
                auth: false,
                redirect: '/cms/dashboard',
                notFoundRedirect: { name: 'cms.errors.404' },
                forbiddenRedirect: '/cms/errors/403'
            }
        },
        {
            path: 'errors/404',
            name: 'cms.errors.404',
            component: Error404,
            meta: getPathMeta(404)
        },
        {
            path: 'errors/403',
            name: 'cms.errors.403',
            component: Error403
        }
    ]
};

const routes = [
    cmsPages,
    cmsCategoriesPages,
    cmsSubCategoriesPages,
    cmsColorCollectionsPages,
    cmsArtCollectionsPages,
    cmsStoreSettingsPage,
    cmsDeliveriesPages,
    cmsOrderPages,
    cmsOrderStatusPages,
    cmsReviewsPages,
    cmsCartItemsPages,
    cmsMenuPages,
    cmsLockPages,
    {
        path: '*',
        redirect: {
            name: 'cms.errors.404'
        }
    }
];

export default routes
