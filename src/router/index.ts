import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Simulation from '../views/Simulation.vue'
import Analysis from '../views/Analysis.vue'
import Optimize from '../views/Optimize.vue'
import i18n from '@/i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: Home
  },
  {
    path: '/:lang/history',
    component: History
  },
  {
    name: 'Analysis',
    path: '/:lang/analysis/:id',
    component: Analysis
  },
  {
    name: 'Optimize',
    path: '/:lang/optimize',
    component: Optimize
  },
  {
    path: '/:lang/simulation',
    component: Simulation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
