<script>
import { mapState, mapActions } from "vuex"
export default {
  data: () => ({}),
  computed: {
    ...mapState({
      forms: (state) => state.form.forms,
    }),
  },
  async created() {
    try {
      await this.bindForms()
    } catch (e) {
      // Show error alert
      console.log("Created", e)
    }
  },
  methods: {
    ...mapActions({
      bindForms: "form/bindForms",
    }),
    copyConfig(config) {
      // copy config to copy buffer
      const input = document.createElement('input', {
        value: "test value"
      })
      input.select()
      input.setSelectionRange(0, 99999) /* For mobile devices */

      /* Copy the text inside the text field */
      document.execCommand("copy");
      
    },
  },
}
</script>
<template>
  <main class="index-page__wrapper">
    <div>
      Description of project
    </div>
    <div>

      <ul v-for="form of forms" :key="form._id">
        <li>
          <div>
            <h3>{{ form.title }}</h3>
            <span>{{ form.description }}</span>
          </div>
          <div>
            <nuxt-link :to="`/edit`">Edit</nuxt-link>
            <span @click="copyConfig(form.config)">Copy config</span>
            <nuxt-link>Preview</nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<style lang="scss">
@import "@/assets/styles/pages/index.scss";
</style>
