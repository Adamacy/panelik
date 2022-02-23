import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import UsersView from '../views/Users.vue'
import UserDetailView from '../views/UserDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersView
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
