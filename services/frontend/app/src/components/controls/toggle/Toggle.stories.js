// Toggle.stories.js
import Toggle from "./Toggle"

export default {
  title: "Controls/Toggle",
  argTypes: {
    value: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    size: {
      control: {
        type: "select",
        options: ["default"],
      },
      defaultValue: "default",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1iHx5jWf2dnSivjYgLRioz/Untitled",
    },
    controls: { expanded: true },
  },
}

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: "<Toggle v-bind='$props' />",
})

// Each story then reuses that template
export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
