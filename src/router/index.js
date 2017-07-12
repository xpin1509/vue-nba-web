import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Match from '@/components/Matches'
import PlayOff from '@/components/PlayOff'
import Range from '@/components/Range'
import Stats from '@/components/Stats'
import Live from '@/components/Live'
import Image from '@/components/Image'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/match',
			name: 'Match',
			component: Match
		},
		{
			path: '/playoff',
			name: 'PlayOff',
			component: PlayOff
		},
		{
			path: '/range',
			name: 'Range',
			component: Range
		},
		{
			path: '/stats',
			name: 'Stats',
			component: Stats
		},
		{
			path: '/live',
			name: 'Live',
			component: Live
		},
		{
			path: '/image',
			name: 'Image',
			component: Image
		}
	]
})