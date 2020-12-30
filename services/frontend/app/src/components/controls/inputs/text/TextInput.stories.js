// Toggle.stories.js
import TextInput from "./TextInput"

export default {
  title: "Controls/Inputs/Text",
  argTypes: {
    value: {
      type: "string",
      control: {
        type: "text",
      },
      defaultValue: "Simple text input",
      description: "Text value",
    },
    label: {
      type: "string",
      control: {
        type: "text",
      },
      defaultValue: "Label",
      description: "Input label",
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
        "https://www.figma.com/file/1iHx5jWf2dnSivjYgLRioz/Firebase-Form-Builder?node-id=25%3A351",
    },
    controls: { expanded: true },
  },
}

// We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
  components: { TextInput },
  props: Object.keys(argTypes),
  template: "<TextInput v-bind='$props' />",
})

// Each story then reuses that template
export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
