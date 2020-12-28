import { firestoreAction } from "vuexfire"
export default {
  addForm: firestoreAction(async function (context, payload) {
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
  bindForms: firestoreAction(async function ({ bindFirestoreRef }) {
    try {
      const ref = await bindFirestoreRef("forms", this.$fire.firestore.collection("forms"), {
        wait: true,
      })
      return Promise.resolve(ref)
    } catch (e) {
      return Promise.reject(e)
    }
  }),
  unbindForms: firestoreAction(async function ({ unbindFirestoreRef }) {
    try {
      await unbindFirestoreRef("forms", false)
    } catch (e) {
      return Promuis
    }
  }),
}
