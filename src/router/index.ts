import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import IndexView from "@/views/index/index.vue";
import UserView from "@/views/user/index.vue";
import LoginView from "@/views/login/index.vue";
const routes = [
    { path: '/', component: () => IndexView },
    { 
      path: '/user',
      component: () => UserView,
      meta: { requiresAuth: true } 
    },
    { path: '/login', component: () => LoginView }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局前置守卫
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.meta.requiresAuth) {
    const isAuthenticated = localStorage.getItem('token')
    
    if (!isAuthenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath } 
      })
      return
    }
  }
  next()
})

export default router;
