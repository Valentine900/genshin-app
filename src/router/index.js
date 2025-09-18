import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'MainPage',
    component: () => import('@/views/MainPage.vue')
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue')
  },
  ]
})

export default router
