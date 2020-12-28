//  https://apexcharts.com/docs/vue-charts/
//  https://storybook.js.org/docs/react/essentials/controls#annotation
import Toggle from "./Toggle"
export default {
  title: "Controls/Toggle",
  component: Toggle,
  argTypes: {
    value: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
}

export const Default = (arg, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: '<Toggle v-bind="$props" />',
})

export const Disable = (arg, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: '<Toggle v-bind="$props" />',
})
