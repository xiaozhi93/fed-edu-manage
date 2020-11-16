import store from '@/store'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    meta: { title: '首页', requiresAuth: true },
    component: () => import(/* webpackChunkName: 'layout' */ '@/layout/index.vue'),
    redirect: '/course',
    children: [
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: 'role' */ '@/views/role/index.vue'),
        meta: { title: '角色管理' }
      },
      {
        path: '/allocMenu',
        name: 'allocMenu',
        component: () => import(/* webpackChunkName: 'role-menu' */ '@/views/role/role-menu.vue'),
        meta: { title: '角色菜单管理' }
      },
      {
        path: '/allocResource',
        name: 'allocResource',
        component: () => import(/* webpackChunkName: 'role-resource' */ '@/views/role/role-resource.vue'),
        meta: { title: '角色资源管理' }
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue'),
        meta: { title: '菜单管理' }
      },
      {
        path: '/menu-create',
        name: 'menu-create',
        component: () => import(/* webpackChunkName: 'menu-create' */ '@/views/menu/create.vue'),
        meta: { title: '创建菜单' }
      },
      {
        path: '/menu-edit',
        name: 'menu-edit',
        component: () => import(/* webpackChunkName: 'menu-edit' */ '@/views/menu/edit.vue'),
        meta: { title: '编辑菜单' }
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/* webpackChunkName: 'resource' */ '@/views/resource/index.vue'),
        meta: { title: '资源管理' }
      },
      {
        path: '/resource-category',
        name: 'resource-category',
        component: () => import(/* webpackChunkName: 'resource-category' */ '@/views/resource/resource-category.vue'),
        meta: { title: '资源分类' }
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/* webpackChunkName: 'course' */ '@/views/course/index.vue'),
        meta: { title: '课程管理' }
      },
      {
        path: '/course-create',
        name: 'course-create',
        component: () => import(/* webpackChunkName: 'course-create' */ '@/views/course/create.vue'),
        meta: { title: '创建课程' }
      },
      {
        path: '/course-edit',
        name: 'course-edit',
        component: () => import(/* webpackChunkName: 'course-edit' */ '@/views/course/edit.vue'),
        meta: { title: '编辑课程' }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: 'user' */ '@/views/user/index.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/* webpackChunkName: 'advert' */ '@/views/advert/index.vue'),
        meta: { title: '广告管理' }
      },
      {
        path: '/advert-create',
        name: 'advert-create',
        component: () => import(/* webpackChunkName: 'advert-create' */ '@/views/advert/create.vue'),
        meta: { title: '创建广告' }
      },
      {
        path: '/advert-edit',
        name: 'advert-edit',
        component: () => import(/* webpackChunkName: 'advert-edit' */ '@/views/advert/edit.vue'),
        meta: { title: '编辑广告' }
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () => import(/* webpackChunkName: 'advert-space' */ '@/views/advert-space/index.vue'),
        meta: { title: '广告位管理' }
      },
      {
        path: '/advert-space-create',
        name: 'advert-space-create',
        component: () => import(/* webpackChunkName: 'advert-space-create' */ '@/views/advert-space/create.vue'),
        meta: { title: '创建广告位' }
      },
      {
        path: '/advert-space-edit',
        name: 'advert-space-edit',
        component: () => import(/* webpackChunkName: 'advert-space-edit' */ '@/views/advert-space/edit.vue'),
        meta: { title: '编辑广告位' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // 匹配需要校验就校验，也会匹配到父路由
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
