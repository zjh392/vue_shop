import Home from '../views/Home.vue'
import { createRouter,createWebHistory } from 'vue-router'

const routers = [
    {
        path: '/',
        redirect:"/home"
    },
    {
        path: '/home',
        name: 'home',
        component:Home,
        children:[
            {
                path:'Nagetive_top.vue',
                name: 'Nagetive_top',
                component: ()=>import('../views/Nagetive_top.vue')
            }
        ]

    },
    {
        path:'/show_cart',
        component:()=>import("../views/Show_cart.vue")
    },
    {
        path:'/show_goods.vue',
        component:()=>import("../views/Show_cart.vue"),
    },
    {
        path:'/Login.vue',
        component:()=>import("../views/Login.vue"),
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routers
})
export default router