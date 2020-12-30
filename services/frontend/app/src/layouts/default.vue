<template>
  <div :class="[`theme-${theme}`]">
    <div :class="['page__wrapper']">
      <div :class="['header-and-page__wrapper']">
        <Header />
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/styles/layouts/default.scss";
</style>
<script>
import { mapState, mapMutations } from "vuex"
export default {
  data: () => ({}),
  computed: {
    ...mapState({
      theme: (state) => state.theme.theme,
    }),
  },
  created() {
    const theme = this.$cookies.get("theme")
    if (theme === "dark" || theme === "light") {
      this.setTheme(theme)
    } else {
      this.setTheme(this.theme)
    }
  },
  methods: {
    ...mapMutations({
      setTheme: "theme/SET_THEME",
    }),
  },
}
</script>
