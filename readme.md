- npm install mockjs --save
- npm install axios --save

### NPM支持
uni-app支持使用npm安装第三方包。

此文档要求开发者们对npm有一定的了解，因此不会再去介绍npm的基本功能。如若之前未接触过npm，请翻阅NPM官方文档进行学习。

初始化npm工程

若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程：

npm init -y
#### 安装依赖

在项目根目录执行命令安装npm包：

npm install packageName --save

#### 使用

安装完即可使用npm包，js中引入npm包：

import package from 'packageName'
const package = require('packageName')
#### 注意

node_modules 目录必须在项目根目录下。
支持安装 mpvue 组件，不支持直接使用小程序自定义组件（如 wxml格式的vant-weapp），小程序组件使用请参考：小程序组件支持。
非 H5 端不支持使用含有 dom、bom 等操作的 vue 组件和 js 模块，安装的模块及其依赖的模块使用的 API 必须是 uni-app 已有的 API（兼容小程序 API），比如：支持高德地图微信小程序 SDK，不支持 jQuery 。