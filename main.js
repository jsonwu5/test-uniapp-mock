import Vue from 'vue'
import App from './App'
// 引入mock.js ，用于拦截 和业务层请求地址相同的Ajax 请求，并返回模拟的响应数据；生产环境只需注释掉mock.js所在行即可切换到真实接口调用环境。
require('./mock/mock.js')
// 统一放置业务层service接口
import api from './service/api.js'
Vue.prototype.$api=api

// 仅作流程演示使用，发布时注释掉此行即可。
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
