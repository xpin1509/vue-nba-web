<template>
  <div class="head">
  	<h1><!--手机移动端--></h1>
  	<ul class="nav">
  		<li> 焦点</li>
  		<li> 焦点</li>
  		<li> 焦点</li>
  		<li> 焦点</li>
  		<li> 焦点</li>
  		<li> 焦点</li>
  		<li> 焦点</li>
  		<li> 焦点</li>
  		<!--<li> 季后赛</li>
  		<li> 统计</li>
  		<li> 排名</li>
  		<li> 骑士</li>
  		<li> 勇士</li>
  		<li> 马刺</li>
  		<li> 凯尔特人</li> -->
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.head{
		line-height: 0.88rem;
		font-size: 0.36rem;
		background: #026bb6;
		color: #FFFFFF;
	}
	h1{text-align: center;}
	.nav{
		height: 0.88rem;
		padding: 0 0.12rem;
		display: -webkit-box;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-x:auto;
		overflow-y:hidden;
	}
	.nav::-webkit-scrollbar{
		display: none;
	}
	.nav li{
		padding:0 0.2rem ;
	}
</style>
