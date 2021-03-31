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
    path: '/blog',
    name: 'Blog',
    component: function () {
      return import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
    }
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: function () {
      return import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
