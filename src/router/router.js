import Home from '@/views/Home.vue'

export default [
  {
    path: '',
    name: 'home',
    redirect: '/static/home'
  },
  {
    path: 'home',
    name: 'home',
    component: Home
  },
  {
    path: 'about',
    name: 'about',
    component: () => import (/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    //动态路由
    path: 'argu/:name',
    component: () => import (/* webpackChunkName: "about" */ '@/views/argu.vue')
  },
  {
    //子路由
    path: 'parent',
    name: 'parent',
    component: () => import (/* webpackChunkName: "about" */ '@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import ('@/views/child.vue'),
      }
    ]
  },
  {
    //路由视图
    path: 'named_view',
    components: {
      default: () => import ('@/views/Home.vue'),
      email: () => import ('@/views/email.vue'),
      tel: () => import ('@/views/tel.vue'),
    }
  },
  {
    //路由重定向
    path: 'main',
    redirect: to => '/'
  },
  {
    //路由重定向
    path: 'login',
    name: 'login',
    component: () => import ('@/views/login.vue'),
  },
  {
    path: 'countTo',
    name: 'countTo',
    component: () => import ('@/views/count-to.vue'),
  },
  {
    path: 'splitPane',
    name: 'splitPane',
    component: () => import ('@/views/count-to.vue'),
  },
  {
    path: '*',
    component: () => import ('@/views/404view.vue'),
  }
]
