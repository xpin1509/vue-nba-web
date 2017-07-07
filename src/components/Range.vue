<template>
	<div class="range">
		<div class="nav-bar">
			<div class="t_rank_w">
				<span @click="chooseTeam('w')" :class="{'selected' : choose == 0}">西部联盟</span>
			</div>
			<div class="t_rank_e ">
				<span @click="chooseTeam('e')" :class="{'selected' : choose == 1}">东部联盟</span>
			</div>
		</div>
		<div class="stats ">
			<table border="0 " cellspacing="0 " cellpadding="0 " class="statsTable " width="100% ">
				<tr>
					<th class="first " width="28% ">球队</th>
					<th width="18% ">胜</th>
					<th width="18% ">负</th>
					<th width="18% ">胜率</th>
					<th width="18% ">场均差</th>
				</tr>
				<tr v-for="item in teamList ">
					<td class="first "> <i>{{item.conferenceseed}}</i>{{item.cnshortname}}</td>
					<td>{{item.wins}}</td>
					<td>{{item.losses}}</td>
					<td>{{item.winper}}</td>
					<td>{{item.gamesback}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	//api=>https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=team_rank&rt=w%2Ce%2Cd
	export default {
		name: 'range',
data() {
		return {
			eastTeam: [],
			westTeam: [],
			teamList: [],
			choose: 0
		}
	},
	created() {
		var self = this;
		this.$http.get('https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=team_rank&rt=w%2Ce%2Cd').then(function(res) {
			var result = JSON.parse(res.body);
			var west = result.team_rank.w;
			var east = result.team_rank.e;
			var team = result.team_rank.team;
			for(var i = 0; i < west.length; i++) {
				self.westTeam.push(team[west[i]])
			}
			for(var j = 0; j < west.length; j++) {
				self.eastTeam.push(team[east[j]])
			}
			self.teamList = self.westTeam
		})
	},
	methods: {
		chooseTeam: function(team) {
				if(team =='e') {
					this.choose = 1;
					this.teamList = this.eastTeam
				} else if(team == 'w') {
					this.choose = 0;
					this.teamList = this.westTeam
				}
			}
		}
	}
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
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
	
	.nav-bar {
		line-height: 0.8rem;
		font-size: 0.34rem;
		background: #FFFFFF;
		padding: 0 .2rem;
		/*-webkit-box-pack: justify;*/
		justify-content:space-between;
		display: flex;
	}
	
	.nav-bar span {
		display: block;
		padding: 0 0.08rem;
		color: #666;
	}
	
	.nav-bar span.selected {
		color: #175cd4;
	}
	
	table {
		color: #222;
		font-size: 0.28rem;
		text-align: center;
	}
	
	table th {
		line-height: 0.66rem;
		background: #EBECEF;
		border-bottom: 1px solid #DCDDE1;
		font-weight: normal;
	}
	
	table td {
		line-height: 0.92rem;
		background: #F4F4F7;
		border-bottom: 1px solid #ECECF1
	}
	
	.first {
		text-align: left;
		padding-left: 0.5rem;
	}
	
	.first i {
		display: inline-block;
		width: .36rem;
		height: .36rem;
		line-height: .36rem;
		text-align: center;
		color: #fff;
		background: #F3BF2E;
		font-style: normal;
		vertical-align: middle;
		margin-right: 0.1rem;
	}
</style>