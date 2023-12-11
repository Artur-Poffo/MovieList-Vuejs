import MoviesView from '@/views/Movies/MoviesView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return {
      top: 0,
      behavior: 'smooth'
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/Movie/MovieView.vue')
    },
    { path: '/404', name: "not-found", component: () => import('@/views/404/NotFound.vue') },
    { path: '/:catchAll(.*)', redirect: '/404' }
  ]
})

export default router
