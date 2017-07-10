const HIDE_HEAD = 'HIDE_HEAD'
const SHOW_HEAD = 'SHOW_HEAD'
export default {
	[HIDE_HEAD](state) {
		state.isShowHead = false;
	},

	[SHOW_HEAD](state, payload) {
		state.isShowHead = true;
	}
}