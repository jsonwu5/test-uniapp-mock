//import axios from '../config/http.axios.js' // 导入http中创建的axios实例
//var fly=require("flyio")
//var fly=require("flyio/dist/npm/wx")//来使用，可以保持app 和小程序的兼容性
//import qs from 'qs' // 根据需求是否导入qs模块
const aboutService = {
  // 新闻列表--演示
  list(params) {
    //return axios.post('/about/list')

    return new Promise((resolve, reject) => {
			uni.request({
			  url: '/about/list',
			  data: params,
			  method: "POST",
			  header: {
			    'content-type': 'application/x-www-form-urlencoded'
			  },
				success: res => {
					resolve(res);
				},
				fail: err => {
					console.log(err)
				}
			});
		})
  }
  /*
  // post提交
  add (params) {
    return axios.post(`${base.sq}/accesstoken`, qs.stringify(params))
  }
  */
}
export default aboutService
