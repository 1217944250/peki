import { createRouter, createWebHashHistory, RouteRecordRaw, } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        alias: '/Home',
        component: () => import('../views/Home/index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail/index.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine/index.vue')
    }, {
        path: '/:pathMatch(.*)*',
        name: 'Notfound',
        component: () => import('@/components/404/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router

