import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Simulation from '../views/Simulation.vue'
import Analysis from '../views/Analysis.vue'
import Details from '../views/Details.vue'
import Optimize from '../views/Optimize.vue'
import OptHistory from '../views/OptHistory.vue'
import i18n from '@/i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    name: 'Home',
    path: '/:lang',
    component: Home
  },
  {
    name: 'Simulation History',
    path: '/:lang/simulation-history',
    component: History
  },
  {
    name: 'Optimization History',
    path: '/:lang/optimization-history',
    component: OptHistory
  },
  {
    name: 'Analysis',
    path: '/:lang/analysis/:id',
    component: Analysis
  },
  {
    name: 'Details',
    path: '/:lang/details/:id',
    component: Details
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
