export default {
  async onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      return
    }

    await commit("SET_AUTH_USER", { authUser })
  },
}
