// Button.stories.js
import Button from "./Button"

export default {
  title: "Controls/Button",
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      defaultValue: "My custom button",
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
  components: { Button },
  props: Object.keys(argTypes),
  template: "<Button v-bind='$props' />",
})

// Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  label: "Default button",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
