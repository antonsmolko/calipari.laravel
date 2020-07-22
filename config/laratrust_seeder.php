<?php

/**
 * Models
 *
 * profile
 * users
 * images
 * categories
 * collections
 * orders
 * order-statuses
 * deliveries
 * settings
 * textures
 * pages
 * posts
 * roles
 */
return [
    'role_structure' => [
        'user' => [               // Don't move, dont't touch!!! DEFAULT_ROLE = 1
            'profile' => 'r,u'
        ],
        'admin' => [
            'users' => 'c,r,u,d',
            'profile' => 'r,u',
            'images' => 'c,r,u,d',
            'categories' => 'c,r,u,d',
            'collections' => 'c,r,u,d',
            'orders' => 'c,r,u,d',
            'order-statuses' => 'c,r,u,d',
            'deliveries' => 'c,r,u,d',
            'settings' => 'c,r,u,d',
            'textures' => 'c,r,u,d',
            'pages' => 'c,r,u,d',
            'posts' => 'c,r,u,d',
            'roles' => 'c,r,u,d'
        ],
        'super_admin' => [
            'users' => 'c,r,u,d',
            'profile' => 'r,u',
            'images' => 'c,r,u,d,x',
            'categories' => 'c,r,u,d',
            'collections' => 'c,r,u,d',
            'orders' => 'c,r,u,d',
            'order-statuses' => 'c,r,u,d',
            'deliveries' => 'c,r,u,d',
            'settings' => 'c,r,u,d',
            'textures' => 'c,r,u,d',
            'pages' => 'c,r,u,d',
            'posts' => 'c,r,u,d',
            'roles' => 'c,r,u,d'
        ],
        'content_manager' => [
            'profile' => 'r,u',
            'images' => 'c,r,u,d',
            'categories' => 'c,r,u,d',
            'collections' => 'c,r,u,d',
            'settings' => 'r',
            'textures' => 'c,r,u,d',
            'pages' => 'c,r,u,d',
            'posts' => 'c,r,u,d'
        ],
        'owner' => [
            'users' => 'c,r,u,d',
            'profile' => 'r,u',
            'images' => 'c,r,u,d,x',
            'categories' => 'c,r,u,d',
            'collections' => 'c,r,u,d',
            'settings' => 'r',
            'orders' => 'c,r,u,d',
            'order-statuses' => 'c,r,u,d',
            'deliveries' => 'c,r,u,d',
            'textures' => 'c,r,u,d',
            'pages' => 'c,r,u,d',
            'posts' => 'c,r,u,d',
            'roles' => 'c,r,u,d'
        ]
    ],
    'permission_structure' => [
//        'cru_user' => [
//            'profile' => 'c,r,u'
//        ]
    ],
    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete',
        'x' => 'destroy'
    ]
];
