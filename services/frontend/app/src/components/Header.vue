<script>
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions({
      switchTheme: "theme/switchTheme"
    }),
  },
}
</script>
<template>
  <header class="header__wrapper">
    <nuxt-link class="header__logo" to="/">
      <h2>Firebase Nuxt TODOS Template</h2>
    </nuxt-link>
    <Toggle @toggle="switchTheme"/>
  </header>
</template>
<style lang="scss">
@import "@/assets/styles/components/Header.scss";
</style>
