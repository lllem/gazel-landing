import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mebel',
    name: 'mebel',
    meta: {
      title: 'Вывоз старой мебели газелью',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/stroitelniy',
    name: 'stroitelniy',
    meta: {
      title: 'Вывоз строительного мусора газелью',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/gruzchiki',
    name: 'gruzchiki',
    meta: {
      title: 'Вывоз мусора на газели с грузчиками',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/kvartira',
    name: 'kvartira',
    meta: {
      title: 'Вывоз мусора из квартиры газелью',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/oplata',
    name: 'oplata',
    meta: {
      title: 'Вывоз вывоз мусора по безналу',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

export default router
