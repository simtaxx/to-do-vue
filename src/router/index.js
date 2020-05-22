import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoList from '../views/ToDoList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ToDoList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
