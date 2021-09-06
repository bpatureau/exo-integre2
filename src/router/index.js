import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateCategorie.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateEvent.vue')
  },
    {
    path: '/historique',
    name: 'historique',
    component: () => import(/* webpackChunkName: "about" */ '../views/Historique.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
