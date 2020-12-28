<template>
  <div>Form preview {{ formConfig }}</div>
</template>
<script>
export default {
  computed: {
    formConfig() {
      return this.$route
    },
  },
}
</script>