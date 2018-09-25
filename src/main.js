import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'font-awesome/scss/font-awesome.scss'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'


import router from './router'

Vue.use(VueRouter)

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router, // 引入路由
  render: h => h(App)
}).$mount('#app')
