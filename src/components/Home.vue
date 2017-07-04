<template>
  <div class="home">
  	<head-bar></head-bar>
  	<focus-list></focus-list>
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
