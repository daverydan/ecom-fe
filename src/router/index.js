import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HotSellersView from '../views/HotSellersView.vue'
import SellView from '../views/SellView.vue'
import SupportView from '../views/SupportView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  { path: '/', name: 'home',  component: HomeView },
  { path: '/login', name: 'login',  component: LoginView },
  { path: '/register', name: 'register',  component: RegisterView },
  { path: '/hot', name: 'hot',  component: HotSellersView },
  { path: '/sell', name: 'sell',  component: SellView },
  { path: '/support', name: 'support',  component: SupportView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
