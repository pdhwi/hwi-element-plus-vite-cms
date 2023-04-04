
import {createRouter,createWebHashHistory} from "vue-router";
import Layout from "~/components/layouts/layout.vue";
import Aaa from "~/components/aaa.vue";
import Bbb from "~/components/bbb.vue";
// 1. 定义路由组件.
// 也可以从其他文件导入

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
        //{ path: '/404', component: () => import('@/views/404'), hidden: true , meta: { lookFree: true } },
        //{ path: '/login',component: () => import('@/views/login/index'), hidden: true , meta: { lookFree: true } },
        {
            path: '',
            component: Layout,
            redirect: 'index',
            children: [
                {
                    path: '/index',
                    component: () => Aaa,
                    name: 'index',
                    meta: { title: '实时定位', icon: 'dashboard', noCache: true }
                },
                {
                    path: '/bbb',
                    component: () => Bbb,
                    name: 'bbb',
                    meta: { title: 'Bbb', icon: 'dashboard', noCache: true }
                },
            ]
        },
        //{ path: '*', redirect: '/404', hidden: true , meta: { lookFree: true } }
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
