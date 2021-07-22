import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import settings from '../views/settings.vue'
import profile from '../views/profile.vue'
import Dashboard2 from '../views/Dashboard2.vue'
import Nlu from '../views/nlu.vue'
import Flow from '../views/flow.vue'
import InsideNlu from '../views/InsideNlu.vue'
import InsideFlow from '../views/InsideFlow.vue'
import Tree from '../views/tree.vue'
import VueTree from '@ssthouse/vue-tree-chart'
Vue.component('vue-tree', VueTree)
Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings
  },
  {
    path: '/',
    name: 'profile',
    component: profile
  },
  {
    path: '/dashboard2',
    name: 'dashboard2',
    component: Dashboard2
  },
  {
    path: '/dashboard2/nlu',
    name: 'nlu',
    component: Nlu
  },
  {
    path: '/dashboard2/flow',
    name: 'flow',
    component: Flow
  },
  {
    path: '/dashboard2/nlu/insidenlu',
    name: 'insidenlu',
    component: InsideNlu
  },
  {
    path: '/dashboard2/flow/insideflow',
    name: 'insideflow',
    component: InsideFlow
  },
  {
    path: '/dashboard2/flow/insideflow/:item?',
    name: 'tree',
    component: Tree
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router