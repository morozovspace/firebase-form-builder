// Toggle.stories.js
import Toggle from "./Toggle"

export default {
  title: "Controls/Toggle",
  argTypes: {
    value: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "On/ off state",
    },
    label: {
      type: "string",
      control: {
        type: "text",
      },
      defaultValue: "Test label",
      description: "Aria label",
    },
    size: {
      type: "enum",
      control: {
        type: "select",
        options: ["default"],
      },
      defaultValue: "default",
      description: "Toggle size",
    },
    disabled: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      defaultValue: false,
      description: "Disable toggle",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/1iHx5jWf2dnSivjYgLRioz/Firebase-Form-Builder?node-id=10%3A4",
    },
    controls: { expanded: true },
  },
}

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: "<Toggle v-bind='$props'/>",
})

// Each story then reuses that template
export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
