import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import City from '@/pages/City/city'
import Detail from '@/pages/Detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
