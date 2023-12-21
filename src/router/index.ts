import { createRouter, createWebHashHistory, RouteRecordRaw, } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/Home/index.vue')
    },
    {
        path: '/detail',
        component: () => import('../views/detail/index.vue')
    },
    {
        path: '/mine',
        component: () => import('../views/mine/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router

