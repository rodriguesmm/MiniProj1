import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import QuemSouEuView from '../views/QuemSouEuView.vue'
import OQueFacoView from '../views/OQueFacoView.vue'
import HobbiesView from '../views/HobbiesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Quem Sou Eu?',
    component: QuemSouEuView
  },
  {
    path: '/o-que-faco',
    name: 'O Que Faço?',
    component: OQueFacoView
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: HobbiesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
