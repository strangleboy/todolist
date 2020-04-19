import Vue from 'vue'
import VueRouter from 'vue-router'
import TODOLIST from '../views/TODOLIST.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TODOLIST',
    component: TODOLIST
  },
  {
    path: '/done',
    name: 'DONELIST',
    component: () => import('../views/DONELIST.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
