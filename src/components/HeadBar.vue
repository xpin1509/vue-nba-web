<template>
	<div class="head">
		<h1><!--手机移动端--></h1>
		<ul class="nav">
			<li>
				<router-link to="/home">焦点</router-link>
			</li>
			<li>
				<router-link to="/match">赛程</router-link>
			</li>
			<li>
				<router-link to="/range">排名</router-link>
			</li>
			<li>
				<router-link to="/stats">统计</router-link>
			</li>
			<li>
				<router-link to="/playoff">季后赛</router-link>
			</li>
			<li>
				<router-link to="/video">视频</router-link>
			</li>
			<li>
				<router-link to="/community">圈子</router-link>
			</li>
			<li>
				<router-link to="/team">骑士</router-link>
			</li>
			<li>
				<router-link to="/team">勇士</router-link>
			</li>
			<li>
				<router-link to="/team">马刺</router-link>
			</li>
			<li>
				<router-link to="/team">热火</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'head',
		data() {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.head {
		line-height: 0.72rem;
		font-size: 0.36rem;
		background: #026bb6;
		color: #FFFFFF;
	}
	
	h1 {
		text-align: center;
	}
	
	.nav {
		padding: 0 0.12rem;
		display: -webkit-box;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-x: auto;
		overflow-y: hidden;
	}
	
	.nav::-webkit-scrollbar {
		display: none;
	}
	
	.nav li {
		padding: 0 0.2rem;
	}
	
	.nav li a {
		color: #fff;
	}
	
	.nav li .router-link-active {
		font-weight: 700;
	}
</style>