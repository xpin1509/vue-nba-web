import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Match from '@/components/Matches'
import PlayOff from '@/components/PlayOff'
import Range from '@/components/Range'
import Stats from '@/components/Stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path: '/news',
      name: 'News',
      component: News
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
    }
  ]
})
