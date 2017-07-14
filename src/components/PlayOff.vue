<template>
	<div class="hello">
		<!--<head-bar></head-bar>-->
		<div class="lincoapp-duel">
			<div class="due1">
				<div class="u-title"><strong>决赛</strong></div>
				<div class="teams">
					<div class="teams_left">
						<div class="team_playoff_team_each">
							<div class="teamnum">W{{finalsWest.conferenceseed1}}</div>
							<div class="teamlogo" :style="{backgroundImage: 'url(' + finalsWest.logo1 + ')'}"></div>
							<div class="teamname">{{finalsWest.shortname1}}</div>
							<div class="teamscore">{{finalsWest.wincount1}}</div>
						</div>
					</div>
					<div class="teams_right">
						<div class="team_playoff_team_each">
							<div class="teamscore">{{finalsEast.wincount2}}</div>
							<div class="teamlogo" :style="{backgroundImage: 'url(' + finalsEast.logo2 + ')'}"></div>
							<div class="teamname">{{finalsEast.shortname2}}</div>
							<div class="teamnum">E{{finalsEast.conferenceseed2}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="due1">
				<div class="u-title"><strong>半决赛</strong></div>
				<div class="teams">
					<div class="teams_left">
						<div class="team_playoff_team" v-for="item in half.west">
							<div class="team_playoff_team_each">
								<div class="teamnum">W{{item.conferenceseed2}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo2 + ')'}"></div>
								<div class="teamname">{{item.shortname2}}</div>
								<div class="teamscore">{{item.wincount2}}</div>
							</div>
							<div class="team_playoff_team_each">
								<div class="teamnum">W{{item.conferenceseed1}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo1 + ')'}"></div>
								<div class="teamname">{{item.shortname1}}</div>
								<div class="teamscore">{{item.wincount1}}</div>
							</div>
						</div>
					</div>
					<div class="teams_right">
						<div class="team_playoff_team" v-for="item in half.east">
							<div class="team_playoff_team_each">
								<div class="teamscore">{{item.wincount2}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo2 + ')'}"></div>
								<div class="teamname">{{item.shortname2}}</div>
								<div class="teamnum">E{{item.conferenceseed2}}</div>
							</div>
							<div class="team_playoff_team_each">
								<div class="teamscore">{{item.wincount1}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo1 + ')'}"></div>
								<div class="teamname">{{item.shortname1}}</div>
								<div class="teamnum">E{{item.conferenceseed1}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="due1">
				<div class="u-title"><strong>第二轮</strong></div>
				<div class="teams">
					<div class="teams_left">
						<div class="team_playoff_team" v-for="item in second.west">
							<div class="team_playoff_team_each">
								<div class="teamnum">W{{item.conferenceseed2}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo2 + ')'}"></div>
								<div class="teamname">{{item.shortname2}}</div>
								<div class="teamscore">{{item.wincount2}}</div>
							</div>
							<div class="team_playoff_team_each">
								<div class="teamnum">W{{item.conferenceseed1}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo1 + ')'}"></div>
								<div class="teamname">{{item.shortname1}}</div>
								<div class="teamscore">{{item.wincount1}}</div>
							</div>
						</div>
					</div>
					<div class="teams_right">
						<div class="team_playoff_team" v-for="item in second.east">
							<div class="team_playoff_team_each">
								<div class="teamscore">{{item.wincount2}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo2 + ')'}"></div>
								<div class="teamname">{{item.shortname2}}</div>
								<div class="teamnum">E{{item.conferenceseed2}}</div>
							</div>
							<div class="team_playoff_team_each">
								<div class="teamscore">{{item.wincount1}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo1 + ')'}"></div>
								<div class="teamname">{{item.shortname1}}</div>
								<div class="teamnum">E{{item.conferenceseed1}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="due1">
				<div class="u-title"><strong>第一轮</strong></div>
				<div class="teams">
					<div class="teams_left">
						<div class="team_playoff_team" v-for="item in first.west">
							<div class="team_playoff_team_each">
								<div class="teamnum">W{{item.conferenceseed2}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo2 + ')'}"></div>
								<div class="teamname">{{item.shortname2}}</div>
								<div class="teamscore">{{item.wincount2}}</div>
							</div>
							<div class="team_playoff_team_each">
								<div class="teamnum">W{{item.conferenceseed1}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo1 + ')'}"></div>
								<div class="teamname">{{item.shortname1}}</div>
								<div class="teamscore">{{item.wincount1}}</div>
							</div>
						</div>
					</div>
					<div class="teams_right">
						<div class="team_playoff_team" v-for="item in first.east">
							<div class="team_playoff_team_each">
								<div class="teamscore">{{item.wincount2}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo2 + ')'}"></div>
								<div class="teamname">{{item.shortname2}}</div>
								<div class="teamnum">E{{item.conferenceseed2}}</div>
							</div>
							<div class="team_playoff_team_each">
								<div class="teamscore">{{item.wincount1}}</div>
								<div class="teamlogo" :style="{backgroundImage: 'url(' + item.logo1 + ')'}"></div>
								<div class="teamname">{{item.shortname1}}</div>
								<div class="teamnum">E{{item.conferenceseed1}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//	import HeadBar from "./HeadBar.vue"
	export default {
		name: 'hello',
		data() {
			return {
				finalsEast: {},
				finalsWest: {},
				half: {},
				second: {},
				first: {}
			}
		},
		created() {
			var self = this;
			this.$http.get('https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=get_playoff_vs').then(function(res) {
				var result = JSON.parse(res.body);
				self.finalsWest = result.get_playoff_vs.data.final.last[0];
				self.finalsEast = result.get_playoff_vs.data.final.last[1];
				self.half = result.get_playoff_vs.data.half;
				self.second = result.get_playoff_vs.data.second;
				self.first = result.get_playoff_vs.data.first;
			})
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
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
	
	.lincoapp-duel {
		background: #fff;
		padding: 0 .2rem;
	}
	
	.u-title {
		text-align: center;
		line-height: .88rem;
		font-size: .32rem;
		position: relative;
	}
	
	.u-title:after {
		content: '';
		width: 100%;
		height: 1px;
		position: absolute;
		top: 50%;
		left: 0;
		background: #e7e7e7;
	}
	
	.u-title strong {
		padding: 0 .4rem;
		z-index: 100;
		position: relative;
		background: #fff;
		font-weight: normal;
	}
	
	.teams {
		font-size: .24rem;
		overflow: hidden;
		line-height: 0.6rem;
	}
	
	.teams_left {
		width: 2.8rem;
		float: left;
	}
	
	.teams_right {
		width: 2.8rem;
		float: right;
	}
	
	.team_playoff_team {
		margin-bottom: 0.2rem;
	}
	
	.team_playoff_team_each {
		display: flex;
	}
	
	.teamlogo {
		width: 0.6rem;
		height: 0.6rem;
		margin: 0 0.15rem;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.teamname {
		width: 1.2rem;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.teams_left .teamscore {
		margin-left: 0.2rem;
	}
	
	.teams_right .teamscore {
		margin-right: 0.2rem;
	}
	
	.teamnum {
		width: 0.3rem;
		margin: 0 0.1rem;
	}
</style>