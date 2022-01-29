import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/dashBoard.vue'
import Users from '../views/Users.vue'
import habilitations from '../views/habilitations.vue'
import statistiques from '../views/statistiques.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashBoard
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/habilitations',
    name: 'habilitations',
    component: habilitations
  },
  {
    path: '/statistiques',
    name: 'statistiques',
    component: statistiques
  }
]

const router = new VueRouter({
  routes
})

export default router
