/*
 * @Date: 2021-05-07 15:16:21
 * @LastEditors: WY
 * @LastEditTime: 2021-05-10 11:24:48
 * @Description: 
 * @FilePath: \hello-world\src\router\index.js
 * @Signature: The warm smile,if the quality.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('/src/views/Home')
    },
    {
        path: '/home',
        component: () => import('/src/views/Home')
    },
    {
        path: '/mine',
        component: () => import('/src/views/Mine')
    }
]

const router = new VueRouter({
    routes
})
export default router