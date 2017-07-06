<template>
	<div class="stats">
		<div class="nav-bar">
			<ul>
				<li @click="chooseNav('pt')" :class="{'selected' : chooses == 'pt'}">得分</li>
				<li @click="chooseNav('rb')" :class="{'selected' : chooses == 'rb'}">篮板</li>
				<li @click="chooseNav('at')" :class="{'selected' : chooses == 'at'}">助攻</li>
				<li @click="chooseNav('st')" :class="{'selected' : chooses == 'st'}">抢断</li>
				<li @click="chooseNav('bk')" :class="{'selected' : chooses == 'bk'}">盖帽</li>
			</ul>
			<ul>
				<li @click="chooseNav('to')" :class="{'selected' : chooses == 'to'}">失误</li>
				<li @click="chooseNav('tp')" :class="{'selected' : chooses == 'tp'}">三分</li>
				<li @click="chooseNav('fo')" :class="{'selected' : chooses == 'fo'}">犯规</li>
				<li @click="chooseNav('ftp')" :class="{'selected' : chooses == 'ftp'}">罚球</li>
				<li @click="chooseNav('sht')" :class="{'selected' : chooses == 'sht'}">神投</li>
			</ul>
		</div>
		<table border="0" cellspacing="0" cellpadding="0" width="100%">
			<tr>
				<th width="40%" class="first">球员</th>
				<th width="30%" v-if="chooses == 'pt'">场均得分</th>
				<th width="30%" v-if="chooses == 'pt'">总得分</th>

				<th width="30%" v-if="chooses == 'rb'">场均篮板</th>
				<th width="30%" v-if="chooses == 'rb'">总篮板分</th>

				<th width="30%" v-if="chooses == 'at'">场均助攻</th>
				<th width="30%" v-if="chooses == 'at'">总助攻</th>

				<th width="30%" v-if="chooses == 'st'">场均抢断</th>
				<th width="30%" v-if="chooses == 'st'">总抢断</th>

				<th width="30%" v-if="chooses == 'bk'">场均盖帽</th>
				<th width="30%" v-if="chooses == 'bk'">总盖帽</th>

				<th width="30%" v-if="chooses == 'to'">场均失误</th>
				<th width="30%" v-if="chooses == 'to'">总失误</th>

				<th width="20%" v-if="chooses == 'tp'">命中率</th>
				<th width="20%" v-if="chooses == 'tp'">进球数</th>
				<th width="20%" v-if="chooses == 'tp'">投篮数</th>

				<th width="30%" v-if="chooses == 'fo'">场均犯规</th>
				<th width="30%" v-if="chooses == 'fo'">总犯规</th>

				<th width="20%" v-if="chooses == 'ftp'">命中率</th>
				<th width="20%" v-if="chooses == 'ftp'">进球数</th>
				<th width="20%" v-if="chooses == 'ftp'">罚球数</th>

				<th width="20%" v-if="chooses == 'sht'">命中率</th>
				<th width="20%" v-if="chooses == 'sht'">进球数</th>
				<th width="20%" v-if="chooses == 'sht'">投篮数</th>
			</tr>

			<tr v-for="item in playerlist">
				<td class="first"><i>{{item.rank}}</i> <em :style="{backgroundImage: 'url(' + item.teamlogo + ')'}"></em>{{item.playername}}</td>
				<td v-if="chooses == 'sht' || chooses == 'ftp' || chooses == 'tp'">{{item.percentage}}</td>
				<td>{{chooses == 'sht' || chooses == 'ftp' || chooses == 'tp' ? item.numerator : item.avgdata}}</td>
				<td>{{chooses == 'sht' || chooses == 'ftp' || chooses == 'tp' ? item.denominator : item.totaldata}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'stats',
		data() {
			return {
				playerlist: [],
				statslist: {},
				chooses: 'pt'
			}
		},
		created() {
			var self = this;
			this.$http.get('https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=player_top2').then(function(res) {
				var result = JSON.parse(res.body);
				self.statslist = result.player_top2;
				self.playerlist = self.statslist.pt.record;
			})
		},
		methods: {
			chooseNav: function(tab) {
				this.chooses = tab;
				this.playerlist = this.statslist[tab].record;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	a {
		color: #42b983;
	}
	
	.nav-bar ul {
		display: flex;
		justify-content: space-between;
		line-height: .72rem;
		font-size: 0.32rem;
		background: #fff;
		padding: 0 .2rem;
		color: #666;
	}
	
	.nav-bar ul li {
		padding: 0 0.08rem;
	}
	
	.nav-bar li.selected {
		color: #175cd4;
	}
	
	table {
		table-layout: fixed;
	}
	
	table th {
		height: .64rem;
		line-height: .64rem;
		font-size: .26rem;
		border-bottom: 1px solid #ECECF1;
		background: #EBECEF;
		font-weight: normal;
	}
	
	table td {
		font-size: .26rem;
		line-height: 0.9rem;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		border-bottom: 1px solid #ECECF1;
	}
	
	.first {
		text-align: left;
		padding-left: 0.5rem;
	}
	
	.first i {
		display: inline-block;
		width: .32rem;
		line-height: .32rem;
		text-align: center;
		color: #fff;
		background: #B3B3B5;
		font-style: normal;
		vertical-align: middle;
		margin-right: 0.1rem;
	}
	
	.first em {
		display: inline-block;
		width: .32rem;
		height: .32rem;
		font-style: normal;
		vertical-align: middle;
		margin-right: 0.1rem;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>