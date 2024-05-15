import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RentView from '../views/RentView.vue'

const routes = [
  { path: '/', name: 'home',  component: HomeView },
  { path: '/rent', name: 'rent',  component: RentView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
