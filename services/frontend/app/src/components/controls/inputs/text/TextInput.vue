<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Label",
    },
    inputMode: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    defaultValue: null,
  }),
  watch: {
    value(newValue, oldValue) {
      this.defaultValue = newValue
    },
  },
  created() {
    const { value } = this
    this.defaultValue = value
  },
}
</script>
<template>
  <label
    :class="[
      'controls-inputs__text-wrapper',
      `controls-inputs__text-wrapper-${size}`,
    ]"
  >
    {{ label }}
    <input
      v-model="defaultValue"
      :class="[
        'controls-inputs__text-input',
        `controls-inputs__text-input-${size}`,
      ]"
      type="text"
      :inputmode="inputMode"
      :disabled="disabled"
      @change="$emit('toggle', defaultValue)"
    />
  </label>
</template>
<style lang="scss">
@import "@/assets/styles/components/controls/Toggle.scss";
</style>
