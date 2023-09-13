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
    path: '/region/:city',
    props: true,
    name: 'region',
    meta: {
      title: 'Выбор региона',
    },
    component: () => import('../views/HomeView.vue'),
    children: [

    ],
  },
  {
    path: '/mebel',
    name: 'mebel',
    meta: {
      title: 'Вывоз старой мебели газелью',
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/stroitelniy',
    name: 'stroitelniy',
    meta: {
      title: 'Вывоз строительного мусора газелью',
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/gruzchiki',
    name: 'gruzchiki',
    meta: {
      title: 'Вывоз мусора на газели с грузчиками',
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/kvartira',
    name: 'kvartira',
    meta: {
      title: 'Вывоз мусора из квартиры газелью',
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/oplata',
    name: 'oplata',
    meta: {
      title: 'Вывоз вывоз мусора по безналу',
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/ErrorPage404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

export default router
