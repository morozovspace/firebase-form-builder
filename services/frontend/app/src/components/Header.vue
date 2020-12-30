<script>
import { mapState, mapActions } from "vuex"
export default {
  computed: {
    ...mapState({
      theme: (state) => state.theme.theme,
    }),
  },
  methods: {
    ...mapActions({
      switchTheme: "theme/switchTheme",
    }),
  },
}
</script>
<template>
  <header class="header__wrapper">
    <nuxt-link class="header__link" to="/">
      <h2>Firebase Form Builder</h2>
    </nuxt-link>
    <Toggle :value="theme === 'dark'" @toggle="switchTheme" />
  </header>
</template>
<style lang="scss">
@import "@/assets/styles/components/Header.scss";
</style>
