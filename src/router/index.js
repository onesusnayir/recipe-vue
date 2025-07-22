import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
// import Category from '../views/category.vue'
import About from '../views/about.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/category', name: 'Category', component: Category },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
