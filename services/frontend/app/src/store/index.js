import { vuexfireMutations, firestoreAction } from "vuexfire"

export const actions = {
  async nuxtServerInit(
    { state, commit, dispatch },
    { res, req, redirect, $cookies }
  ) {
    if (req.headers && req.headers.cookie) {
      if (
        process.env.NODE_ENV === "production" &&
        req.headers.host !== process.env.HOSTNAME
      ) {
        return redirect(process.env.HOSTNAME)
      }
      const theme = $cookies.get("theme")
      if (theme === "dark") {
        commit("SET_THEME", theme)
      } else if (theme === "light") {
        commit("SET_THEME", theme)
      } else {
        commit("SET_THEME", state.theme)
      }
    }

    /** authUser on the server */
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, ...authUser } = res.locals.user

      await dispatch("auth/onAuthStateChanged", {
        authUser,
        claims,
      })
    }
  },
  switchTheme({ state, commit }) {
    state.theme === "light"
      ? commit("SET_THEME", "dark")
      : commit("SET_THEME", "light")
  },
  addNote: firestoreAction(async function (context, payload) {
    console.log("ADD NOTE")
    try {
      const h = this.$fire.firestore.collection("notes").add({ text: "text" })
      h.then((res) => {
        console.log("RESPOSNE")
        console.log(res)
      }).catch((e) => {
        console.log(e)
      })
      await this.$fire.firestore
        .collection("notes")
        .add(JSON.parse(JSON.stringify({ test: "Text" })))
    } catch (e) {
      console.log(Object.keys(e))
    }
  }),
  saveNote({ state }, { name, text }) {
    // Save note
  },
  bindNotes: firestoreAction(async function ({ bindFirestoreRef }) {
    await bindFirestoreRef("notes", this.$fire.firestore.collection("notes"), {
      wait: true,
    })
  }),
  unbindNotes: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef("notes", false)
  }),
}

export const mutations = {
  ...vuexfireMutations,
  SET_COUNT_DOCUMENT: (state, countDocument) => {
    state.countDocument = countDocument
  },
  SET_THEME(state, value) {
    state.theme = value
    this.$cookies.set("theme", state.theme)
  },
}

export const state = () => ({
  theme: "dark",
  notes: [],
})
