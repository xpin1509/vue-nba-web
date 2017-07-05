<template>
	<div id="app">
		<!--<head-bar></head-bar>-->
		<div class="head">
		  	<h1><!--手机移动端--></h1>
		  	<ul class="nav">
		  		<li><router-link to="/">焦点</router-link></li>
		  		<li><router-link to="/match">赛程</router-link></li>
		  		<li><router-link to="/video">视频</router-link></li>
		  		<li><router-link to="/community">圈子</router-link></li>
		  		<li><router-link to="/playoff">季后赛</router-link></li>
		  		<li><router-link to="/range">排名</router-link></li>
		  		<li><router-link to="/stats">统计</router-link></li>
		  		<li><router-link to="/cavalier">骑士</router-link></li>
		  		<li><router-link to="/warrior">勇士</router-link></li>
		  	</ul>
		 </div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
	
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	html,body{
		background: #f1f1f1;
	}
	ul,
	ol {
		list-style-type: none;
	}
	a{text-decoration: none;}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		width: 7.5rem;
		margin: auto;
	}
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
	.nav li a{
		color: #fff;
	}
</style>