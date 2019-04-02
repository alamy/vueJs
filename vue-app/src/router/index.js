import Vue from 'vue'
import Router from 'vue-router'
import inicio from '@/components/inicio'
import resposta from '@/components/resposta'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio,
      props:{sidbar:'dark'}
    },
    {
      path: '/resposta',
      name: 'resposta',
      component: resposta
    }
   
  ]
})
