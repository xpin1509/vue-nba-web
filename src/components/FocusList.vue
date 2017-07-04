<template>
  <div class="focus">
  	<div class="slider-wrap">
  		<ul class="slider">
  			<li><img src="../../../my-first-cli-project/dist/static/image/a.jpg"/></li>
  			<li><img src="../../../my-first-cli-project/dist/static/image/b.jpg"/></li>
  			<li><img src="../../../my-first-cli-project/dist/static/image/d.jpg"/></li>
  			<li><img src="../../../my-first-cli-project/dist/static/image/e.jpg"/></li>
  		</ul>
  		<!--<div class="page">
  			<i class="on"></i><i></i><i></i><i></i>
  		</div>-->
  	</div>
  	<div class="game">
  		<div class=""></div>
  	</div>
  	<div class="news-list">
  		<div class="news-cell" v-for="item in newsList">
  			<div class="img-box" >
  				<img :src="item.coverImage"/>
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
  name: 'focus',
  props:['api'],
  data () {
    return {
    	newsList:[]
    }
  },
  created(){
  	var self = this
		this.$http.get(this.api).then(function(res){
				//api json
				//foucsImageList 焦点大图
				//quickList快讯
				var result = JSON.parse(res.body)  ;
				//self.newsList = result.index_basic_new.data.quickList
		})
  },
  updated(){
  	new Slider({
        el:this.$el,
        hasDots:true,
        isAutoPlay:true
    });
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.focus{
  font-size: 0.32rem;
}
.slider-wrap{
	height: 3.86rem;
	background: #28C0C6;
	overflow: hidden;
	position: relative;
}
.slider>li{
	position:absolute;
	width:100%;
	height:100%;
	top: 0;
	left: 100%;
}
.slider>li:first-child{
	left:0;
}
.page {
  position: absolute;
  left: 0;
  bottom: 0.8em;
  width: 100%;
  text-align: center;
}
.page i{
	display: inline-block;
  width: 0;
  height: 0;
  margin: 0 .2em;
  border-radius: 100%;
  border: .3em solid #999;
  box-shadow: 0 0 1px #CCC;
}
.page i.on{
	border-color: #fff;	
}
.slider>li>img{
	width: 100%;
	height: 100%;
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
