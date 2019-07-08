import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import List from './views/List.vue'
import Info from './views/Info.vue'
import User from './views/User.vue'
import Add from './views/Add.vue'

Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
