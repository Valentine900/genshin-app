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
  {
    path: '/WikiPage',
    name: 'WikiPage',
    component: () => import('@/views/WikiPage.vue')
  },
  {
    path: '/GuidesPage',
    name: 'GuidesPage',
    component: () => import('@/views/GuidesPage.vue')
  },
  {
    path: '/NewsPage',
    name: 'NewsPage',
    component: () => import('@/views/NewsPage.vue')
  },
  {
    path: '/ProfileHPage',
    name: 'ProfileHPage',
    component: () => import('@/views/ProfileHPage.vue')
  },
  {
    path: '/ProfilePage',
    name: 'ProfilePage',
    component: () => import('@/views/ProfilePage.vue')
  },
  ]
})

export default router
