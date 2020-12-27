<script>
import { mapState, mapActions } from "vuex"
export default {
  computed: {
    ...mapState({
      theme: (state) => state.theme,
    }),
  },
  methods: {
    ...mapActions({
      switchTheme: "switchTheme",
    }),
  },
}
</script>
<template>
  <button @click="switchTheme">Change theme</button>
</template>
