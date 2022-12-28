import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden:true,
    },
    {
      path: '/login',
      name: 'Login',
      hidden:true,
      component: () => import('@/components/Login')
      // component: resolve => require([('@/components/Login')], resolve)
    },
    {
      path: '/home',
      name: '学生管理',
      redirect: '/home/student',
      icon:'fa fa-users',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/student',
          name: '学生列表',
          icon:" fa fa-list-alt",
          component: () => import('@/components/students/StudentList')
        },
        {
          path: '/home/work',
          name: '作业列表',
          icon:"fa fa-book",
          component: () => import('@/components/students/WorkList')
        },
        {
          path: '/home/info',
          name: '信息列表',
          icon:'fa fa-commenting',
          component: () => import('@/components/students/InforList')
        },
      ]
    },
    {
      path: '/home',
      name: '数据分析',
      icon:'fa fa-bar-chart',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/dataview',
          name: '数据概览',
          icon:" fa fa-pie-chart",
          component: () => import('@/components/dataAnalysis/DataOverView'),
        },
        {
          path: '/home/mapview',
          name: '地图概览',
          icon:" fa fa-map",
          component: () => import('@/components/dataAnalysis/MapData'),
        },
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      hidden:true,
      component: () => import('@/components/NotFound')
    },
  ],
  mode: 'history'
})
