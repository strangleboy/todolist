/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/chats',
    component: index,
    children: [
      {
        path: '/chats',
        name: 'chats',
        component: () => import('../views/Chats.vue')
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/Contacts.vue')
      },
      {
        path: '/discover',
        name: 'discover',
        component: () => import('../views/Discover.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/Me.vue')
      },
      {
        path: '/me/userinfo',
        name: 'UserInfo',
        component: () => import('../views/UserInfo.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')// 懒加载组件
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import('../views/Information.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/ChatsView.vue')
  }
]

const router = new VueRouter({
  routes
})
// 根据登录状态跳转路由
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.wxUserToken ? true : false
  if (to.path == '/login' || to.path == '/register') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

export default router
