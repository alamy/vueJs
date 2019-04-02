import Vue from 'vue'
import Router from 'vue-router'
import inicio from '@/components/inicio'
//import resultado from '@/components/resultato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
     
    }
   
  ]
})
