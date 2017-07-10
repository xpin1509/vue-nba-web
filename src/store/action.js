export default {
	hideHead({commit}) {
		commit('HIDE_HEAD');
	},
	showHead({commit}) {
		commit('SHOW_HEAD');
	}
}