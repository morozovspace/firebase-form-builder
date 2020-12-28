<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    const { value } = this
    this.defaultValue = value
  },
  data: () => ({
    defaultValue: null,
  }),
}
</script>
<template>
  <div class="controls-toggle__wrapper">
    <input
      class="controls-toggle__checkbox"
      type="checkbox"
      v-model="defaultValue"
      @change="$emit('toggle', defaultValue)"
      :disabled="disabled"
    >
    <div class="controls-toggle__knobs"></div>
    <div class="controls-toggle__layer"></div>
  </div>
</template>
<style lang="scss">
@import "@/assets/styles/components/controls/Toggle.scss";
</style>
