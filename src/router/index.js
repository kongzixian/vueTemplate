import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import $ from 'jquery'

// import Home from '@/views/home'
// import Nearby from '@/views/nearby'
// import Find from '@/views/find'
// import Order from '@/views/order'
// import MyUser from '@/views/myUser'

const Home = (resolve) => {
  import('@/views/home').then((module) => {
    resolve(module)
  })
}

const Nearby = (resolve) => {
  import('@/views/nearby').then((module) => {
    resolve(module)
  })
}

const Find = (resolve) => {
  import('@/views/find').then((module) => {
    resolve(module)
  })
}

const Order = (resolve) => {
  import('@/views/order').then((module) => {
    resolve(module)
  })
}

const MyUser = (resolve) => {
  import('@/views/myUser').then((module) => {
    resolve(module)
  })
}


require('@/assets/css/base.css')

//使用bootstrap
import '@/assets/libs/bootstrap/css/bootstrap.min.css'
import '@/assets/libs/bootstrap/js/bootstrap.min'
import 'font-awesome/css/font-awesome.css'
// import '@/assets/libs/echarts/echarts'



Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/nearby',
      name: 'nearby',
      component: Nearby
    },

    {
      path: '/find',
      name: 'find',
      component: Find
    },

    {
      path: '/order',
      name: 'order',
      component: Order
    },

    {
      path: '/myUser',
      name: 'myUser',
      component: MyUser
    },

  ],
  mode:"history"
})
