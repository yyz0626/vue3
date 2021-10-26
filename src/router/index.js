import {
    createRouter,
    createWebHistory
} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'index',
            component: () => import('@/views/index.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home.vue')
        },
    ]
})

export default router;