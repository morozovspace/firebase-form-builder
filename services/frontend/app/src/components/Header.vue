<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState({
      theme: (state) => state.theme,
    }),
  },
}
</script>
<template>
  <header class="header__wrapper">
    <nuxt-link class="header__logo" to="/">
      <h2>Firebase Nuxt TODOS Template {{ theme }}</h2>
    </nuxt-link>
    <Theme />
  </header>
</template>
<style lang="scss">
@import "@/assets/styles/components/Header.scss";
</style>
