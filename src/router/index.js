import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Monarcacore' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
})

// Cambiar título de página por ruta
router.afterEach((to) => {
  document.title = to.meta.title || 'Monarcacore'
})

export default router