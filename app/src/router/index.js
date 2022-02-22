import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeVue from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeVue
  },
  {
    path: '/about',
    name: 'about',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
