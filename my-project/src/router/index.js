import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/router-base/a'
import B from '@/components/router-base/b'
import NotPage from '@/components/router-base/404'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/a',
    name: 'a',
    component: A
  },
  {
    path: '/b',
    name: 'b',
    component: B
  },
  {
    path: '/404',
    name: '404',
    component: NotPage
  },
  {
    path:"*",
    name:"*",
    component:NotPage
  }
  ]
})
