<template>
	<div class="match">
		<div class="title">
			<span><</span>
			<span>{{result.cur_date}}</span>
			<span>></span>
		</div>
		<div class="list-match">
			<div class="lincoapp-nba-match" v-for="item in result.list">
				<router-link :to="{path:'live',query: {liveId:item.liveid,scheduleId:item.schid}}">
					<div class="t_live_item">
						<div class="team">
							<img :src="item.visitteamlogo" />
							<div class="team-info">
								<div class="team-info">
									<strong class="team-score">{{item.visitscore}}</strong>
									<span class="team-name">{{item.visitteamname}}</span>
								</div>
							</div>
						</div>
						<div class="time">
							<span class="count">{{item.match_status}}</span>
							<span class="count">{{item.match_time}}</span>
						</div>
						<div class="team">
							<div class="team-info">
								<strong class="team-score">{{item.homescore}}</strong>
								<span class="team-name">{{item.hometeamname}}</span>
							</div>
							<img :src="item.hometeamlogo" />
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'match',
		data() {
			return {
				result: {}
			}
		},
		created() {
			var self = this;
			this.$http.get('https://nb.3g.qq.com/nba/api/schedule@getList').then(function(res) {
				var str = JSON.stringify(res.body).replace(/@/, '');
				var res = JSON.parse(str);
				self.result = res.schedulegetList.data;
			});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.title {
		font-size: 0.36rem;
		line-height: 0.88rem;
		color: #222;
		padding: 0 .2rem;
		background: #f2f7fc;
		justify-content: space-between;
		display: flex;
	}
	
	.lincoapp-nba-match {
		padding: 0 .32rem;
		border-bottom: 1px solid #f5f5f5;
		background: #fff;
	}
	
	.t_live_item {
		padding: .4rem 0 .24rem;
		border: 0!important;
		font-size: 0.28rem;
		line-height: 0.32rem;
		display: flex;
		justify-content: space-between;
		color: #222;
	}
	
	.team {
		flex: 1;
		width: 30%;
		display: flex;
		text-align: center;
	}
	
	.team img {
		width: 1rem;
		height: 1rem;
		display: block;
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
		margin-top: 0.2rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-box-pack: center;
	}
</style>