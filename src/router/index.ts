
import {createRouter,createWebHashHistory} from "vue-router";

// 1. 定义路由组件.
// 也可以从其他文件导入

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
        { path: '/404', component: () => import('../views/hwiError.vue'), hidden: true , name: '404' , meta: { lookFree: true } },
        { path: '/login',component: () => import('../views/login/login.vue'), hidden: true ,name: 'login' , meta: { lookFree: true } },
        {
            path: '',
            component: () => import('~/components/layouts/layout.vue'),
            redirect: 'index',
            name: 'hwicms',
            children: [
                {
                    path: '/index',
                    component: () => import('~/components/hwiCms.vue')  ,
                    name: 'index',
                    meta: { title: '实时定位', icon: 'dashboard', noCache: true }
                },
                {
                    path: '/bbb',
                    component: () =>  import('~/components/systems/account.vue')  ,
                    name: 'bbb',
                    meta: { title: 'Bbb', icon: 'dashboard', noCache: true }
                },
                {
                    path: '/roles',
                    component: () => import('~/views/hwicms/system/roles.vue'),
                    name: 'roles',
                    meta: { title: 'roles', icon: 'dashboard', noCache: true }
                },
                {
                    path: '/permissions',
                    component: () => import('~/views/hwicms/system/permissions.vue'),
                    name: 'permissions',
                    meta: { title: 'permissions', icon: 'dashboard', noCache: true }
                },
                {
                    path: '/users',
                    component: () => import('~/views/hwicms/system/users.vue'),
                    name: 'users',
                    meta: { title: 'users', icon: 'dashboard', noCache: true }
                },
            ]
        },
        { path: "/:pathMath(.*)", redirect: '/404', hidden: true , meta: { lookFree: true } }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
