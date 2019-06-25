<template>
	<view>
		<view class="text-box" scroll-y="true">
			<text>{{ text }}</text>
		</view>
		<view>{{ tip }}</view>
		<view class="button-sp-area">
			<button class="mini-btn" type="primary" size="mini" v-on:click="initData()">拉取数据</button>
			<button class="mini-btn" type="default" size="mini" v-on:click="reset()">清空数据</button>
		</view>
	</view>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      title: 'mock数据测试',
      tip: '',
      msg: '通过mockJs 拦截service层ajax同名方法返回mock数据',
      text: ''
    };
  },

  onLoad: function() {
    this.text = this.msg;
    console.log('on load event....');
  },
  methods: {
    initData() {
      console.log('初始化数据。。。。。');
      this.tip = '模拟通过服务端拉取数据...';
      this.$api.aboutService.list().then(data => {
				console.log('----------------------');
				console.log(JSON.stringify(data));
				console.log('----------------------');
				//data为一个数组，数组第一项为错误信息，第二项为返回数据
				this.text = JSON.stringify(data.todos);
				this.tip = '获取成功';
			})
			.catch(reason => {
				this.text = '发生错误：' + JSON.stringify(reason);
				this.tip = '获取失败';
				console.log('拉取数据发生错误：' + reason);
			});
    },
    reset() {
      this.text = this.msg;
      this.tip = '';
    }
  }
};
</script>
<style>
button {
	margin-top: 20upx;
	margin-bottom: 30upx;
}
.button-sp-area {
	margin: 0 auto;
	width: 60%;
}
.mini-btn {
	margin-right: 20upx;
}
.text-box {
	margin: 10upx 20upx 40upx 20upx;
	border: #007aff dashed 1upx;
	padding: 40upx 0;
	display: flex;
	min-height: 300upx;
	background-color: #ffffff;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 25upx;
	color: #353535;
	line-height: 1.8;
}
</style>
