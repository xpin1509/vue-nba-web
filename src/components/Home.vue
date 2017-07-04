<template>
  <div class="home">
  	<head-bar></head-bar>
  </div>
</template>

<script>
import HeadBar from "./HeadBar.vue"

export default {
  name: 'home',
  data () {
    return {
      msg: 'this is home'
    }
  },
  components:{
  	HeadBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
