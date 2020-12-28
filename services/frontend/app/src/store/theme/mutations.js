export default {
  SET_THEME(state, value) {
    state.theme = value
    this.$cookies.set("theme", state.theme, { path: process.env.GITHUB_REPOSITORY })
  },
}
