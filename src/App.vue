<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	html,
	body {
		background: #f1f1f1;
	}
	
	ul,
	ol {
		list-style-type: none;
	}
	
	a {
		text-decoration: none;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		width: 7.5rem;
		margin: auto;
	}
	
	.selected {
		color: #026BB6;
	}
</style>