import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastros',
    name: 'cadastros',
    component: () => import('../views/Cadastros.vue')
  },
  {
    path: '/planilha',
    name: 'planilha',
    component: () => import('../views/Planilha.vue')
  },
  {
    path: '/estoque',
    name: 'estoque',
    component: () => import('../views/Estoque.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
