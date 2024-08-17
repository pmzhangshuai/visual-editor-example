import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('@/views/preview.vue')
    }
  ]
})

export default router
