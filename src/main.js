/*
 * @Descripttion: HJ
 * @Company: 思宏科技
 * @version: v1.0
 * @Author: HJ
 * @Date: 2020-12-24 11:48:42
 * @LastEditors: HJ
 * @LastEditTime: 2020-12-24 14:19:04
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入的库
import './core/lazy-use'

// 公共样式
import './styles/global.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
