<template>
	<div class="live">
		<div class="lincoapp-gameinfo">
			<div class="nav-bar">
				<span class="arrow" @click="back()"></span>
				<a href="/" class="home"></a>
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
			<li :class="{'selected' : index == 0 }" @click="chooseNav(0)">实时</li>
			<li :class="{'selected' : index == 1 }" @click="chooseNav(1)">视频</li>
			<li :class="{'selected' : index == 2 }" @click="chooseNav(2)">战报</li>
			<li :class="{'selected' : index == 3 }" @click="chooseNav(3)">圈子</li>
			<li :class="{'selected' : index == 4 }" @click="chooseNav(4)">统计</li>
		</ul>
		<div class="page ">
			<div class="lincoapp-live2" v-if="index == 0">

			</div>
			<div class="lincoapp-list-images" v-if="index == 1">

			</div>
			<div class="live_content" v-if="index == 2">
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
			<div class="lincoapp-list-circle" v-if="index == 3">

			</div>
			<div class="lincoapp-table1" v-if="index == 4">
				<div class="title">实时赛况</div>
				<table border="0" cellspacing="0" cellpadding="0" class="lincoapp-nba-table1">
					<thead>
						<tr>
							<td>球队</td>
							<td>1节</td>
							<td>2节</td>
							<td>3节</td>
							<td>4节</td>
							<td>总分</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td :style="{backgroundImage: 'url(' + broadcast_info.t2_icon + ')'}"></td>
							<td v-for="item in broadcast_info.sec_scores">{{item.score1}}</td>
							<td>{{broadcast_info.t1_point}}</td>
						</tr>
						<tr>
							<td :style="{backgroundImage: 'url(' + broadcast_info.t1_icon + ')'}"></td>
							<td v-for="item in broadcast_info.sec_scores">{{item.score2}}</td>
							<td>{{broadcast_info.t2_point}}</td>
						</tr>
					</tbody>
				</table>
				<table border="0" cellspacing="0" cellpadding="0" class="lincoapp-nba-table2">
					<thead>
						<tr>
							<td class="teamblue"></td>
							<td>最佳球员</td>
							<td class="teamred">
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="name t_stats_player"></td>
							<td>
								<div class="score"></div>
							</td>
							<td class="name t_stats_player"></td>
						</tr>
					</tbody>
				</table>
				<div class="lincoapp-table1">
					<div class="title">球队数据</div>
					<table class="lincoapp-nba-table1">
						<thead>
							<tr>
								<td>球队</td>
								<td>蓝板</td>
								<td>助攻</td>
								<td>抢断</td>
								<td>盖帽</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td :style="{backgroundImage: 'url(' + broadcast_info.t1_icon + ')'}"></td>
								<td>{{live_stat_4_nba.teamStat.rebounds.visit}}</td>
								<td>{{live_stat_4_nba.teamStat.blocks.visit}}</td>
								<td>{{live_stat_4_nba.teamStat.assist.visit}}</td>
								<td>{{live_stat_4_nba.teamStat.steals.visit}}</td>
							</tr>
							<tr>
								<td :style="{backgroundImage: 'url(' + broadcast_info.t2_icon + ')'}"></td>
								<td>{{live_stat_4_nba.teamStat.rebounds.home}}</td>
								<td>{{live_stat_4_nba.teamStat.blocks.home}}</td>
								<td>{{live_stat_4_nba.teamStat.assist.home}}</td>
								<td>{{live_stat_4_nba.teamStat.steals.home}}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="lincoapp-nba-table3">
					<div class="title">球员数据</div>
					<div class="stats"></div>
					<div class="stats"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'live',
		data() {
			return {
				result: {},
				index: 0,
				quanlist: [],
				live_stat_4_nba: {},
				broadcast_info: {}
			}
		},
		created() {
			var self = this;
			this.liveId = this.$route.query.liveId;
			this.scheduleId = this.$route.query.scheduleId;
			//var guessId = this.$route.query.guessId;
			var scoreApi = 'https://nb.3g.qq.com/nba/api/live@getInfo?';
			//var detailApi = 'https://nb.3g.qq.com/nba/api/live@getReport,community@getComment?gc_tid=4179011259_3529551497633011023&gr_liveid=2009448'
			this.$http.get(scoreApi + 'i_schid=' + this.scheduleId + '&i_liveid=' + this.liveId).then(function(res) {
				var str = JSON.stringify(res.body).replace(/@/g, '');
				var res = JSON.parse(str);
				self.result = res.livegetInfo.data;
			})
			//			this.$http.get(detailApi).then(function(res) {
			//				var str = JSON.stringify(res.body).replace(/@/g, '');
			//				var res = JSON.parse(str);
			//				self.quanlist = res.communitygetComment.data.list;
			//			})
			this.$store.dispatch('hideHead');
		},
		methods: {
			back: function() {
				this.$store.dispatch('showHead');
				history.go(-1);
			},
			chooseNav: function(index) {
				this.index = index;
				if(this.index === 4) {
					this.getLiveStat4()
				}
			},
			getLiveStat4: function() {
				var api = "https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=live_stat_4_nba%2Cbroadcast_info&sch_id=" + this.scheduleId + "&bid=" + this.liveId;
				this.$http.get(api).then(function(res) {
					//					var str = JSON.stringify(res.body).replace(/@/g, '');
					//					var res = JSON.parse(str);
					//					this.quanlist = res.communitygetComment.data.list;
					var res = JSON.parse(res.body);
					this.broadcast_info = res.broadcast_info;
					this.live_stat_4_nba = res.live_stat_4_nba;
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.live {
		color: #222;
	}
	
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
	
	.nav-bar span,
	.nav-bar>a {
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
		border-bottom: 1px solid #F5F5F5;
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
	
	.lincoapp-table1 .title {
		line-height: .8rem;
		font-size: .3rem;
		padding: 0 .32rem;
		background: #fff;
	}
	
	.lincoapp-nba-table1 {
		width: 100%;
		background: #fff;
	}
	
	.lincoapp-nba-table1 td {
		text-align: center;
		overflow: hidden;
	}
	
	.lincoapp-nba-table1 thead td {
		color: #787878;
		height: .48rem;
		line-height: .48rem;
		font-size: .24rem;
		width: 14%;
	}
	
	.lincoapp-nba-table1 tbody tr td:first-child {
		background-size: auto 80%;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.lincoapp-nba-table1 tbody td {
		height: .7rem;
		line-height: .7rem;
		font-size: .3rem;
	}
	
	.lincoapp-nba-table1 tbody tr {
		background: #F4F4F7;
	}
	
	.lincoapp-nba-table1 tbody tr:nth-child(odd) {
		background: #fff;
	}
	
	.lincoapp-nba-table1 tbody {
		border-bottom: 1px solid #e8e8e8;
	}
	
	.lincoapp-nba-table2 {
		width: 100%;
		margin-top: .11rem;
		background: #fff;
	}
	
	.lincoapp-nba-table2 td {
		height: .9rem;
		overflow: hidden;
	}
	
	.lincoapp-nba-table2 thead {
		color: #000;
		font-weight: 700;
		text-align: center;
		font-size: .32rem;
		border-top: 1px solid #DCDDE1;
		border-bottom: 1px solid #DCDDE1;
	}
	
	.lincoapp-nba-table1 thead td {
		color: #787878;
		height: .48rem;
		line-height: .48rem;
		font-size: .24rem;
		width: 14%;
	}
	.lincoapp-nba-table1 tbody td {
	    height: .7rem;
	    line-height: .7rem;
	    font-size: .3rem;
	}
</style>