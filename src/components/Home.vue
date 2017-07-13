<template>
	<div class="home">
		<div class="slider-wrap" id="slider-wrap">
			<ul class="slider" id="slider-container">
				<li v-for="imgItem in imgList">
					<a :href="imgItem.url">
						<img :src="imgItem.coverImage" />
					</a>
				</li>
			</ul>
			<div class="page" id="page"><i></i></div>
		</div>
		<div class="game">
			<div class="game-list" v-for="gameItem in gameList" @click="liveGame(gameItem.liveId,gameItem.scheduleId,gameItem.guessId)">
				<router-link :to="{path:'live',query: {liveId:gameItem.liveId,scheduleId:gameItem.scheduleId,guessId:gameItem.guessId}}">
					<div class="vist-team" :style="{backgroundImage: 'url(' + gameItem.visitTeamLogo + ')'}"></div>
					<div class="game-info">
						<span>{{gameItem.visitScore}}:{{gameItem.homeScore}}</span>
						<span class="time-out">{{gameItem.statusName}}</span>
					</div>
					<div class="host-team" :style="{backgroundImage: 'url(' + gameItem.homeTeamLogo + ')'}"></div>
				</router-link>
			</div>
		</div>
		<div class="news-list">
			<div class="news-cell" v-for="item in newsList" @click="openUrl(item.circleId,item.postId)">
				<div class="img-box">
					<img :src="item.coverImage" />
				</div>
				<div class="news-box">
					<div class="news-title">
						{{item.title}}
					</div>
					<div class="news-detail">
						{{item.mark}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				newsList: [],
				imgList: [],
				gameList: []
			}
		},
		created() {
			var self = this;
			this.$http.get('https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=index_basic_new%2Cindex_live').then(function(res) {
				//api json=>foucsImageList焦点大图,quickList快讯
				var result = JSON.parse(res.body);
				self.newsList = result.index_basic_new.data.quickList;
				self.gameList = result.index_live.data.indexLiveList;
				self.imgList = result.index_basic_new.data.foucsImageList;
			});
			this.$store.dispatch('showHead');
		},
		updated() {
			new Slider({
				el: 'slider-wrap'
			});
		},
		methods: {
			openUrl: function(cid, tid) {
				location.href = 'https://quan.qq.com/post?circleid=' + cid + '&postid=' + tid;
			},
			liveGame: function(liveId, scheduleId, guessId) {
				console.log(liveId + ',' + scheduleId + ',' + guessId)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home {
		font-size: 0.32rem;
	}
	
	.slider-wrap,
	.slider-wrap .slider {
		height: 3.86rem;
		overflow: hidden;
		position: relative;
	}
	
	.slider>li {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 0;
		opacity: 0;
		transition: 0.5s all ease;
		overflow: hidden;
	}
	
	.slider>li a,
	.slider>li img {
		display: block;
		width: 100%;
	}
	
	.page {
		position: absolute;
		bottom: 0.6em;
		right: 0.6em;
		display: inline-block;
		text-align: right;
		color: #fff;
		z-index: 2;
	}
	
	.slider>li>img {
		width: 100%;
		height: 100%;
	}
	
	.game {
		display: -webkit-box;
		display: -moz-box;
		display: box;
		margin: 0.2rem 0;
		padding: 0.1rem;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
		overflow-x: auto;
		overflow-y: hidden;
		background: #fff;
	}
	
	.game::-webkit-scrollbar {
		display: none;
	}
	
	.game-list a {
		border-right: 1px solid #efefef;
		display: flex;
		display: -webkit-flex;
		padding: 0 0.2rem;
	}
	
	.game-info {
		width: 1.08rem;
		margin: 0 0.1rem;
		text-align: center;
	}
	
	.game-info span {
		display: block;
		line-height: 0.44rem;
		color: #222;
	}
	
	.time-out {
		font-size: 0.24rem;
		color: #888;
	}
	
	.vist-team,
	.host-team {
		width: 0.88rem;
		height: 0.88rem;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.news-list {
		background: #fff;
	}
	
	.news-cell {
		display: flex;
		display: -webkit-flex;
		padding: 0.1rem 0.25rem;
		height: 1.5rem;
		padding: .24rem 0;
		border-bottom: 1px solid #f2f7fc;
	}
	
	.img-box {
		flex: 1;
		-webkit-flex: 1;
		margin-right: 0.2rem;
		height: 100%;
		overflow: hidden;
	}
	
	.img-box img {
		width: 100%;
		vertical-align: top;
		display: block;
	}
	
	.news-box {
		flex: 2;
		-webkit-flex: 2;
		height: 100%;
	}
	
	.news-title {
		height: 0.92rem;
		line-height: 0.46rem;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.news-detail {
		font-size: 0.28rem;
		line-height: 0.32rem;
		margin-top: 0.3rem;
		color: #888;
	}
</style>