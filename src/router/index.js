import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HotSellersView from '../views/HotSellersView.vue'
import SellView from '../views/SellView.vue'
import SupportView from '../views/SupportView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ElectronicsView from '../views/products/ElectronicsView.vue'
import JewelryView from '../views/products/JewelryView.vue'
import MensClothingView from '../views/products/MensClothingView.vue'
import WomensClothingView from '../views/products/WomensClothingView.vue'
import CategoriesView from '../views/products/CategoriesView.vue'

const routes = [
  { path: '/', name: 'home',  component: HomeView },
  { path: '/login', name: 'login',  component: LoginView },
  { path: '/register', name: 'register',  component: RegisterView },
  { path: '/hot', name: 'hot',  component: HotSellersView },
  { path: '/sell', name: 'sell',  component: SellView },
  { path: '/support', name: 'support',  component: SupportView },
  { path: '/categories', name: 'categories',  component: CategoriesView },
  { path: '/electronics', name: 'electronics',  component: ElectronicsView },
  { path: '/jewelry', name: 'jewelry',  component: JewelryView },
  { path: '/mens-clothing', name: 'mens-clothing',  component: MensClothingView },
  { path: '/womens-clothing', name: 'womens-clothing',  component: WomensClothingView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
