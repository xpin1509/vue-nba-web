<template>
  <div class="focus">
  	<div class="slider-wrap" id="slider-wrap">
  		<ul class="slider" id="slider-container">
  			<li><img src="http://test.ortholink.cn/include/mt/images/index/@2x_11.jpg?t=1.0.1.jpg"/></li>
  			<li><img src="http://test.ortholink.cn/include/mt/images/index/@2x_13.jpg?t=1.0.1.jpg"/></li>
  			<li><img src="http://test.ortholink.cn/include/mt/images/index/@2x_14.jpg?t=1.0.1.jpg1"/></li>
  			<li><img src="http://test.ortholink.cn/include/mt/images/index/@2x_12.jpg?t=1.0.1.jpg"/></li>
  		</ul>
  		<div class="page" id="page">
  			<i>1/5</i>
  		</div>
  	</div>
  	<div class="game">
  		<div class="game-list">
  			<div class="vist-team" style="background-image: url(http://zxpic.gtimg.com/infonew/0/upload_pics_-24864.jpg/0);"></div>
  			<div class="game-info">
  				<span>88:99</span>
  				<span class="time-out">已结束</span>
  			</div>
  			<div class="host-team" style="background-image: url(http://zxpic.gtimg.com/infonew/0/upload_pics_-24870.jpg/0);"></div>
  		</div>
  		<div class=""></div>
  		<div class=""></div>
  		<div class=""></div>
  		<div class=""></div>
  		<div class=""></div>
  	</div>
  	<div class="news-list">
  		<div class="news-cell" v-for="item in newsList">
  			<div class="img-box" >
  				<img :src="item.coverImage"/>
  			</div>
  			<div class="news-box">
  				<div class="news-title">
  					 <!--{{item.title}}--> 
  				</div>
  				<div class="news-detail">
  					<!--{{item.mark}}-->
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'focus',
  props:['api'],
  data () {
    return {
    	newsList:[],
    	imgList:[]
    }
  },
  created(){
  	var self = this;
  	
//		var slider = new Slider();
//		this.$http.get(this.api).then(function(res){
//				//api json
//				//foucsImageList 焦点大图
//				//quickList快讯
//				var result = JSON.parse(res.body)  ;
//				//self.newsList = result.index_basic_new.data.quickList
//		})
  },
  mounted(){ 
  	new Slider({
  		el:'slider-wrap'
  	});
  },
  methods(){
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.focus{
  font-size: 0.32rem;
}
.slider-wrap,.slider-wrap .slider{
	height: 3.86rem;
	overflow: hidden;
	position: relative;
}
.slider>li{
	position:absolute;
	width:100%;
	height:100%;
	top: 0;
	left: 0;
	z-index:0;
	opacity: 0;
	transition: 0.5s all ease;  
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
.slider>li>img{
	width: 100%;
	height: 100%;
}

.game{
	margin: 0.2rem 0;
	display: flex;
}
.game-list{
	border-right: 1px solid #efefef;
	display: flex;
}
.game-info span{
	display: block;
	line-height: 0.44rem;
	color: #222;
	margin: 0 0.1rem;
}
.time-out{
	font-size:0.24rem ;
	color: #888;
}
.vist-team,.host-team{
	width: 0.88rem;
	height: 0.88rem;
	background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.news-cell{
	display: flex;
	display: -webkit-flex;
	padding: 0.1rem 0.2rem;
	height: 2rem;
}
.img-box{
	flex: 1;
	-webkit-flex:1 ;
	margin-right: 0.2rem;
	height: 100%;
	overflow: hidden;
}
.img-box img{
	width: 100%;
	vertical-align: top;
	display: block;
}
.news-box{
	flex: 2;
	-webkit-flex: 2;
	height: 100%;
}
.news-title{
	height: 0.92rem;
	line-height: 0.46rem;
	text-overflow:ellipsis ;
	overflow:hidden; 
	display:-webkit-box; 
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2; 
}
.news-detail{
	font-size: 0.28rem;
	line-height: 0.32rem;
	margin-top: 0.3rem;
	color: #888;
}
</style>
