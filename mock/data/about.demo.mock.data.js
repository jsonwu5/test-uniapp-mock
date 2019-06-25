// 启动前请先安装mockjs ：命令： npm install mockjs --save
import Mock from '@/utils/mockSdk.js';
// 构造mock数据方式
const data1 = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  /*'name|min-max': string 通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。*/
  'todos|6-8': [{
    // "id":"@id",
    "id":"@increment",
    //'name': "@ctitle(2,3)",
    'name': "@cname"//,
    //"img": "@dataimage('120x120','@color','hello')",
    // "img": "@image('120x120','@color','hello')",
    // "brief": "@csentence(8,50)",
    // "price|0-20.0-2": 1,
    // "num": 0,
    // "minusFlag": true,
    // "date": "@datetime",
    // "peisongfei|0-100.0-2": 1,
    // "limit|0-50": 1
  }]
});
 

export default  data1