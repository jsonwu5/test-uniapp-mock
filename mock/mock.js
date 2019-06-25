// 引入mockjs，前后端分离后，以无侵入式方式开发前端业务流程，
//通过模拟各种真实场景数据，覆盖业务流程各场景测试。
// 启动前请先安装mockjs ：命令： npm install mockjs --save
import Mock from '@/utils/mockSdk.js'
// --------------以下引入业务使用mock数据------------------
// 命名导出方式在demo.data.js文件中导出后引用方式
import aboutMockListData from './data/about.demo.mock.data.js'


// Mock.mock( url, post/get , 返回的数据)
// Mock.setup({
//     timeout: '300-1000' // 延时响应300到1000毫秒之间的阈值
// })
//拦截 Ajax 请求，返回模拟的响应数据
// mock数据 
Mock.mock('/about/list', 'post', aboutMockListData);
// Mock.mock('/about/list', {
//   "origin": function () {
//     return Mock.Random.ip();
//   }
// });

