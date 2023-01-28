import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import("../views/ProductListView.vue"),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import("../views/UserView.vue"),
    },
  ],
});

export default router;