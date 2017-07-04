<template>
  <div class="hello">
  		 {{playOffVs.visitScore}} : {{playOffVs.homeScore}}
  </div>
</template>

<script>
//
export default {
  name: 'hello',
  data () {
    return {
      playOffVs: {}
    }
  },
  created(){
  	var self = this
		this.$http.get('https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=%2Cindex_live').then(function(res){
				//api json
				//foucsImageList 焦点大图
				//quickList快讯
				var result = JSON.parse(res.body)  ;
				self.playOffVs = result.index_live.data.indexLiveList[0]
		})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
