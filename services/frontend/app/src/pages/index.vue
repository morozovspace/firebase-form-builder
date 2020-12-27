<script>
import { mapState, mapActions } from "vuex"
export default {
  async fetch({ store }) {
    if (process.browser) return
    try {
      // Binds it on server side then unbind again to avoid memory leaks on the server.
      await store.dispatch("bindNotes")
      store.dispatch("unbindNotes")
    } catch (e) {
      return false
    }
  },
  data: () => ({}),
  computed: {
    ...mapState({
      notes: (state) => state.notes,
    }),
  },
  async mounted() {
    try {
      await this.$store.dispatch("bindNotes")
    } catch (e) {
      // catch errors
    }
  },
  methods: {
    ...mapActions({
      addNote: "addNote",
    }),
  },
}
</script>
<template>
  <main class="index-page__wrapper">
    <h1 @click="addNote">from index {{ notes }}</h1>
    
  </main>
</template>
<style lang="scss">
@import "@/assets/styles/pages/index.scss";
</style>
