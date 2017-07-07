<template>
	<div class="live">
		<div class="lincoapp-gameinfo">
			<div class="nav-bar">
				<span class="arrow"></span>
				<span class="home"></span>
			</div>
			<div class="lincoapp-nba-match">
				<div class="t_live_item">
					<div class="team">
						<div class="img-box" :style="{backgroundImage: 'url(' + result.t1_icon + ')'}"></div>
						<div class="team-name">{{result.t1_name}}</div>
					</div>
					<div class="time">
						<div class="count">
							<span>{{result.match_status}}</span>
							<span>{{result.match_time}}</span>
						</div>
						<div class="team-score">
							<span class="score">{{result.t1_point}}</span>
							<span>:</span>
							<span class="score">{{result.t2_point}}</span>
						</div>
					</div>
					<div class="team">
						<div class="img-box" :style="{backgroundImage: 'url(' + result.t2_icon + ')'}"></div>
						<div class="team-name">{{result.t2_name}}</div>
					</div>
				</div>
			</div>

		</div>
		<ul class="nav-list">
			<li :class="{'selected' : index == 0 }">实时</li>
			<li :class="{'selected' : index == 1 }">视频</li>
			<li :class="{'selected' : index == 2 }">战报</li>
			<li :class="{'selected' : index == 3 }">圈子</li>
			<li :class="{'selected' : index == 4 }">统计</li>
		</ul>
		<div class="live_content">
			<div class="title">圈友讨论</div>
			<ul class="list">
				<li class="t_n_link" v-for="item in quanlist">
					<a class="u-img">
						<img :src="item.stPostUser.sFaceIcon" />
					</a>
					<div class="detail">
						<span class="username">{{item.stPostUser.sNickname}}</span>
						<div class="u-title">
							{{item.text}}
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'live',
		data() {
			return {
				result: {},
				index: 2,
				quanlist: []
			}
		},
		created() {
			var self = this;
			//https://nb.3g.qq.com/nba/api/live@getReport,community@getComment?gc_tid=4179011259_3529551497633011023&gr_liveid=2009448
			this.$http.get('https://nb.3g.qq.com/nba/api/live@getInfo?i_schid=1470134&i_liveid=2009506').then(function(res) {
				var str = JSON.stringify(res.body).replace(/@/g, '');
				var res = JSON.parse(str);
				self.result = res.livegetInfo.data;
			})
			this.$http.get('https://nb.3g.qq.com/nba/api/live@getReport,community@getComment?gc_tid=4179011259_3529551497633011023&gr_liveid=2009448').then(function(res) {
				var str = JSON.stringify(res.body).replace(/@/g, '');
				var res = JSON.parse(str);
				console.log(res)
				self.quanlist = res.communitygetComment.data.list;
			})
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.lincoapp-gameinfo {
		height: 3.36rem;
		background: url(../assets/bg.png) center /100% no-repeat;
	}
	
	.nav-bar {
		margin: 0 0;
		padding: 0.24rem 0.32rem 0;
		height: 0.48rem;
		justify-content: space-between;
		display: flex;
	}
	
	.nav-bar span {
		width: 0.48rem;
		height: 0.48rem;
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: center;
	}
	
	.nav-bar .arrow {
		background-image: url(../assets/icon-back2.png);
	}
	
	.nav-bar .home {
		background-image: url(../assets/icon-home2.png);
	}
	
	.lincoapp-nba-match {
		padding: 0 .32rem;
	}
	
	.t_live_item {
		padding: .4rem 0 .24rem;
		border: 0!important;
		font-size: 0.28rem;
		line-height: 0.32rem;
		display: flex;
		justify-content: space-between;
	}
	
	.team {
		width: 30%;
		text-align: center;
		color: #fff;
	}
	
	.img-box {
		width: 1.2rem;
		height: 1.2rem;
		margin: auto;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.team-info {
		flex: 1;
	}
	
	.team-info strong {
		display: block;
		font-size: 0.56rem;
		font-weight: normal;
		line-height: 1;
	}
	
	.time {
		flex: 1;
		margin-top: 0.2rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-box-pack: center;
		color: #fff;
	}
	
	.team-score {
		display: flex;
		font-size: .64rem;
		line-height: .72rem;
	}
	
	.score {
		flex: 1;
		text-align: center;
	}
	
	.count {
		text-align: center;
	}
	
	.nav-list {
		display: flex;
		height: .72rem;
		line-height: .72rem;
		background: #fff;
		padding: 0 .24rem;
		font-size: .34rem;
		color: #666;
		display: flex;
		justify-content: space-between;
	}
	
	.live_content {
		background: #fff;
		padding: 0.32rem;
		line-height: 1.5;
	}
	
	.title {
		font-size: 0.28rem;
	}
	
	.list li {
		display: flex;
		padding: .24rem 0;
		margin: 0 .32rem;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.u-img {
		display: block;
		width: 0.64rem;
		height: 0.64rem;
		margin-right: .16rem;
	}
	
	.u-img img {
		display: block;
		width: 100%;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
		border-radius: 100%;
	}
	
	.detail {
		flex: 1;
	}
	
	.username {
		font-size: 0.28rem;
		color: #026BB6;
		display: block;
		padding: 0.08rem 0;
	}
	
	.u-title {
		font-size: 0.3rem;
	}
</style>