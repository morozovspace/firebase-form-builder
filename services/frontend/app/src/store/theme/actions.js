export default {
  switchTheme({ state, commit }) {
    state.theme === "light"
      ? commit("SET_THEME", "dark")
      : commit("SET_THEME", "light")
  },
}
