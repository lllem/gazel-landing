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
    component: () => import('../views/HomeView.vue'),
    children: [

    ],
  },
  {
    path: '/articles/:article',
    props: true,
    name: 'article',
    component: () => import('../views/ArticleView.vue'),
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
  routes,
  scrollBehavior() {
    return {top: 0}
  }
})

export default router
