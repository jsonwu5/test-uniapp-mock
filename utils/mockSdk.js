var __request = uni.request;
// var Mock = require("./mock.js");
import Mock from './mock.js';
console.log('Mock', Mock)
Object.defineProperty(uni, "request", {
	writable: true
});
uni.request = function(config) {
	console.log('111111111111')
	console.log(config, Mock._mocked);
	console.log(typeof Mock._mocked[config.url] == "undefined")
	if (typeof Mock._mocked[config.url] == "undefined") {
		console.log('22222222222222')
		__request(config);
		return
	}
	var resTemplate = Mock._mocked[config.url].template;
	var response = Mock.mock(resTemplate);
	console.log(response);
	if (typeof config.success == "function") {
		config.success(response)
	}
	if (typeof config.complete == "function") {
		config.complete(response)
	}
};
module.exports = Mock;
