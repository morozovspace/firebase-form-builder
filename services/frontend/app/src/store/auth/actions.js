export default {
  async onAuthStateChanged({ commit }, { authUser, claims }) {
    if (!authUser) {
      return
    }

    await commit("SET_AUTH_USER", { authUser, claims })
  },
}
