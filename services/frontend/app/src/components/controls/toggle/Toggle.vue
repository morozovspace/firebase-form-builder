<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "toggle button",
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
  <div
    :class="['controls-toggle__wrapper', `controls-toggle__wrapper-${size}`]"
  >
    <input
      v-model="defaultValue"
      :aria-label="label"
      :class="[
        'controls-toggle__checkbox',
        `controls-toggle__checkbox-${size}`,
      ]"
      type="checkbox"
      :disabled="disabled"
      @change="$emit('toggle', defaultValue)"
    />
    <div
      :class="['controls-toggle__knobs', `controls-toggle__knobs-${size}`]"
    ></div>
    <div
      :class="['controls-toggle__layer', `controls-toggle__layer-${size}`]"
    ></div>
  </div>
</template>
<style lang="scss">
@import "@/assets/styles/components/controls/Toggle.scss";
</style>
