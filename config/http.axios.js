import axios from 'axios'
// 全局默认设置 Global axios defaults
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
// 设置post请求头
var instance = axios.create({
  timeout: 1000 * 12,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})


// 请求拦截器（在请求或者返回被then或者catch处理之前进行拦截）
instance.interceptors.request.use(function(config) {
  //console.log('\n请求处理拦截器request.config:\n' + JSON.stringify(config))
  // console.log('\n请求处理拦截器request.config:\n' )
  // console.dir(config)
  return config;
}, function(error) {
  return Promise.reject(error);
})
// 响应拦截器（在请求或者返回被then或者catch处理之前进行拦截）
instance.interceptors.response.use(function(response) {
  //console.log('\n响应处理拦截器response:\n' + JSON.stringify(response))
  // console.log('\n响应处理拦截器response:\n')
  // console.dir(response)
  return response;
}, function(error) {
  return Promise.reject(error);
})


export default instance
