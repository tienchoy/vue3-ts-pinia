import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'

const routes =[
    {
        path:'/',
        name:'Index',
        component:()=> import('../pages/Index.vue')
    },
    {
        path:'/cate',
        name:'Cate',
        component:()=>import('../pages/cate.vue')
    },
    {
        path:'/detail',
        name:'Detail',
        component:()=>import('../pages/detail.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes,
})

export default router