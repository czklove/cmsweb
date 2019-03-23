import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)

//为了与后端路由区分开，统一路由前缀加static ,为了能够一起部署
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/static/home'
    },
    {
    path: '/static',
    name: 'static',
    component: () => import (/* webpackChunkName: "about" */ '@/views/static.vue'),
    children: routes
    }
  ]
})
/* const HAS_LOGINED = true
// to
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if(HAS_LOGINED) next()
    else next ({ name: 'login' })
  } else {
    if(HAS_LOGINED) next({name: 'home'})
    else {
      next()
    }
  }
}) */

export default router
