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
				<ul class="list">
					<li v-for="item in broadcast">
						<div class="username">
							<div class="flex-item">
								<a href="javascript:;" class="u-img">
									<img :src="item.speaker_data.icon" alt="" class="img">
								</a>
								<a href="javascript:;" class="name">{{item.speaker}}</a>
								<span class="gray">NBA圈直播员</span>
							</div>
							<time>{{item.suffix}}</time>
						</div>
						<div class="msg">
							<p>{{item.content}}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="lincoapp-list-images" v-if="index == 1">
				<div class="title">赛事集锦</div>
				<div class="list-images">
					<ul>
						<li v-for="item in videoList">
							<a href="javascript:;" class="t_live_video_item">
								<div class="u-img">
									<img :src="item.pic" alt="">
								</div>
								<div class="u-title">
									<span>{{item.title}}</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
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
				<a href="javascript:;" class="lk-more">查看全部圈友讨论 ></a>
			</div>
			<div class="lincoapp-list-circle" v-if="index == 3">
				<ul class="list-circle">
					<li v-for="item in live_Circle">
						<a :href="item.url" class="lk">
							<span class="u-img">
								<img :src="item.icon" alt="" />
							</span>
							<div class="detail">
								<div class="tit">
									{{item.name}}
								</div>
							</div>
						</a>
					</li>
				</ul>
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
				<table border="0" cellspacing="0" cellpadding="0" class="lincoapp-nba-table2" v-if="0">
					<thead>
						<tr>
							<td class="teamblue"></td>
							<td>最佳球员</td>
							<td class="teamred"></td>
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
				<div class="lincoapp-table1" v-if="teamStat.length !== 0">
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
					<div class="stats">
						<div class="player">
							<ul>
								<li><i class="logo" :style="{backgroundImage: 'url(' + broadcast_info.t1_icon + ')'}"></i>球员</li>
								<li v-for="item in visitplayer" class="t_stats_player">
									{{item[1]}}
								</li>
							</ul>
						</div>
						<div class="info">
							<ol>
								<li>首发</li>
								<li>得分</li>
								<li>篮板</li>
								<li>助攻</li>
								<li>投篮</li>
								<li>三分</li>
								<li>罚球</li>
								<li>抢断</li>
								<li>盖帽</li>
								<li>失误</li>
								<li>犯规</li>
								<li>时间</li>
							</ol>
							<ul v-for="item in visitplayer">
								<li>{{item[14] == '' ? '否' :item[14]}}</li>
								<li>{{item[2]}}</li>
								<!--得分-->
								<li>{{item[7]}}</li>
								<!--篮板-->
								<li>{{item[8]}}</li>
								<!--助攻-->
								<li>{{item[3]}} - {{item[4]}}</li>
								<!--投篮-->
								<li>{{item[5]}} - {{item[6]}}</li>
								<!--三分-->
								<li>{{item[16]}}</li>
								<!--罚球-->
								<li>{{item[9]}}</li>
								<!--抢断-->
								<li>{{item[10]}}</li>
								<!--盖帽-->
								<li>{{item[13]}}</li>
								<!--失误-->
								<li>{{item[12]}}</li>
								<!--犯规-->
								<li>{{item[11]}}</li>
								<!--时间-->
							</ul>
						</div>
					</div>
					<div class="stats">
						<div class="player">
							<ul>
								<li><i class="logo" :style="{backgroundImage: 'url(' + broadcast_info.t2_icon + ')'}"></i>球员</li>
								<li v-for="item in homeplayer" class="t_stats_player">
									{{item[1]}}
								</li>
							</ul>
						</div>
						<div class="info">
							<ol>
								<li>首发</li>
								<li>得分</li>
								<li>篮板</li>
								<li>助攻</li>
								<li>投篮</li>
								<li>三分</li>
								<li>罚球</li>
								<li>抢断</li>
								<li>盖帽</li>
								<li>失误</li>
								<li>犯规</li>
								<li>时间</li>
							</ol>
							<ul v-for="item in homeplayer">
								<li>{{item[14] == '' ? '否' :item[14]}}</li>
								<li>{{item[2]}}</li>
								<!--得分-->
								<li>{{item[7]}}</li>
								<!--篮板-->
								<li>{{item[8]}}</li>
								<!--助攻-->
								<li>{{item[3]}} - {{item[4]}}</li>
								<!--投篮-->
								<li>{{item[5]}} - {{item[6]}}</li>
								<!--三分-->
								<li>{{item[16]}}</li>
								<!--罚球-->
								<li>{{item[9]}}</li>
								<!--抢断-->
								<li>{{item[10]}}</li>
								<!--盖帽-->
								<li>{{item[13]}}</li>
								<!--失误-->
								<li>{{item[12]}}</li>
								<!--犯规-->
								<li>{{item[11]}}</li>
								<!--时间-->
							</ul>
						</div>
					</div>
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
				index: 2,
				quanlist: [],
				live_stat_4_nba: {},
				broadcast_info: {},
				live_Circle: {},
				teamStat: [],
				visitplayer: [],
				homeplayer: [],
				videoList: [],
				broadcast: []
			}
		},
		created() {
			var self = this;
			this.liveId = this.$route.query.liveId;
			this.scheduleId = this.$route.query.scheduleId;
			var scoreApi = 'https://nb.3g.qq.com/nba/api/live@getInfo?';
			this.$http.get(scoreApi + 'i_schid=' + this.scheduleId + '&i_liveid=' + this.liveId).then(function(res) {
				var str = JSON.stringify(res.body).replace(/@/g, '');
				var res = JSON.parse(str);
				self.result = res.livegetInfo.data;
			})
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
				} else if(this.index === 3) {
					this.getLiveStat3()
				} else if(this.index === 2) {
					this.getLiveStat2()
				} else if(this.index === 1) {
					this.getLiveStat1()
				} else if(this.index === 0) {
					this.getLiveStat0()
				}
			},
			getLiveStat0: function() {
				var api = "https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=broadcast_content%2C&sch_id=";
				this.$http.get(api + this.scheduleId + "&bid=" + this.liveId).then(function(res) {
					var res = JSON.parse(res.body);
					this.broadcast = res.broadcast_content.contentAry;
				})
			},
			getLiveStat1: function() {
				var api = "https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=match_video2%2Cget_ads&bid=2009472"
				this.$http.get(api).then(function(res) {
					var res = JSON.parse(res.body);
					this.videoList = res.match_video2.totalArr;
				})
			},
			getLiveStat2: function() {

			},
			getLiveStat3: function() {
				var api = "https://nb.3g.qq.com/nba/api/live@getCircle?gc_schid=" + this.scheduleId;
				this.$http.get(api).then(function(res) {
					var str = JSON.stringify(res.body).replace(/@/g, '');
					this.live_Circle = JSON.parse(str).livegetCircle.data.list;
				})
			},
			getLiveStat4: function() {
				var api = "https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=live_stat_4_nba%2Cbroadcast_info&sch_id=" + this.scheduleId + "&bid=" + this.liveId;
				this.$http.get(api).then(function(res) {
					var res = JSON.parse(res.body);
					this.broadcast_info = res.broadcast_info;
					this.live_stat_4_nba = res.live_stat_4_nba;
					this.teamStat = this.live_stat_4_nba.teamStat;
					this.visitplayer = this.live_stat_4_nba.playStat.visit;
					this.homeplayer = this.live_stat_4_nba.playStat.home;
				})
				console.log('zhixing')
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
	
	.t_live_item .time {
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
	
	.live_content .list li {
		display: flex;
		padding: .24rem 0;
		margin: 0 .32rem;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.live_content .u-img {
		display: block;
		width: 0.64rem;
		height: 0.64rem;
		margin-right: .16rem;
	}
	
	.live_content .u-img img {
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
	
	.lincoapp-list-circle {
		background: #fff;
		padding: .2rem .24rem;
	}
	
	.lincoapp-list-circle .list-circle {
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	
	.lincoapp-list-circle li {
		width: 50%;
		-webkit-box-flex: 1;
	}
	
	.lincoapp-list-circle .lk {
		display: flex;
		font-size: .32rem;
		color: #026BB6;
		line-height: 1.5;
		border: .01rem solid #EAF0F4;
		-webkit-border-radius: 2px;
		-moz-border-radius: 2px;
		border-radius: 2px;
		margin: .06rem .04rem;
		padding: .12rem;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.lincoapp-list-circle .u-img {
		display: -webkit-box;
		display: -moz-box;
		display: box;
		width: .8rem;
		height: .8rem;
		border: .01rem solid #f5f5f5;
		margin-right: .08rem;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-box-align: center;
		-moz-box-align: center;
		box-align: center;
		-webkit-border-radius: 2px;
		-moz-border-radius: 2px;
		border-radius: 2px;
	}
	
	.lincoapp-list-circle .detail {
		-webkit-box-flex: 1;
	}
	
	.lincoapp-list-circle .tit {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	/*球员数据*/
	
	.lincoapp-nba-table3 .title {
		border-bottom: .01rem solid #DCDDE1;
	}
	
	.lincoapp-nba-table3 .stats {
		display: flex;
		font-size: .28rem;
	}
	
	.lincoapp-nba-table3 .player li:first-child {
		font-size: .24rem;
		position: relative;
		padding-left: .68rem;
	}
	
	.lincoapp-nba-table3 .player {
		width: 1.9rem;
	}
	
	.lincoapp-nba-table3 .stats ul li {
		height: .9rem;
		background: #F4F4F7;
	}
	
	.lincoapp-nba-table3 .player li {
		padding: 0 .16rem;
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient: vertical;
		-moz-box-orient: vertical;
		box-orient: vertical;
		-webkit-line-clamp: 2;
		-moz-line-clamp: 2;
		line-clamp: 2;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.4;
		-webkit-box-pack: center;
	}
	
	.lincoapp-nba-table3 .player li:nth-child(even) {
		background: #fff;
	}
	
	.lincoapp-nba-table3.skin-team .stats ul li:not(:last-child) {
		border-bottom: .01rem solid #e8e8e8;
	}
	
	.lincoapp-nba-table3 .info {
		flex: 1;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
	
	.lincoapp-nba-table3 .info ul,
	.lincoapp-nba-table3 .info ol {
		display: flex;
		min-width: 100%;
	}
	
	.info::-webkit-scrollbar,
	ul::-webkit-scrollbar,
	ol::-webkit-scrollbar {
		display: none;
	}
	
	.lincoapp-nba-table3 .info li {
		width: 12.5%;
		min-width: 1.2rem;
		text-align: center;
	}
	
	.lincoapp-nba-table3 .stats ol li {
		height: .68rem;
		line-height: .68rem;
		background: #F4F4F7;
		border-bottom: .01rem solid #ECECF1;
	}
	
	.lincoapp-nba-table3 .logo {
		position: absolute;
		left: 0;
		top: 0;
		width: .68rem;
		height: 100%;
		background-size: auto 80%;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.lincoapp-nba-table3 .player li:first-child {
		height: .68rem;
		line-height: .68rem;
		border-bottom: .01rem solid #ECECF1;
	}
	
	.lincoapp-nba-table3 .stats ul li {
		border-bottom: .01rem solid #e8e8e8;
	}
	
	.lincoapp-nba-table3 .stats ul:nth-child(even) li {
		background: #fff;
	}
	
	.lincoapp-nba-table3 .stats li {
		height: .9rem;
		line-height: .9rem;
	}
	
	.lincoapp-nba-table3 .stats ul li {
		border-left: .01rem solid #e8e8e8;
	}
	
	.lincoapp-list-images {
		padding: 0 .32rem;
		background: #fff;
		margin-bottom: .24rem;
	}
	
	.lincoapp-list-images .title {
		padding: .24rem 0;
		line-height: .4rem;
		font-size: .34rem;
		overflow: hidden;
	}
	
	.lincoapp-list-images li {
		width: 3.23rem;
		float: left;
		background: #fff;
		margin: 0 0.1rem .16rem;
	}
	
	.lincoapp-list-images .u-img {
		height: 1.6rem;
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.lincoapp-list-images .u-img img {
		width: 100%;
		border-radius: 0;
	}
	
	.lincoapp-list-images .u-title {
		padding: .08rem 0;
		line-height: 1.3;
		font-size: .28rem;
	}
	
	.lincoapp-list-images .u-title span {
		display: block;
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-orient: vertical;
		-moz-box-orient: vertical;
		box-orient: vertical;
		-webkit-line-clamp: 2;
		-moz-line-clamp: 2;
		line-clamp: 2;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #000
	}
	
	.lincoapp-live2 li {
		background: #fff;
		padding: .32rem .32rem .16rem;
	}
	
	.lincoapp-live2 .username .u-img {
		display: block;
		width: .64rem;
		height: .64rem;
		vertical-align: middle;
		margin-right: .24rem;
		padding: .01rem;
		background: #f5f5f5;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
		border-radius: 100%;
	}
	
	.lincoapp-live2 .username .u-img img {
		width: 100%;
		vertical-align: top;
		-webkit-border-radius: 100%;
		-moz-border-radius: 100%;
		border-radius: 100%;
	}
	
	.lincoapp-live2 .username .flex-item {
		display: -webkit-box;
		display: -moz-box;
		display: box;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		box-flex: 1;
		-webkit-box-align: center;
		-moz-box-align: center;
		box-align: center;
	}
	
	.lincoapp-live2 .username .name {
		display: block;
		margin-right: .08rem;
		color: #026BB6;
	}
	
	.lincoapp-live2 .username .gray {
		display: block;
		color: #aaa;
	}
	
	.lincoapp-live2 .username time {
		display: block;
		color: #000;
	}
	
	.lincoapp-live2 .username {
		display: -webkit-box;
		display: -moz-box;
		display: box;
		font-size: .28rem;
		-webkit-box-align: center;
		-moz-box-align: center;
		box-align: center;
	}
	
	.lincoapp-live2 .msg {
		margin: .08rem 0 .16rem;
		font-size: 0.32rem;
	}
	
	.lincoapp-live2 .msg p {
		word-wrap: break-word;
		word-break: break-all;
	}
	
	.lk-more {
		display: block;
		padding: .24rem 0;
		text-align: center;
		font-size: .32rem;
		line-height: 1;
		color: #026BB6;
	}
	
	.page {
		height: 9.24rem;
		background: #fff;
	}
	
	.list-circle .u-img img {
		width: 100%;
		vertical-align: top;
		-webkit-border-radius: 2px;
		-moz-border-radius: 2px;
		border-radius: 2px;
	}
</style>