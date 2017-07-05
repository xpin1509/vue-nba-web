<template>
  <div class="home">
  	<head-bar></head-bar>
  	<focus-list api="https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=index_basic_new%2Cindex_live"></focus-list>
  </div>
</template>

<script>
import HeadBar from "./HeadBar.vue"
import FocusList from "./FocusList.vue"

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components:{
  	HeadBar,
  	FocusList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
