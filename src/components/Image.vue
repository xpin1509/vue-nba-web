<template>
	<div class="image">
		<ul>
			<li class="t_a_link" v-for="item in list">
				<div class="u-img">
					<img :src="item.coverImage" />
				</div>
				<div class="u-info">
					<div class="u-title">
						{{item.title}}
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'image',
		data() {
			return {
				list: []
			}
		},
		created() {
			var self = this;
			var api = "https://nb.3g.qq.com/nba/api/pic@getList?pic_pos=sports_nbapp&pic_pageNo=1&pic_pageSize=12";
			this.$http.get(api).then(function(res) {
				var str = JSON.stringify(res.body).replace(/@/g, '');
				var res = JSON.parse(str);
				self.list = res.picgetList.data.list;
			})
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.image ul li {
		position: relative;
	}
	
	.image ul li:not(:last-child) {
		margin-bottom: .24rem;
	}
	
	.u-img {
		overflow: hidden;
		height: 3.86rem;
	}
	
	li .u-img img {
		width: 100%;
		display: block;
		
	}
	
	li .u-info {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		color: #fff;
		font-size: .32rem;
		line-height: 1;
		padding: .24rem;
		background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)) no-repeat;
	}
</style>