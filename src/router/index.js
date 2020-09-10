import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
      meta: {
      title: 'Главная',
      type: '',
      icon: 'mdi-home',
      },
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home.vue')
    },
    {
        meta: {
            title: 'Новая',
            type: '',
            icon: 'mdi-home',
        },
        path: '/New',
        name: 'New',
        component: () => import('@/components/New.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router