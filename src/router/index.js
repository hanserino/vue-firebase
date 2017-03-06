import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Lol from '@/components/Lol'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/lol',
      name: 'LoL',
      component: Lol
    }
  ]
})
