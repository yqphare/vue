// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用
import Vue from 'vue' 
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import service from './service'
import * as echarts from 'echarts'
Vue.config.productionTip = false
// 挂载
Vue.use(ElementUI)
Vue.prototype.axios=axios//挂载到原型，可在全局使用
Vue.prototype.service=service//挂载到原型，可在全局使用
Vue.prototype.$echarts=echarts//挂载到原型，可在全局使用
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
