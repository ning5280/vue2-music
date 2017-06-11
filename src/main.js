import 'babel-polyfill'
// 编译新语法 补丁
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// 取消点击延迟三百毫秒*
Vue.config.productionTip = false

fastclick.attach(document.body)
// 使body上的点击取消三百毫秒延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
