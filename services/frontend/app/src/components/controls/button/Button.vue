<script>
export default {
  props: {
    label: {
      type: String,
      default: "Button",
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
}
</script>
<template>
  <button
    :disabled="disabled"
    :class="['controls-button__wrapper', `controls-button__wrapper-${size}`]"
  >
    {{ label }}
  </button>
</template>
