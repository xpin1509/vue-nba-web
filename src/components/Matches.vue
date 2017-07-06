<template>
	<div class="match">
		<div class="title">
			<span><</span>
			<span>2017-07-06</span>
			<span>></span>
		</div>
		<div class="list-match">
			<div class="lincoapp-nba-match">
				<div class="t_live_item">
					<div class="team">
						<img src="http://zxpic.gtimg.com/infonew/0/upload_pics_-24857.jpg/0" />
						<div class="team-info">
							<div class="team-info">
								<strong class="team-score">96</strong>
								<span class="team-name">尼克斯</span>
							</div>
						</div>
					</div>
					<div class="time">
						<span class="count">已结束</span>
					</div>
					<div class="team">
						<div class="team-info">
							<strong class="team-score">96</strong>
							<span class="team-name">尼克斯</span>
						</div>
						<img src="http://zxpic.gtimg.com/infonew/0/upload_pics_-24857.jpg/0" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'match',
		data() {
			return {
				teamList: []
			}
		},
		created() {
			var self = this;
			this.$http.get('https://nb.3g.qq.com/nba/api/schedule@getList').then(function(res) {
				//var result = JSON.parse(res.body);
				//self.teamList = result
			})
			
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
	}
	
	.team {
		width: 30%;
		display: flex;
		text-align: center;
	}
	
	.team img {
		width: 1rem;
		height: 1rem;
		display: block;
	}
	
	.team-info strong {
		display: block;
		font-size: 0.56rem;
		font-weight: normal;
		line-height: 1;
	}
</style>