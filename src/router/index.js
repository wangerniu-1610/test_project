import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    // 一级路由         没有登陆会直接跳到首页
    {
    path: '/',
    redirect:'/home'
    },
    //像登录直接跳到登录页进行登录
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    //登陆成功进入首页
    {
        path: '/home',
        name :'home',
        component: () => import('../views/home/index.vue'),
        //二级路由
        children:[
            {
                path: '/index',//首页展示的内容跳转的页面
                name :'index',
                component: () => import('../views/home/index/index.vue')
            },
            {
                path: '/stats',//数据统计
                name :'stats',
                component: () => import('../views/home/stats/index.vue')
            },
            {
                path: '/wms',//信息管理
                name :'wms',
                component: () => import('../views/home/wms/index.vue'),
                //信息管理页中的子集
                children:[
                    {
                        path: '/wms/list',//列表展示
                        name :'wmsList',
                        component: () => import('../views/home/wms/list.vue')
                    }
                ]
            },
            {
                path: '/user',//用户管理
                name :'user',
                component: () => import('../views/home/user/index.vue'),
                children:[
                    {
                        path: '/user/statistics',//用户统计
                        name :'userStatistics',
                        component: () => import('../views/home/user/statistics.vue')
                    },
                    {
                        path: '/user/role',//角色统计
                        name :'userRole',
                        component: () => import('../views/home/user/role.vue')
                    }
                ]
            }
        ]
    }
]
const router = new VueRouter({
    routes
})

export default router