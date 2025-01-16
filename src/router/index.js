import { createRouter, createWebHistory } from 'vue-router'
import homeComponent from '../views/home.vue'
import aboutComponent from '../views/about.vue'
import contactPage from '../views/contactPage.vue'
import portfolioComponent from '../views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'homeComponent',
    component: homeComponent,
  },
  {
    path: '/about',
    name: 'aboutComponent',
    component: aboutComponent,
  },
  {
    path: '/contact',
    name: 'contactPage',
    component: contactPage,
  },
  {
    path: '/portfolio',
    name: 'portfolioComponent',
    component: portfolioComponent,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router
